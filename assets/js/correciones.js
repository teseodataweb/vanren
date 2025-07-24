function applyScrolled() {
  const header = document.querySelector('.site-header-one'); // Reasignar la variable header
  const scrollTop = window.scrollY;
  if (scrollTop >= 500) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', applyScrolled);

// Agregar evento de click a todos los enlaces
document.addEventListener('click', function(event) {
  if (event.target.tagName === 'A') {
    // Retomar el componente cuando se haga click en un enlace
    applyScrolled();
  }
});