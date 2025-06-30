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
        <div class="container px-4 py-2">
          <div class="text-center fade-in">
            <h1 class="clients-title">Our Clients</h1>
            <hr class="clients-divider">
          </div>
          
          <div class="row">
            ${this.renderClientGrid()}
          </div>
        </div>
      </div>
    `;

    // Add certificates section
    document.getElementById('certificates').innerHTML = `
      <div class="certificates-container fade-in">
        <img src="certificates/MSME.png" alt="MSME Certificate" class="certificate-image">
        <img src="certificates/ISO.png" alt="ISO Certificate" class="certificate-image">
      </div>
    `;
  }

  renderClientGrid() {
    const columns = [[], [], []]; // Three columns
    
    this.clients.forEach((client, index) => {
      const columnIndex = index % 3;
      columns[columnIndex].push(this.renderClientItem(client, index));
    });

    return columns.map((column, index) => `
      <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
        ${column.join('')}
      </div>
    `).join('');
  }

  renderClientItem(clientLogo, index) {
    return `
      <div class="client-item fade-in">
        <img class="client-logo" src="${clientLogo}" alt="Client ${index + 1}">
      </div>
    `;
  }
}