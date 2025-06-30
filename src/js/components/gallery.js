// Gallery section component
export class GalleryComponent {
  constructor() {
    this.container = document.getElementById('gallery');
  }

  render() {
    this.container.innerHTML = `
      <div class="container-fluid gallery-carousel">
        <div id="galleryCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1 of Gallery"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="machine1.jpg" class="d-block w-100" alt="Manufacturing Equipment">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#galleryCarousel"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#galleryCarousel"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    `;
  }
}