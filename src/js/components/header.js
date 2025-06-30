// Enhanced Header component with improved structure and responsiveness
export class HeaderComponent {
  constructor() {
    this.container = document.getElementById('header');
    this.initializeComponent();
  }

  initializeComponent() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.container.innerHTML = `
      <div class="top-bar">
        <div class="top-bar-container">
          <div class="top-bar-content">
            <div class="company-tagline">
              <span class="tagline-text" data-text="LEADING MANUFACTURERS OF RUBBER AND PLASTIC PRODUCT">
                LEADING MANUFACTURERS OF RUBBER AND PLASTIC PRODUCT
              </span>
            </div>
            
            <div class="contact-info">
              <div class="phone-group">
                <a href="tel:+919820568558" 
                   class="phone-link" 
                   title="Call us at +91 9820568558"
                   aria-label="Call +91 9820568558">
                  <span class="phone-icon">📞</span>
                  <span class="phone-text">+91 9820568558</span>
                </a>
                <span class="phone-divider">|</span>
                <a href="tel:+919619917558" 
                   class="phone-link" 
                   title="Call us at +91 9619917558"
                   aria-label="Call +91 9619917558">
                  <span class="phone-icon">📞</span>
                  <span class="phone-text">+91 9619917558</span>
                </a>
              </div>
              
              <a href="mailto:chastenrubber_plastic_pro@yahoo.co.in" 
                 class="email-link" 
                 title="Send us an email"
                 aria-label="Send email to chastenrubber_plastic_pro@yahoo.co.in">
                <svg class="email-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                </svg>
                <span class="email-text">Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  addEventListeners() {
    // Add smooth hover effects and interactions
    const phoneLinks = this.container.querySelectorAll('.phone-link');
    const emailLink = this.container.querySelector('.email-link');

    phoneLinks.forEach(link => {
      link.addEventListener('mouseenter', this.handlePhoneHover);
      link.addEventListener('mouseleave', this.handlePhoneLeave);
    });

    if (emailLink) {
      emailLink.addEventListener('mouseenter', this.handleEmailHover);
      emailLink.addEventListener('mouseleave', this.handleEmailLeave);
    }
  }

  handlePhoneHover(e) {
    e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
  }

  handlePhoneLeave(e) {
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
  }

  handleEmailHover(e) {
    const icon = e.currentTarget.querySelector('.email-icon');
    if (icon) {
      icon.style.transform = 'rotate(10deg) scale(1.2)';
    }
  }

  handleEmailLeave(e) {
    const icon = e.currentTarget.querySelector('.email-icon');
    if (icon) {
      icon.style.transform = 'rotate(0deg) scale(1)';
    }
  }
}