
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 0);
});


document.querySelectorAll(".animated-button").forEach(button => {
  button.addEventListener("mouseenter", function () {
    button.classList.add("hovered");
  });
  button.addEventListener("mouseleave", function () {
    button.classList.remove("hovered");
  });
});

window.addEventListener("load", function () {
  document.querySelector(".hero-content").classList.add("fade-in");
});
