document.addEventListener('DOMContentLoaded', () => {
  const titles = document.querySelectorAll('h2, h3, h4');

  const observerOptions = {
    root: null,
    threshold: 1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__bounce');
      } else {
        entry.target.classList.remove('animate__animated', 'animate__bounce');
      }
    });
  }, observerOptions);

  titles.forEach(title => {
    observer.observe(title);
  });
});