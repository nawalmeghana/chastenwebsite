// Hero section component
export class HeroComponent {
  constructor() {
    this.container = document.getElementById('hero');
  }

  render() {
    this.container.innerHTML = `
      <div class="container-fluid hero-carousel">
        <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="1.png" class="d-block w-100" alt="Chasten Rubber Products Manufacturing">
            </div>
            <div class="carousel-item">
              <img src="2.png" class="d-block w-100" alt="Quality Rubber Components">
            </div>
            <div class="carousel-item">
              <img src="3.png" class="d-block w-100" alt="Industrial Rubber Solutions">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    `;
  }
}