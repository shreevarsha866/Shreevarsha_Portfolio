// =========================
// AUTO YEAR UPDATE
// =========================
document.getElementById("year").textContent = new Date().getFullYear();

// =========================
// TYPEWRITER ANIMATION
// =========================
const typingElement = document.getElementById("typing");
const typingTexts = ["Data Scientist", "ML Enthusiast", "Python Developer"];
let i = 0,
  j = 0,
  isDeleting = false;

function typeEffect() {
  const current = typingTexts[i];
  typingElement.textContent = current.substring(0, j);

  if (!isDeleting && j < current.length) {
    j++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % typingTexts.length;
    setTimeout(typeEffect, 800);
  }
}
if (typingElement) typeEffect();

// =========================
// SCROLL REVEAL EFFECT
// =========================
window.addEventListener("scroll", revealSections);

function revealSections() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((section) => {
    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
}

// =========================
// CONTACT FORM SUCCESS POPUP
// =========================
const form = document.getElementById("contactForm");
const popup = document.getElementById("successPopup");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Simulate message send delay
    setTimeout(() => {
      popup.style.display = "flex";
      form.reset();
    }, 800);
  });
}

function closePopup() {
  popup.style.display = "none";
}

// =========================
// OPTIONAL SMOOTH SCROLL NAVIGATION
// =========================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// =========================
// ANIMATED ICON GLOW EFFECT (For Contact Icons)
// =========================
const animatedIcons = document.querySelectorAll(".animated-icon i");
animatedIcons.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    icon.style.transform = "scale(1.2)";
    icon.style.transition = "0.3s ease";
  });
  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "scale(1)";
  });
});
