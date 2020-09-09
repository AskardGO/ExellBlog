let buttonChecker = document.querySelector(".menu__button-checker");
let button = document.querySelector(".menu__button");
const buttonLines = document.querySelector(".menu__lines");

buttonChecker.addEventListener("click", Button);


function Button() {
    buttonLines.classList.toggle("menu_lines-active")
}