document.getElementById('open_menu').addEventListener('click', function() {
document.querySelector('.overlay').style.display = 'block';
document.querySelector('.popup-menu').style.display = 'block';});

// Закрытие меню при клике вне него
window.addEventListener('click', function(event) {
    if (!event.target.closest('.popup-menu') && !event.target.id === 'open_menu') {
        document.querySelector('.overlay').style.display = 'none';
        document.querySelector('.popup-menu').style.display = 'none';}});

// Закрытие меню при нажатии на кнопку закрытия
    document.querySelector('.close-menu').addEventListener('click', function() {
        document.querySelector('.overlay').style.display = 'none';
        document.querySelector('.popup-menu').style.display = 'none';});