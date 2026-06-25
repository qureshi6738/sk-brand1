// Mobile menu
const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("show");
  });

  // close menu after clicking a link on mobile
  const navLinks = siteNav.querySelectorAll("a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("show");
    });
  });
}

// FAQ accordion
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(button => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    const answer = faqItem.querySelector(".faq-answer");
    const icon = button.querySelector(".faq-icon");

    const isOpen = answer.style.display === "block";

    // optional: close all first
    document.querySelectorAll(".faq-answer").forEach(item => {
      item.style.display = "none";
    });
    document.querySelectorAll(".faq-icon").forEach(i => {
      i.textContent = "+";
    });

    if (!isOpen) {
      answer.style.display = "block";
      icon.textContent = "−";
    }
  });
});