document.getElementById('toggleButton').addEventListener('click', function () {
    const hiddenList = document.getElementById('hiddenList');
    const materialText = document.querySelector('.material_button p');

    // Проверяем наличие класса visible
    if (hiddenList.className.includes('visible')) {
        hiddenList.className = '';
        materialText.classList.remove('active'); // Убираем активный класс
    } else {
        hiddenList.className = 'visible';
        materialText.classList.add('active'); // Добавляем активный класс
    }
});