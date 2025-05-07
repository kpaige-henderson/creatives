// Reveal elements on scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
  
    reveals.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 100; // Adjust if you want it to reveal earlier/later
  
      if (elementTop < windowHeight - revealPoint) {
        el.classList.add('active');
      }
    });
  }
  
  // Run on scroll
  window.addEventListener('scroll', revealOnScroll);
  
  // Run once on page load
  window.addEventListener('load', revealOnScroll);
  