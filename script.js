const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const progress = document.getElementById("scrollProgress");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("menu-open");
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => navbar.classList.remove("menu-open"));
});

window.addEventListener("scroll", () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${total > 0 ? (window.scrollY / total) * 100 : 0}%`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
document.getElementById("year").textContent = new Date().getFullYear();
