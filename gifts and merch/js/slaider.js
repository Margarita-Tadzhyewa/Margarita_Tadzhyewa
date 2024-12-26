document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slaider');
    const imagesContainer = document.querySelector('.slider-images');
    const images = document.querySelectorAll('.slider-images img');
    const arrowLeft = document.querySelector('.left');
    const arrowRight = document.querySelector('.right');

    let currentIndex = 0;
    const imageWidth = images[0].offsetWidth + parseInt(getComputedStyle(images[0]).marginRight); // ширина одного изображения с учетом отступа

    function moveSlider(direction) {
        if (direction === 'next') {
            currentIndex++;
            if (currentIndex > images.length - 1) {
                currentIndex = 0;
            }
        } else if (direction === 'prev') {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = images.length - 1;
            }
        }
        
        imagesContainer.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
    }

    arrowLeft.addEventListener('click', () => moveSlider('prev'));
    arrowRight.addEventListener('click', () => moveSlider('next'));
});