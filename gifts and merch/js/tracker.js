document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const navProducts = document.querySelector(".nav_products");
    const links = navProducts.querySelectorAll("a");
    const tracker = document.createElement("span");
    tracker.className = "tracker";
    navProducts.prepend(tracker); // Помещаем трекер перед списком

    let currentIndex = 0;

    links.forEach((link, index) => {
        link.addEventListener("mouseenter", () => {
            const rect = link.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect(); // Получаем размеры контейнера
            const offsetLeft = rect.left - containerRect.left + window.scrollX; // Вычисляем смещение относительно контейнера
            const width = rect.width;

            tracker.style.transform = `translateX(${offsetLeft}px)`;
            tracker.style.width = `${width}px`;
            currentIndex = index;
        });

        link.addEventListener("mouseleave", () => {
            const currentLink = links[currentIndex];
            const rect = currentLink.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect(); // Получаем размеры контейнера
            const offsetLeft = rect.left - containerRect.left + window.scrollX; // Вычисляем смещение относительно контейнера
            const width = rect.width;

            tracker.style.transform = `translateX(${offsetLeft}px)`;
            tracker.style.width = `${width}px`;
        });
    });

    // Устанавливаем начальную позицию трекера на первую ссылку
    const firstLink = links[0];
    const firstRect = firstLink.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    tracker.style.transform = `translateX(${firstOffsetLeft}px)`;
    tracker.style.width = `${firstWidth}px`;
});