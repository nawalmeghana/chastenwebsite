// Animation utilities
export function initializeAnimations() {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all elements with fade-in class
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  // Add smooth scrolling behavior
  document.documentElement.style.scrollBehavior = 'smooth';
}

// Utility function to add staggered animations
export function addStaggeredAnimation(elements, delay = 100) {
  elements.forEach((element, index) => {
    element.style.animationDelay = `${index * delay}ms`;
  });
}