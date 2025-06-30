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

  // Observe all elements with animation classes
  const animationClasses = ['.fade-in', '.slide-in-left', '.slide-in-right'];
  
  animationClasses.forEach(className => {
    document.querySelectorAll(className).forEach(el => {
      observer.observe(el);
    });
  });

  // Add smooth scrolling behavior
  document.documentElement.style.scrollBehavior = 'smooth';

  // Add staggered animations for grid items
  addStaggeredAnimations();
}

// Utility function to add staggered animations
export function addStaggeredAnimations() {
  const productItems = document.querySelectorAll('.product-item');
  const clientItems = document.querySelectorAll('.client-item');
  
  productItems.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.1}s`;
  });
  
  clientItems.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.1}s`;
  });
}

// Utility function for scroll-triggered animations
export function addScrollAnimations() {
  const scrollElements = document.querySelectorAll('.scroll-animate');
  
  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add('scrolled');
  };

  const hideScrollElement = (element) => {
    element.classList.remove('scrolled');
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  window.addEventListener('scroll', handleScrollAnimation);
}