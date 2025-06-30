// Company section component
export class CompanyComponent {
  constructor() {
    this.container = document.getElementById('company');
  }

  render() {
    this.container.innerHTML = `
      <div class="company-section">
        <div class="company-container fade-in">
          <h1 class="display-4 company-title text-center">Our Company</h1>
          <div class="col-lg-10 mx-auto">
            <p class="company-text text-justify">
              Welcome to Chasten Rubber Product, your trusted partner in industrial rubber solutions. Established in 2001 by
              Mr. Santosh Surve, Chasten Rubber Product is a leading ISO 9001:2015 certified rubber manufacturing company
              based in India. Our foundation is built on the principles of innovation and delivering exceptional value to
              our customers across various industries, leveraging our extensive experience and expertise.
            </p>
            <p class="company-text text-justify">
              At Chasten Rubber Product, we provide a comprehensive range of high-reliability products designed for a long,
              virtually maintenance-free life. Our objective is to ensure that you, our valued customer, receive the right
              product for every job at the appropriate quality and price. This approach helps you minimize costs and
              complete tasks efficiently and effectively.
            </p>
            <p class="company-text text-justify">
              We are committed to being a key supplier of cost-effective rubber solutions for all engineering requirements.
              Our dedication to continuous development allows us to generate new ideas, concepts, and process adaptations,
              integrating the latest technologies to provide you with a competitive edge in design and application.
            </p>
          </div>
        </div>

        <div class="company-container fade-in">
          <h1 class="display-4 company-title text-center">Vision And Mission</h1>
          <div class="col-lg-10 mx-auto">
            <p class="company-text text-justify">
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

        <div class="company-container fade-in">
          <h1 class="display-4 company-title text-center">Special Attributes</h1>
          <div class="col-lg-10 mx-auto">
            <p class="company-text text-justify">
              Our range of rubber components is meticulously designed to meet the unique requirements
              of our clients, ensuring flawless quality and 100% performance even under extreme
              conditions. Key features of our product range include exceptional strength, durability, and
              dimensional accuracy. Our offerings are categorized as follows:
            </p>
            <ul class="attributes-list company-text">
              <li>Silicone Rubber Products</li>
              <li>Rubber Molded Articles</li>
              <li>Anti-Vibration Pads</li>
              <li>O-rings, Bushes, Bellows, Gaskets, Rubber Washers, Seals, Diaphragms, and Grommets</li>
            </ul>
            <p class="company-text text-justify">
              Each product is crafted with precision to meet the highest industry standards, providing
              reliable solutions for diverse industrial applications.
            </p>
            <div class="quote-text text-center">
              "At Chasten Rubber Product, quality is our cornerstone, and
              our unwavering commitment to excellence ensures that quality
              is not just a priority but an assurance."
            </div>
          </div>
        </div>
      </div>
    `;
  }
}