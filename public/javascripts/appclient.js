// Filename: appclient.js
// Student: Nayeon shim
// StudentId: 301138611
// Date: Oct 29, 2022
//Web App name: To-do list

console.log("app script is working.");

if (getTitle == "To-Do List") {
  let deleteButtons = document.querySelectorAll(".btn-danger");

  for (button of deleteButtons) {
    button.addEventListener("click", (event) => {
      if (!confirm("Are you sure?")) {
        event.preventDefault();
      }
    });
  }
}

if (getTitle == "Sign-up Form") {
  const confirm = document.querySelector("input[name=password_confirm]");

  confirm.addEventListener("change", onChange);
}

function onChange() {
  const password = document.querySelector("input[name=password]");
  const confirm = document.querySelector("input[name=password_confirm]");

  if (confirm.value === password.value) {
    confirm.setCustomValidity("");
  } else {
    confirm.setCustomValidity("Passwords do not match");
  }
}
