// Header component
export class HeaderComponent {
  constructor() {
    this.container = document.getElementById('header');
  }

  render() {
    this.container.innerHTML = `
      <div class="top-bar">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 d-flex justify-content-start">
              <div class="topbar-item">
                <span class="bar-text">LEADING MANUFACTURERS OF RUBBER AND PLASTIC PRODUCT</span>
              </div>
            </div>
            <div class="col-sm-6 d-flex align-items-center justify-content-end">
              <div class="topbar-item d-flex align-items-center">
                <span class="phone-number me-2"><a href="tel:+919820568558">+91 9820568558</a>/</span>
                <span class="phone-number me-2"><a href="tel:+919619917558">+91 9619917558</a></span>
                <a href="mailto:chastenrubber_plastic_pro@yahoo.co.in" class="text-decoration-none ms-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-envelope" viewBox="0 0 16 16">
                    <path
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}