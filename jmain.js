

document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('navbar-toggle');
  const navbarMenu = document.getElementById('navbar-menu');

  toggleButton.addEventListener('click', function () {
      const expanded = toggleButton.getAttribute('aria-expanded') === 'true' || false;
      toggleButton.setAttribute('aria-expanded', !expanded);
      navbarMenu.classList.toggle('open', !expanded);
  });
});
