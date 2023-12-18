
document.addEventListener("DOMContentLoaded", function () {
    // Отримання посилань меню
    const menuLinks = document.querySelectorAll(".menu__item");

    // Отримання чекбоксу гамбургерного меню
    const menuToggle = document.getElementById("menu__toggle");

    // Додавання обробника подій для кожного посилання меню
    menuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            // Закриття меню, якщо воно відкрите
            if (menuToggle.checked) {
                menuToggle.checked = false;
            }
        });
    });
});