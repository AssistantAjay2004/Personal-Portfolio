// Dark Mode Toggle
const a = document.getElementById("theme-toggle");
a.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Smooth Scroll
const links = document.querySelectorAll("nav ul li a");
links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});

document.querySelector(".contact-form").addEventListener("submit", function(e) {
  const email = document.getElementById("email").value;
  
  if (!email.includes("@")) {
    alert("Please enter a valid email.");
    e.preventDefault();
  }
});