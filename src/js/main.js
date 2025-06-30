// Main JavaScript file - orchestrates all components
import { HeaderComponent } from './components/header.js';
import { NavbarComponent } from './components/navbar.js';
import { HeroComponent } from './components/hero.js';
import { CompanyComponent } from './components/company.js';
import { ProductsComponent } from './components/products.js';
import { GalleryComponent } from './components/gallery.js';
import { ClientsComponent } from './components/clients.js';
import { ContactComponent } from './components/contact.js';
import { initializeAnimations } from './utils/animations.js';
import { initializeNavigation } from './utils/navigation.js';
import { initializeForms } from './utils/forms.js';

class App {
  constructor() {
    this.components = {};
    this.init();
  }

  init() {
    this.loadComponents();
    this.initializeFeatures();
  }

  loadComponents() {
    // Initialize all components
    this.components.header = new HeaderComponent();
    this.components.navbar = new NavbarComponent();
    this.components.hero = new HeroComponent();
    this.components.company = new CompanyComponent();
    this.components.products = new ProductsComponent();
    this.components.gallery = new GalleryComponent();
    this.components.clients = new ClientsComponent();
    this.components.contact = new ContactComponent();

    // Render all components
    Object.values(this.components).forEach(component => {
      if (component.render) {
        component.render();
      }
    });
  }

  initializeFeatures() {
    // Initialize utility features
    initializeAnimations();
    initializeNavigation();
    initializeForms();
  }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new App();
});