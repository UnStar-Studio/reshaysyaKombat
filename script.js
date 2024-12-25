//Ссылки на элементы сайта
var game = document.getElementById("game");
var info = document.getElementById("info");

const clickCounter = document.getElementById('click-counter');
const clickButton = document.getElementById('click-button');
//Переменные сайта
let count = localStorage.getItem("count");
clickCounter.textContent = count;

//Начальное состояние элементов сайта
gameActiv()
setInterval(update, 5);
//Функции сайта
//Промокоды
//Функции управления вкладками сайта
function gameActiv() {
    game.style.display = "block";
    info.style.display = "none";
    promo.style.display = "none";
}
function infoActiv() {
    game.style.display = "none";
    promo.style.display = "none";
    info.style.display = "block";
}
function promoActiv() {
    game.style.display = "none";
    promo.style.display = "block";
    info.style.display = "none";
}
//Главная функция сайта
function main() {
    count++;
    clickCounter.textContent = count;
    localStorage.setItem("count", count);
}
function update() {
    clickCounter.textContent = count;
}