const slider = document.querySelector('.logos-slider');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
    
let currentIndex = 0;
const slideWidth = slider.children[0].clientWidth + 10; // ширина одного слайда + отступ
    
// Функция для прокрутки вправо
function moveNext() {
    if (currentIndex < slider.children.length - 1) {
        currentIndex++;
        slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
    }}
    
// Функция для прокрутки влево
function movePrev() {
    if (currentIndex > 0) {
        currentIndex--;
        slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
    }}
    
// Назначаем обработчики событий кнопкам
nextBtn.addEventListener('click', moveNext);
prevBtn.addEventListener('click', movePrev);