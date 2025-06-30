// Company section component
export class CompanyComponent {
  constructor() {
    this.container = document.getElementById('company');
  }

  render() {
    this.container.innerHTML = `
      <div class="company-section">
        <div class="company-container fade-in">
          <div class="company-card">
            <h1 class="company-title">Our Company</h1>
            <p class="company-text">
              Welcome to Chasten Rubber Product, your trusted partner in industrial rubber solutions. Established in 2001 by
              Mr. Santosh Surve, Chasten Rubber Product is a leading ISO 9001:2015 certified rubber manufacturing company
              based in India. Our foundation is built on the principles of innovation and delivering exceptional value to
              our customers across various industries, leveraging our extensive experience and expertise.
            </p>
            <p class="company-text">
              At Chasten Rubber Product, we provide a comprehensive range of high-reliability products designed for a long,
              virtually maintenance-free life. Our objective is to ensure that you, our valued customer, receive the right
              product for every job at the appropriate quality and price. This approach helps you minimize costs and
              complete tasks efficiently and effectively.
            </p>
            <p class="company-text">
              We are committed to being a key supplier of cost-effective rubber solutions for all engineering requirements.
              Our dedication to continuous development allows us to generate new ideas, concepts, and process adaptations,
              integrating the latest technologies to provide you with a competitive edge in design and application.
            </p>
          </div>
        </div>

        <div class="company-container slide-in-left">
          <div class="company-card">
            <h1 class="company-title">Vision And Mission</h1>
            <p class="company-text">
              At Chasten Rubber Product, our mission is to provide innovative rubber solutions tailored
              to meet the unique needs of our customers while upholding the highest standards of
              quality, reliability, and customer satisfaction. We aspire to be a global leader in rubber
              manufacturing, renowned for our commitment to excellence and innovation. By
              continuously investing in cutting-edge technologies and fostering a culture of integrity,
              collaboration, and continuous learning, we aim to exceed expectations, drive sustainable
              growth, and create lasting value for our stakeholders and society.
            </p>
          </div>
        </div>

        <div class="company-container slide-in-right">
          <div class="company-card">
            <h1 class="company-title">Special Attributes</h1>
            <p class="company-text">
              Our range of rubber components is meticulously designed to meet the unique requirements
              of our clients, ensuring flawless quality and 100% performance even under extreme
              conditions. Key features of our product range include exceptional strength, durability, and
              dimensional accuracy. Our offerings are categorized as follows:
            </p>
            <ul class="attributes-list">
              <li>Silicone Rubber Products</li>
              <li>Rubber Molded Articles</li>
              <li>Anti-Vibration Pads</li>
              <li>O-rings, Bushes, Bellows, Gaskets, Rubber Washers, Seals, Diaphragms, and Grommets</li>
            </ul>
            <p class="company-text">
              Each product is crafted with precision to meet the highest industry standards, providing
              reliable solutions for diverse industrial applications.
            </p>
            <div class="quote-container">
              <p class="quote-text">
                "At Chasten Rubber Product, quality is our cornerstone, and
                our unwavering commitment to excellence ensures that quality
                is not just a priority but an assurance."
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}