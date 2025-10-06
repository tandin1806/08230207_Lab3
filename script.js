// ============================================================
// TANDIN WANGMO - PERSONAL PORTFOLIO ENHANCEMENTS (Lab 03)
// ============================================================

// -----------------------------
// COMMON FEATURES
// -----------------------------

// 🌙 Theme Toggle
const themeBtn = document.getElementById("themeBtn");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeBtn.textContent = document.body.classList.contains("dark-mode")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";

    // Toggle dark mode styles for cards/texts
    document.querySelectorAll(".card, .skill-card, .experience-item, .project-card")
      .forEach(el => el.classList.toggle("dark-mode-card"));

    // Update universal banner and text contrast
    updateAllTextContrast();

    document.body.style.transition = "background 0.6s ease, color 0.6s ease";
  });
}

// 🕒 Dynamic Footer Year
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
} else {
  const footerPara = document.querySelector("footer p");
  if (footerPara)
    footerPara.textContent = `© ${new Date().getFullYear()} Tandin Wangmo | All Rights Reserved`;
}

// -----------------------------
// UNIVERSAL DYNAMIC MESSAGE (All pages)
// -----------------------------
(function showUniversalMessage() {
  const existing = document.querySelector(".dynamic-banner");
  if (!existing) {
    const banner = document.createElement("div");
    banner.className = "dynamic-banner";
    banner.textContent =
      "🌸 Welcome to my portfolio! Hover over my name to see the magic! 🌸";

    Object.assign(banner.style, {
      position: "fixed",
      top: "10px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "rgba(255, 255, 255, 0.7)",
      color: "#222",
      padding: "8px 16px",
      borderRadius: "20px",
      fontWeight: "600",
      zIndex: "999",
      backdropFilter: "blur(6px)",
      boxShadow: "0 0 8px rgba(0,0,0,0.1)",
      transition: "all 0.5s ease",
    });

    document.body.appendChild(banner);
  }
})();

// -----------------------------
// DARK MODE TEXT CONTRAST
// -----------------------------
function updateAllTextContrast() {
  const darkMode = document.body.classList.contains("dark-mode");

  // Universal banner
  const banner = document.querySelector(".dynamic-banner");
  if (banner) {
    if (darkMode) {
      banner.style.background = "rgba(50, 50, 50, 0.85)";
      banner.style.color = "#FFD700";
      banner.style.boxShadow = "0 0 12px rgba(255,255,255,0.3)";
    } else {
      banner.style.background = "rgba(255, 255, 255, 0.7)";
      banner.style.color = "#222";
      banner.style.boxShadow = "0 0 8px rgba(0,0,0,0.1)";
    }
  }

  // All text elements
  const textElements = document.querySelectorAll("p, h1, h2, h3, span, li, label, a, .exp-text, .edu-text");
  textElements.forEach(el => {
    if (darkMode) {
      el.style.color = "#f5f5dc"; // light beige for contrast
      el.style.fontWeight = "500"; // slightly bolder for readability
    } else {
      el.style.color = ""; // revert to original CSS
      el.style.fontWeight = "";
    }
  });
}

// Run on load
window.addEventListener("load", updateAllTextContrast);

// -----------------------------
// HOME PAGE
// -----------------------------
const nameText = document.getElementById("nameText");
const dynamicMessage = document.getElementById("dynamicMessage");
if (nameText && dynamicMessage) {
  nameText.addEventListener("mouseover", () => {
    dynamicMessage.textContent = "Glad to see you here! 🌟";
  });
  nameText.addEventListener("mouseout", () => {
    dynamicMessage.textContent =
      "Welcome to my portfolio! Hover over my name above 👆 to see the magic!";
  });
}

// -----------------------------
// ABOUT PAGE
// -----------------------------
const aboutSection = document.querySelector(".about-container");
if (aboutSection) {
  const quotes = [
    "Creativity is intelligence having fun. – Albert Einstein",
    "In the middle of every difficulty lies opportunity.",
    "Simplicity is the soul of efficiency.",
    "The little things make life big."
  ];

  const quoteEl = document.createElement("p");
  quoteEl.className = "about-quote";
  aboutSection.prepend(quoteEl);

  let quoteIndex = 0;
  const updateQuote = () => {
    quoteEl.textContent = quotes[quoteIndex];
    quoteIndex = (quoteIndex + 1) % quotes.length;
  };
  updateQuote();
  setInterval(updateQuote, 4000);
}

// Card hover glow
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.05)";
    card.style.boxShadow = "0 0 20px rgba(0,0,0,0.3)";
  });
  card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1)";
    card.style.boxShadow = "none";
  });
});

// -----------------------------
// EDUCATION PAGE
// -----------------------------
document.querySelectorAll(".edu-item").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".edu-item").forEach(i => i.classList.remove("highlight"));
    item.classList.add("highlight");
  });
});

// -----------------------------
// SKILLS PAGE
// -----------------------------
document.querySelectorAll(".skill-card").forEach(card => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.05)";
    card.style.transition = "0.3s";
    card.style.boxShadow = "0 0 15px rgba(0,0,0,0.3)";
  });
  card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1)";
    card.style.boxShadow = "none";
  });
});

// Skills experience fade-in
const expItems = document.querySelectorAll(".experience-item");
const fadeInExp = () => {
  expItems.forEach(item => {
    const itemPos = item.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;
    if (itemPos < screenPos) {
      item.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", fadeInExp);
window.addEventListener("load", fadeInExp);

// -----------------------------
// PROJECTS PAGE
// -----------------------------
document.querySelectorAll(".project-card .btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    const details = btn.previousElementSibling;
    if (!details.style.display || details.style.display === "none") {
      details.style.display = "block";
      btn.textContent = "Hide Details";
    } else {
      details.style.display = "none";
      btn.textContent = "View Project";
    }
  });
});

// -----------------------------
// CONTACT PAGE
// -----------------------------
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const nameInput = contactForm.querySelector('input[type="text"]');
    const emailInput = contactForm.querySelector('input[type="email"]');
    const messageInput = contactForm.querySelector("textarea");

    let valid = true;

    [nameInput, emailInput, messageInput].forEach(input => {
      input.style.borderColor = "#ccc";
    });

    if (!nameInput.value.trim()) {
      nameInput.style.borderColor = "red";
      valid = false;
    }
    if (!emailInput.value.trim() || !emailInput.value.includes("@") || !emailInput.value.includes(".")) {
      emailInput.style.borderColor = "red";
      valid = false;
    }
    if (!messageInput.value.trim()) {
      messageInput.style.borderColor = "red";
      valid = false;
    }

    if (!valid) {
      alert("⚠️ Please fix the highlighted fields!");
      return;
    }

    alert(`✅ Thank you, ${nameInput.value.trim()}! Your message has been sent successfully.`);
    contactForm.reset();
  });
}
