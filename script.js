const input = document.querySelector(".input");
const body = document.querySelector("body");

input.checked = JSON.parse(localStorage.getItem("mode"));

input.addEventListener("click", () => {
  modeToggle();
  updateLocalStorage();
});

function modeToggle() {
  if (input.checked) {
    body.style.backgroundColor = "#232327";
  } else {
    body.style.backgroundColor = "white";
  }
}

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(input.checked));
}

modeToggle();
