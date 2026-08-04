const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const links = [...document.querySelectorAll(".nav-links a")];
const sections = [...document.querySelectorAll("main section[id]")];

const setMenu = (open) => {
  toggle?.classList.toggle("open", open);
  navLinks?.classList.toggle("open", open);
  toggle?.setAttribute("aria-expanded", String(open));
  toggle?.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
};

toggle?.addEventListener("click", () => setMenu(!navLinks.classList.contains("open")));
links.forEach((link) => link.addEventListener("click", () => setMenu(false)));

window.addEventListener("scroll", () => {
  header?.classList.toggle("scrolled", window.scrollY > 20);

  let current = "";
  for (const section of sections) {
    if (window.scrollY >= section.offsetTop - 180) current = section.id;
  }
  links.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
}, { passive: true });

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const reveals = document.querySelectorAll(".reveal");

if (reduceMotion || !("IntersectionObserver" in window)) {
  reveals.forEach((item) => item.classList.add("visible"));
} else {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach((item) => observer.observe(item));
}

document.getElementById("year").textContent = new Date().getFullYear();
