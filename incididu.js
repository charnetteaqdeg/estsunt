let isLoggedIn = true;

function updateButtonLabel() {
  let button = document.getElementById("loginButton");
  if (isLoggedIn) {
    button.innerHTML = "Logout";
  } else {
    button.innerHTML = "Login";
  }
}

updateButtonLabel();
