// Récupérer les éléments de navigation
var navItems = document.querySelectorAll('nav a');

// Ajouter un gestionnaire d'événements pour chaque élément de navigation
navItems.forEach(function(item) {
   item.addEventListener('click', function(event) {
      event.preventDefault();
      var sectionId = item.getAttribute('href');
      var section = document.querySelector(sectionId);

      // Masquer toutes les sections
      var sections = document.querySelectorAll('section');
      sections.forEach(function(section) {
         section.style.display = 'none';
      });

      // Afficher la section sélectionnée
      section.style.display = 'block';
   });
});