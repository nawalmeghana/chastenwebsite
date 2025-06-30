// Navigation utilities
export function initializeNavigation() {
  // Fixed navbar on scroll
  const topBar = document.querySelector('.top-bar');
  const navbar = document.getElementById('main-navbar');
  
  if (topBar && navbar) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > topBar.offsetHeight) {
        navbar.classList.add('fixed-navbar');
        document.body.style.paddingTop = navbar.offsetHeight + 'px';
      } else {
        navbar.classList.remove('fixed-navbar');
        document.body.style.paddingTop = '0';
      }
    });
  }

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - (navbar ? navbar.offsetHeight : 0);
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Update active navigation link based on scroll position
  updateActiveNavLink();
  window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}