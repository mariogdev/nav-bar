const hamburger = document.querySelector(".maqui-nav-menu");
const navLinks = document.querySelector(".maqui-nav-links");
const links = document.querySelectorAll(".maqui-nav-links li");

let deployLinks = function () {
    //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
        var line1 = document.querySelector(".line1");
        var line2 = document.querySelector(".line2");
        var line3 = document.querySelector(".line3");
        if (hamburger.classList.contains("nav-toggle")) {
            line1.style.width = "35px";
            line2.style.width = "35px";
            line3.style.width = "15px";
        }
        else {
            line1.style.width = "35px";
            line2.style.width = "35px";
            line3.style.width = "0px";
        }
        link.addEventListener('click', deployLinks);
    });
    //Hamburger Animation
    hamburger.classList.toggle("nav-toggle");
}
hamburger.addEventListener('click', deployLinks);