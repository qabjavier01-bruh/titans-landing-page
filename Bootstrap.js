
function showMessage() {
  alert("Thanks for your interest! More content coming soon.");
}

function changeButtonText() {
  document.getElementById("ctaBtn").innerText = "Clicked!";
}

document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Registration Successful! Welcome to the Titans.");
  $('#registerModal').modal('hide');
});

const cards = document.querySelectorAll(".feature-card");
cards.forEach(function(card) {
  card.addEventListener("mouseenter", function () {
    card.style.background = "#1f1f1f";
  });
  card.addEventListener("mouseleave", function () {
    card.style.background = "transparent";
  });
});