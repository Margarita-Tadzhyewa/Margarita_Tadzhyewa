// Кнопка прокрутки вверх
document.getElementById("arrowTop").onclick = function() {
    // Плавная прокрутка к началу страницы
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Параметр для плавной прокрутки
    });
};

// Скрываем кнопку, когда страница находится сверху
window.addEventListener('scroll', function() {
    const button = document.getElementById("arrowTop");
    if (window.pageYOffset > document.documentElement.clientHeight) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});