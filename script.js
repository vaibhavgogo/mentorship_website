function filterProfiles(role) {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    if (role === "All" || card.getAttribute("data-role") === role) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const response = document.getElementById("formResponse");

  if (name && email && message) {
    response.textContent = `Thanks for reaching out, ${name}! We'll respond soon.`;
    this.reset();
  } else {
    response.textContent = "Please fill in all fields.";
    response.style.color = "red";
  }
});
