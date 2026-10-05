// ===== 1. DARK / LIGHT MODE =====
var themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeButton.textContent = "Light";
  } else {
    themeButton.textContent = "Dark";
  }
});


// ===== 2. PROJECT FILTER (All / Web / App) =====
var filterButtons = document.querySelectorAll(".filter-button");
var projectCards = document.querySelectorAll(".card");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var selected = button.dataset.filter;

    // Highlight the clicked button
    filterButtons.forEach(function (b) {
      b.classList.remove("active");
    });
    button.classList.add("active");

    // Show or hide each project
    projectCards.forEach(function (card) {
      if (selected === "all" || card.dataset.category === selected) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});


// ===== 3. CONTACT FORM (opens the visitor's email app) =====
var myEmail = "you@example.com";   // <-- put your email here

document.getElementById("send-button").addEventListener("click", function () {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();
  var status = document.getElementById("form-status");

  if (name === "" || email === "" || message === "") {
    status.textContent = "Please fill in all the fields.";
    return;
  }

  var subject = "Portfolio message from " + name;
  var body = message + "\n\n" + name + " (" + email + ")";

  window.location.href =
    "mailto:" + myEmail +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

  status.textContent = "Opening your email app...";
});


// ===== 4. FOOTER YEAR =====
document.getElementById("year").textContent = new Date().getFullYear();
