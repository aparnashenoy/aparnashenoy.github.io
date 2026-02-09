/* ================= YEAR AUTO UPDATE ================= */
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* ================= SMOOTH SCROLL FOR NAV LINKS ================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId.length > 1) {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  });
});

/* ================= ACTIVE NAV LINK ON SCROLL ================= */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navlinks a");

function activateNavLink() {
  let scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + sectionId) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", activateNavLink);

/* ================= OPTIONAL: FADE-IN ANIMATION ON SCROLL ================= */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".card, .project").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});
