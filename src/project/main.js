document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  });
  document.querySelectorAll('.dropdown-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const dropdown = button.nextElementSibling;
      dropdown.classList.toggle('hidden');
    });
  });
  
  window.addEventListener('resize', () => {
    const menu = document.getElementById('mobile-menu');
    if (window.innerWidth >= 768) {
      menu.classList.add('hidden');
    }
  });
})
