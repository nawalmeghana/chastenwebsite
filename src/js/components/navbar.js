// Navigation component
export class NavbarComponent {
  constructor() {
    this.container = document.getElementById('navbar');
  }

  render() {
    this.container.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-custom" id="main-navbar">
        <div class="container-fluid">
          <a href="index.html" class="navbar-brand-custom">
            <img src="Icon.png" height="50px" alt="Chasten Rubber Product Logo" />
            <span>Chasten Rubber Product</span>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#hero">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#company">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#products">Products</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#gallery">Gallery</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#clients">Clients</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Contact Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="brochure_chastenrubberproduct.pdf"
                  download="brochure_chastenrubberproduct.pdf">Download</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}