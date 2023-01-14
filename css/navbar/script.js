const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];

toggleButton.addEventListener("click", () => {
  console.log("clickec");
  navLinks.classList.toggle("active");
});
