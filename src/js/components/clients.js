// Enhanced Clients component with improved structure and animations
export class ClientsComponent {
  constructor() {
    this.container = document.getElementById('clients');
    this.certificatesContainer = document.getElementById('certificates');
    this.clients = [
      { src: 'logos/logo1-removebg-preview.png', name: 'Client Partner 1' },
      { src: 'logos/logo2-removebg-preview.png', name: 'Client Partner 2' },
      { src: 'logos/logo3-removebg-preview.png', name: 'Client Partner 3' },
      { src: 'logos/logo4-removebg-preview.png', name: 'Client Partner 4' },
      { src: 'logos/logo5-removebg-preview.png', name: 'Client Partner 5' },
      { src: 'logos/logo6-removebg-preview.png', name: 'Client Partner 6' },
      { src: 'logos/logo7-removebg-preview.png', name: 'Client Partner 7' },
      { src: 'logos/logo8-removebg-preview.png', name: 'Client Partner 8' },
      { src: 'logos/logo9-removebg-preview.png', name: 'Client Partner 9' }
    ];
    this.certificates = [
      { src: 'certificates/MSME.png', name: 'MSME Certified', description: 'Micro, Small & Medium Enterprises' },
      { src: 'certificates/ISO.png', name: 'ISO 9001:2015', description: 'Quality Management System' }
    ];
    this.initializeComponent();
  }

  initializeComponent() {
    this.render();
    this.addEventListeners();
    this.initializeIntersectionObserver();
  }

  render() {
    this.renderClientsSection();
    this.renderCertificatesSection();
  }

  renderClientsSection() {
    this.container.innerHTML = `
      <div class="clients-section">
        <div class="clients-background-pattern"></div>
        <div class="clients-container">
          <div class="clients-header fade-in">
            <h1 class="clients-title">
              <span class="title-main">Our Trusted</span>
              <span class="title-accent">Clients</span>
            </h1>
            <p class="clients-subtitle">
              Building lasting partnerships with industry leaders worldwide
            </p>
          </div>
          
          <div class="clients-grid" id="clientsGrid">
            ${this.renderClientItems()}
          </div>
          
          <div class="clients-stats fade-in">
            <div class="stat-item">
              <span class="stat-number">${this.clients.length}+</span>
              <span class="stat-label">Trusted Partners</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">20+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">100%</span>
              <span class="stat-label">Quality Assured</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderCertificatesSection() {
    this.certificatesContainer.innerHTML = `
      <div class="clients-section">
        <div class="clients-container">
          <div class="certificates-section fade-in">
            <div class="certificates-header">
              <h2 class="certificates-title">
                <span class="title-main">Our</span>
                <span class="title-accent">Certifications</span>
              </h2>
              <p class="certificates-subtitle">
                Committed to excellence and industry standards
              </p>
            </div>
            
            <div class="certificates-container">
              ${this.renderCertificateItems()}
            </div>
            
            <div class="certificates-footer">
              <p class="certificates-note">
                All certifications are regularly audited and maintained to ensure compliance
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderClientItems() {
    return this.clients.map((client, index) => `
      <div class="client-item fade-in" 
           style="animation-delay: ${index * 0.1}s"
           data-client-index="${index}">
        <div class="client-logo-container">
          <img class="client-logo" 
               src="${client.src}" 
               alt="${client.name}" 
               loading="lazy"
               onerror="this.parentElement.parentElement.style.display='none'"
               onload="this.parentElement.parentElement.classList.add('loaded')">
          <div class="client-overlay">
            <span class="client-name">${client.name}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  renderCertificateItems() {
    return this.certificates.map((cert, index) => `
      <div class="certificate-item" style="animation-delay: ${index * 0.2}s">
        <div class="certificate-image-container">
          <img src="${cert.src}" 
               alt="${cert.name}" 
               class="certificate-image" 
               loading="lazy">
          <div class="certificate-badge">
            <span class="badge-text">Certified</span>
          </div>
        </div>
        <div class="certificate-content">
          <h3 class="certificate-name">${cert.name}</h3>
          <p class="certificate-description">${cert.description}</p>
        </div>
      </div>
    `).join('');
  }

  addEventListeners() {
    // Add interactive hover effects for client items
    const clientItems = this.container.querySelectorAll('.client-item');
    clientItems.forEach(item => {
      item.addEventListener('mouseenter', this.handleClientHover.bind(this));
      item.addEventListener('mouseleave', this.handleClientLeave.bind(this));
    });

    // Add certificate interactions
    const certificateItems = this.certificatesContainer.querySelectorAll('.certificate-item');
    certificateItems.forEach(item => {
      item.addEventListener('mouseenter', this.handleCertificateHover.bind(this));
      item.addEventListener('mouseleave', this.handleCertificateLeave.bind(this));
    });
  }

  handleClientHover(e) {
    const item = e.currentTarget;
    const overlay = item.querySelector('.client-overlay');
    const logo = item.querySelector('.client-logo');
    
    if (overlay) overlay.style.opacity = '1';
    if (logo) logo.style.transform = 'scale(1.1) rotate(2deg)';
    
    // Add ripple effect
    this.createRippleEffect(item, e);
  }

  handleClientLeave(e) {
    const item = e.currentTarget;
    const overlay = item.querySelector('.client-overlay');
    const logo = item.querySelector('.client-logo');
    
    if (overlay) overlay.style.opacity = '0';
    if (logo) logo.style.transform = 'scale(1) rotate(0deg)';
  }

  handleCertificateHover(e) {
    const item = e.currentTarget;
    const badge = item.querySelector('.certificate-badge');
    const image = item.querySelector('.certificate-image');
    
    if (badge) badge.style.transform = 'scale(1.1) rotate(-5deg)';
    if (image) image.style.transform = 'scale(1.05)';
  }

  handleCertificateLeave(e) {
    const item = e.currentTarget;
    const badge = item.querySelector('.certificate-badge');
    const image = item.querySelector('.certificate-image');
    
    if (badge) badge.style.transform = 'scale(1) rotate(0deg)';
    if (image) image.style.transform = 'scale(1)';
  }

  createRippleEffect(element, event) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    element.appendChild(ripple);
    
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 600);
  }

  initializeIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Animate stats counter
          if (entry.target.classList.contains('clients-stats')) {
            this.animateCounters();
          }
        }
      });
    }, observerOptions);

    // Observe all animation elements
    const animationElements = [
      ...this.container.querySelectorAll('.fade-in'),
      ...this.certificatesContainer.querySelectorAll('.fade-in')
    ];
    
    animationElements.forEach(el => observer.observe(el));
  }

  animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
      const target = counter.textContent;
      const isPercentage = target.includes('%');
      const isPlus = target.includes('+');
      const numericValue = parseInt(target.replace(/[^\d]/g, ''));
      
      let current = 0;
      const increment = numericValue / 30;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          current = numericValue;
          clearInterval(timer);
        }
        
        let displayValue = Math.floor(current);
        if (isPercentage) displayValue += '%';
        if (isPlus) displayValue += '+';
        
        counter.textContent = displayValue;
      }, 50);
    });
  }
}