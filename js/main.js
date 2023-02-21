// Obtiene la URL actual
var currentUrl = window.location.href;

// Obtiene todos los enlaces de navegación
var navLinks = document.querySelectorAll('.nav-link');

// Recorre todos los enlaces de navegación
for (var i = 0; i < navLinks.length; i++) {
  var link = navLinks[i];
  var href = link.getAttribute('href');

  // Compara el atributo href del enlace con la URL actual
  if (currentUrl.indexOf(href) > -1) {
    link.classList.add('active');
  }
}