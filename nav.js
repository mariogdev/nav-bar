const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
    //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");


        var line1 = document.querySelector(".line1");
        var line2 = document.querySelector(".line2");
        var line3 = document.querySelector(".line3");
        if (hamburger.classList.contains("toggle")) {
            line1.style.width = "35px";
            line2.style.width = "35px";
            line3.style.width = "15px";
        }
        else {
            line1.style.width = "35px";
            line2.style.width = "35px";
            line3.style.width = "0px";
        }
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});