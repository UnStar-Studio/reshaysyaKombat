//Ссылки на элементы сайта
var game = document.getElementById("game");

const clickCounter = document.getElementById('click-counter');
const clickButton = document.getElementById('click-button');
//Переменные сайта
let count = localStorage.removeItem("count");
let count2 = localStorage.getItem("count2");
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
        count2++;
        clickCounter.textContent = count2;
        localStorage.setItem("count2", count2);
        current_click++;
    }
}
function update() {
    clickCounter.textContent = count2;
}
function reset() {
    current_click = 0;
}