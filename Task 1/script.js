window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});