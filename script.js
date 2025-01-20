//Ссылки на элементы сайта
var game = document.getElementById("game");

const clickCounter = document.getElementById('click-counter');
const clickButton = document.getElementById('click-button');
//Переменные сайта
let count = localStorage.getItem("count");
clickCounter.textContent = count;

//Начальное состояние элементов сайта
gameActiv()
setInterval(update, 1);
setInterval(reset, 750);
var current_click;
function gameActiv() {
    game.style.display = "block";
    promo.style.display = "none";
}
function promoActiv() {
    game.style.display = "none";
    promo.style.display = "block";
}
//Главная функция сайта
function main() {
    if (current_click <= 3) {
        count++;
        clickCounter.textContent = count;
        localStorage.setItem("count", count);
        current_click++;
    }
}
function update() {
    clickCounter.textContent = count;
}
function reset() {
    current_click = 0;
}