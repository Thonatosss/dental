
  document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu__toggle');
    const menuOverlay = document.getElementById('menu__overlay');

    menuToggle.addEventListener('change', function () {
      document.body.classList.toggle('menu-open', menuToggle.checked);
    });

    menuOverlay.addEventListener('click', function () {
      menuToggle.checked = false;
      document.body.classList.remove('menu-open');
    });
  });

