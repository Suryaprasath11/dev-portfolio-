const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealEls.forEach((el) => revealObserver.observe(el));

const navbar = document.querySelector(".navbar");
const navToggle = document.querySelector(".nav-toggle");
const navTargets = document.querySelectorAll(".nav-links a, .cv-btn");

if (navbar && navToggle) {
  const closeNav = () => {
    navbar.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const open = navbar.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  navTargets.forEach((target) => {
    target.addEventListener("click", () => {
      if (window.innerWidth <= 900) closeNav();
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeNav();
  });
}
