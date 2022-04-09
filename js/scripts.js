const menuToggle = document.getElementById('hamburger');
const navigationList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
  navigationList.classList.toggle('show');
});