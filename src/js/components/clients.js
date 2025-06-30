// Clients section component
export class ClientsComponent {
  constructor() {
    this.container = document.getElementById('clients');
    this.clients = [
      'logos/logo1-removebg-preview.png',
      'logos/logo2-removebg-preview.png',
      'logos/logo3-removebg-preview.png',
      'logos/logo4-removebg-preview.png',
      'logos/logo5-removebg-preview.png',
      'logos/logo6-removebg-preview.png',
      'logos/logo7-removebg-preview.png',
      'logos/logo8-removebg-preview.png',
      'logos/logo9-removebg-preview.png'
    ];
  }

  render() {
    this.container.innerHTML = `
      <div class="clients-section">
        <div class="clients-container">
          <div class="clients-header fade-in">
            <h1 class="clients-title">Our Clients</h1>
          </div>
          
          <div class="clients-grid">
            ${this.renderClientItems()}
          </div>
        </div>
      </div>
    `;

    // Add certificates section
    document.getElementById('certificates').innerHTML = `
      <div class="clients-section">
        <div class="clients-container">
          <div class="certificates-section fade-in">
            <h2 class="certificates-title">Our Certifications</h2>
            <div class="certificates-container">
              <div class="certificate-item">
                <img src="certificates/MSME.png" alt="MSME Certificate" class="certificate-image">
                <p class="certificate-label">MSME Certified</p>
              </div>
              <div class="certificate-item">
                <img src="certificates/ISO.png" alt="ISO Certificate" class="certificate-image">
                <p class="certificate-label">ISO 9001:2015</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderClientItems() {
    return this.clients.map((client, index) => `
      <div class="client-item fade-in" style="animation-delay: ${index * 0.1}s">
        <img class="client-logo" src="${client}" alt="Client ${index + 1}">
      </div>
    `).join('');
  }
}