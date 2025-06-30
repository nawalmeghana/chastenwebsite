// Products section component
export class ProductsComponent {
  constructor() {
    this.container = document.getElementById('products');
    this.products = [
      { image: 'products/1.png', name: 'Rubber Gasket', alt: 'rubbergasket' },
      { image: 'products/2.png', name: 'Sealing Ring', alt: 'sealingrings' },
      { image: 'products/3.png', name: '"O" Rings and Bush', alt: 'oringsandbush' },
      { image: 'products/4.png', name: '4.5" PP Case', alt: '4.5pp' },
      { image: 'products/5.png', name: '4.5" PP Case', alt: '4.5pp' },
      { image: 'products/16.png', name: 'Rubber Gasket', alt: 'rubbergasket2' },
      { image: 'products/17.png', name: 'Diaphragm', alt: 'diaphragm' },
      { image: 'products/750px-8422.webp', name: '"O" Ring', alt: 'oring' },
      { image: 'products/18.jpg', name: 'Many More...', alt: 'U CHANNELS' }
    ];
  }

  render() {
    this.container.innerHTML = `
      <div class="products-section">
        <div class="products-container">
          <div class="products-intro fade-in">
            <h1 class="products-title">Products Offered</h1>
            <p class="products-description">
              We manufacture a wide array of molded rubber components using both natural and
              synthetic rubber. Our products are characterized by high strength, durability, and flame
              retardant properties, and are renowned for their dimensional accuracy. Each rubber
              component is meticulously crafted to comply with established industry standards, ensuring
              superior quality and performance.
            </p>
          </div>
          
          <div class="products-grid">
            ${this.renderProductItems()}
          </div>
        </div>
      </div>
    `;
  }

  renderProductItems() {
    return this.products.map((product, index) => `
      <div class="product-item fade-in" style="animation-delay: ${index * 0.1}s">
        <div class="product-image">
          <img src="${product.image}" alt="${product.alt}">
        </div>
        <h3 class="product-title">${product.name}</h3>
      </div>
    `).join('');
  }
}