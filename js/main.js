let lis = document.querySelectorAll(".our-work ul li");
let links = document.querySelectorAll(".navbar .nav-link");
let one = document.querySelector(".our-work .row #one")
let two = document.querySelector(".our-work .row #two")
let three = document.querySelector(".our-work .row #three")
let four = document.querySelector(".our-work .row #four")
let five = document.querySelector(".our-work .row #five")
let six = document.querySelector(".our-work .row #six")
let seven = document.querySelector(".our-work .row #seven")
let eight = document.querySelector(".our-work .row #eight")
let btn = document.querySelector(".navbar button");
let mo = [];


links.forEach((link) => {
    link.addEventListener("click", () => {
        mo.push("clicked")
        console.log(mo);
        if (btn.ariaExpanded === "true" && mo.length > 0) {
            btn.click();
        }
    })
})

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        lis.forEach((li) => {
            li.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        if (li.id === "all") {
            one.style.display = "block";
            two.style.display = "block";
            three.style.display = "block";
            four.style.display = "block";
            five.style.display = "block";
            six.style.display = "block";
            seven.style.display = "block";
            eight.style.display = "block";
        }
        if (li.id === "story") {
            one.style.display = "none";
            two.style.display = "none";
            three.style.display = "none";
            four.style.display = "block";
            five.style.display = "block";
            six.style.display = "block";
            seven.style.display = "block";
            eight.style.display = "block";
        }
        if (li.id === "recipe") {
            one.style.display = "none";
            two.style.display = "block";
            three.style.display = "block";
            four.style.display = "block";
            five.style.display = "none";
            six.style.display = "none";
            seven.style.display = "block";
            eight.style.display = "none";
        }
        if (li.id === "photo") {
            one.style.display = "block";
            two.style.display = "block";
            three.style.display = "block";
            four.style.display = "none";
            five.style.display = "block";
            six.style.display = "block";
            seven.style.display = "block";
            eight.style.display = "block";
        }
        if (li.id === "partner") {
            one.style.display = "none";
            two.style.display = "block";
            three.style.display = "none";
            four.style.display = "block";
            five.style.display = "none";
            six.style.display = "block";
            seven.style.display = "none";
            eight.style.display = "none";
        }
    });
});

let navbar = document.getElementById("main-nav");
let navLinks = document.querySelectorAll("#main-nav li a");
let sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        let anything = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= anything - sectionHeight / 2) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(li => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
            // console.log("hwll")
        }
    })
});
navLinks.forEach((li) => {
    li.addEventListener("click", (e) => {
        navLinks.forEach((li) => {
            li.classList.remove("active");
            e.currentTarget.classList.add("active");
        });
    });
});