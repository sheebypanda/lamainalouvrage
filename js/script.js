document.addEventListener('DOMContentLoaded', () => {
  const titles = document.querySelectorAll('h2, h3, h4');

  const observerOptions = {
    root: null,
    threshold: 1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Ajoute les classes Animate.css
        entry.target.classList.add('animate__animated', 'animate__bounce');
        
        // Optionnel : on arrête d'observer une fois l'animation jouée
        // observer.unobserve(entry.target); 
      } else {
        // Optionnel : on retire les classes pour rejouer l'animation au prochain scroll
        entry.target.classList.remove('animate__animated', 'animate__bounce');
      }
    });
  }, observerOptions);

  titles.forEach(title => {
    observer.observe(title);
  });
});