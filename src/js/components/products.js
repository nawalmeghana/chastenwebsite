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
        <div class="container px-4 py-2">
          <div class="products-container fade-in">
            <h1 class="display-4 fw-bold text-center text-primary-custom">Products Offered</h1>
            <div class="col-lg-10 mx-auto">
              <p class="company-text text-justify">
                We manufacture a wide array of molded rubber components using both natural and
                synthetic rubber. Our products are characterized by high strength, durability, and flame
                retardant properties, and are renowned for their dimensional accuracy. Each rubber
                component is meticulously crafted to comply with established industry standards, ensuring
                superior quality and performance.
              </p>
            </div>
          </div>
          
          <div class="row">
            ${this.renderProductGrid()}
          </div>
        </div>
      </div>
    `;
  }

  renderProductGrid() {
    const columns = [[], [], []]; // Three columns
    
    this.products.forEach((product, index) => {
      const columnIndex = index % 3;
      columns[columnIndex].push(this.renderProductItem(product));
    });

    return columns.map((column, index) => `
      <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
        ${column.join('')}
      </div>
    `).join('');
  }

  renderProductItem(product) {
    return `
      <div class="product-item fade-in">
        <div class="product-image">
          <img class="image-responsive" src="${product.image}" alt="${product.alt}">
        </div>
        <h3 class="product-title">${product.name}</h3>
      </div>
    `;
  }
}