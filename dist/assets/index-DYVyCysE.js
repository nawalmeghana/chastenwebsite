(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();class p{constructor(){this.container=document.getElementById("header"),this.initializeComponent()}initializeComponent(){this.render(),this.addEventListeners()}render(){this.container.innerHTML=`
      <div class="top-bar">
        <div class="top-bar-container">
          <div class="top-bar-content">
            <div class="company-tagline">
              <span class="tagline-text" data-text="LEADING MANUFACTURERS OF RUBBER AND PLASTIC PRODUCT">
                LEADING MANUFACTURERS OF RUBBER AND PLASTIC PRODUCT
              </span>
            </div>
            
            <div class="contact-info">
              <div class="phone-group">
                <a href="tel:+919820568558" 
                   class="phone-link" 
                   title="Call us at +91 9820568558"
                   aria-label="Call +91 9820568558">
                  <span class="phone-icon">📞</span>
                  <span class="phone-text">+91 9820568558</span>
                </a>
                <span class="phone-divider">|</span>
                <a href="tel:+919619917558" 
                   class="phone-link" 
                   title="Call us at +91 9619917558"
                   aria-label="Call +91 9619917558">
                  <span class="phone-icon">📞</span>
                  <span class="phone-text">+91 9619917558</span>
                </a>
              </div>
              
              <a href="mailto:chastenrubber_plastic_pro@yahoo.co.in" 
                 class="email-link" 
                 title="Send us an email"
                 aria-label="Send email to chastenrubber_plastic_pro@yahoo.co.in">
                <svg class="email-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                </svg>
                <span class="email-text">Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    `}addEventListeners(){const e=this.container.querySelectorAll(".phone-link"),a=this.container.querySelector(".email-link");e.forEach(t=>{t.addEventListener("mouseenter",this.handlePhoneHover),t.addEventListener("mouseleave",this.handlePhoneLeave)}),a&&(a.addEventListener("mouseenter",this.handleEmailHover),a.addEventListener("mouseleave",this.handleEmailLeave))}handlePhoneHover(e){e.currentTarget.style.transform="translateY(-2px) scale(1.05)"}handlePhoneLeave(e){e.currentTarget.style.transform="translateY(0) scale(1)"}handleEmailHover(e){const a=e.currentTarget.querySelector(".email-icon");a&&(a.style.transform="rotate(10deg) scale(1.2)")}handleEmailLeave(e){const a=e.currentTarget.querySelector(".email-icon");a&&(a.style.transform="rotate(0deg) scale(1)")}}class m{constructor(){this.container=document.getElementById("navbar")}render(){this.container.innerHTML=`
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
    `}}class v{constructor(){this.container=document.getElementById("hero")}render(){this.container.innerHTML=`
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
    `}}class h{constructor(){this.container=document.getElementById("company")}render(){this.container.innerHTML=`
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
    `}}class g{constructor(){this.container=document.getElementById("products"),this.products=[{image:"products/1.png",name:"Rubber Gasket",alt:"rubbergasket"},{image:"products/2.png",name:"Sealing Ring",alt:"sealingrings"},{image:"products/3.png",name:'"O" Rings and Bush',alt:"oringsandbush"},{image:"products/4.png",name:'4.5" PP Case',alt:"4.5pp"},{image:"products/5.png",name:'4.5" PP Case',alt:"4.5pp"},{image:"products/16.png",name:"Rubber Gasket",alt:"rubbergasket2"},{image:"products/17.png",name:"Diaphragm",alt:"diaphragm"},{image:"products/750px-8422.webp",name:'"O" Ring',alt:"oring"},{image:"products/18.jpg",name:"Many More...",alt:"U CHANNELS"}]}render(){this.container.innerHTML=`
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
    `}renderProductItems(){return this.products.map((e,a)=>`
      <div class="product-item fade-in" style="animation-delay: ${a*.1}s">
        <div class="product-image">
          <img src="${e.image}" alt="${e.alt}">
        </div>
        <h3 class="product-title">${e.name}</h3>
      </div>
    `).join("")}}class f{constructor(){this.container=document.getElementById("gallery")}render(){this.container.innerHTML=`
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
    `}}class b{constructor(){this.container=document.getElementById("clients"),this.certificatesContainer=document.getElementById("certificates"),this.clients=[{src:"logos/logo1-removebg-preview.png",name:"Client Partner 1"},{src:"logos/logo2-removebg-preview.png",name:"Client Partner 2"},{src:"logos/logo3-removebg-preview.png",name:"Client Partner 3"},{src:"logos/logo4-removebg-preview.png",name:"Client Partner 4"},{src:"logos/logo5-removebg-preview.png",name:"Client Partner 5"},{src:"logos/logo6-removebg-preview.png",name:"Client Partner 6"},{src:"logos/logo7-removebg-preview.png",name:"Client Partner 7"},{src:"logos/logo8-removebg-preview.png",name:"Client Partner 8"},{src:"logos/logo9-removebg-preview.png",name:"Client Partner 9"}],this.certificates=[{src:"certificates/MSME.png",name:"MSME Certified",description:"Micro, Small & Medium Enterprises"},{src:"certificates/ISO.png",name:"ISO 9001:2015",description:"Quality Management System"}],this.initializeComponent()}initializeComponent(){this.render(),this.addEventListeners(),this.initializeIntersectionObserver()}render(){this.renderClientsSection(),this.renderCertificatesSection()}renderClientsSection(){this.container.innerHTML=`
      <div class="clients-section">
        <div class="clients-background-pattern"></div>
        <div class="clients-container">
          <div class="clients-header fade-in">
            <h1 class="clients-title">
              <span class="title-main">Our Trusted</span>
              <span class="title-accent">Clients</span>
            </h1>
            <p class="clients-subtitle">
              Building lasting partnerships with industry leaders worldwide
            </p>
          </div>
          
          <div class="clients-grid" id="clientsGrid">
            ${this.renderClientItems()}
          </div>
          
          <div class="clients-stats fade-in">
            <div class="stat-item">
              <span class="stat-number">${this.clients.length}+</span>
              <span class="stat-label">Trusted Partners</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">20+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">100%</span>
              <span class="stat-label">Quality Assured</span>
            </div>
          </div>
        </div>
      </div>
    `}renderCertificatesSection(){this.certificatesContainer.innerHTML=`
      <div class="clients-section">
        <div class="clients-container">
          <div class="certificates-section fade-in">
            <div class="certificates-header">
              <h2 class="certificates-title">
                <span class="title-main">Our</span>
                <span class="title-accent">Certifications</span>
              </h2>
              <p class="certificates-subtitle">
                Committed to excellence and industry standards
              </p>
            </div>
            
            <div class="certificates-container">
              ${this.renderCertificateItems()}
            </div>
            
            <div class="certificates-footer">
              <p class="certificates-note">
                All certifications are regularly audited and maintained to ensure compliance
              </p>
            </div>
          </div>
        </div>
      </div>
    `}renderClientItems(){return this.clients.map((e,a)=>`
      <div class="client-item fade-in" 
           style="animation-delay: ${a*.1}s"
           data-client-index="${a}">
        <div class="client-logo-container">
          <img class="client-logo" 
               src="${e.src}" 
               alt="${e.name}" 
               loading="lazy"
               onerror="this.parentElement.parentElement.style.display='none'"
               onload="this.parentElement.parentElement.classList.add('loaded')">
          <div class="client-overlay">
            <span class="client-name">${e.name}</span>
          </div>
        </div>
      </div>
    `).join("")}renderCertificateItems(){return this.certificates.map((e,a)=>`
      <div class="certificate-item" style="animation-delay: ${a*.2}s">
        <div class="certificate-image-container">
          <img src="${e.src}" 
               alt="${e.name}" 
               class="certificate-image" 
               loading="lazy">
          <div class="certificate-badge">
            <span class="badge-text">Certified</span>
          </div>
        </div>
        <div class="certificate-content">
          <h3 class="certificate-name">${e.name}</h3>
          <p class="certificate-description">${e.description}</p>
        </div>
      </div>
    `).join("")}addEventListeners(){this.container.querySelectorAll(".client-item").forEach(t=>{t.addEventListener("mouseenter",this.handleClientHover.bind(this)),t.addEventListener("mouseleave",this.handleClientLeave.bind(this))}),this.certificatesContainer.querySelectorAll(".certificate-item").forEach(t=>{t.addEventListener("mouseenter",this.handleCertificateHover.bind(this)),t.addEventListener("mouseleave",this.handleCertificateLeave.bind(this))})}handleClientHover(e){const a=e.currentTarget,t=a.querySelector(".client-overlay"),n=a.querySelector(".client-logo");t&&(t.style.opacity="1"),n&&(n.style.transform="scale(1.1) rotate(2deg)"),this.createRippleEffect(a,e)}handleClientLeave(e){const a=e.currentTarget,t=a.querySelector(".client-overlay"),n=a.querySelector(".client-logo");t&&(t.style.opacity="0"),n&&(n.style.transform="scale(1) rotate(0deg)")}handleCertificateHover(e){const a=e.currentTarget,t=a.querySelector(".certificate-badge"),n=a.querySelector(".certificate-image");t&&(t.style.transform="scale(1.1) rotate(-5deg)"),n&&(n.style.transform="scale(1.05)")}handleCertificateLeave(e){const a=e.currentTarget,t=a.querySelector(".certificate-badge"),n=a.querySelector(".certificate-image");t&&(t.style.transform="scale(1) rotate(0deg)"),n&&(n.style.transform="scale(1)")}createRippleEffect(e,a){const t=document.createElement("div");t.className="ripple-effect";const n=e.getBoundingClientRect(),i=Math.max(n.width,n.height),r=a.clientX-n.left-i/2,o=a.clientY-n.top-i/2;t.style.width=t.style.height=i+"px",t.style.left=r+"px",t.style.top=o+"px",e.appendChild(t),setTimeout(()=>{t.parentNode&&t.parentNode.removeChild(t)},600)}initializeIntersectionObserver(){const e={threshold:.1,rootMargin:"0px 0px -50px 0px"},a=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&(i.target.classList.add("visible"),i.target.classList.contains("clients-stats")&&this.animateCounters())})},e);[...this.container.querySelectorAll(".fade-in"),...this.certificatesContainer.querySelectorAll(".fade-in")].forEach(n=>a.observe(n))}animateCounters(){document.querySelectorAll(".stat-number").forEach(a=>{const t=a.textContent,n=t.includes("%"),i=t.includes("+"),r=parseInt(t.replace(/[^\d]/g,""));let o=0;const d=r/30,u=setInterval(()=>{o+=d,o>=r&&(o=r,clearInterval(u));let c=Math.floor(o);n&&(c+="%"),i&&(c+="+"),a.textContent=c},50)})}}class y{constructor(){this.container=document.getElementById("contact")}render(){this.container.innerHTML=`
      <div class="contact-section">
        <div class="contact-container">
          <h2 class="contact-title fade-in">Contact Us</h2>
          
          <div class="contact-content">
            <div class="contact-form-container fade-in">
              <h3 class="contact-form-title">Get In Touch</h3>
              <form id="contactForm" method="POST"
                action="https://script.google.com/macros/s/AKfycbzN8QSQeJRv1f8UzUBm7wOhMkvJwA0gIv4n0UC_g_BOhvcztftBHKqh1JNBx6hqFgP5YA/exec">
                <div class="form-group">
                  <label for="nameInput" class="form-label">Full Name</label>
                  <input type="text" name="Name" class="form-control" id="nameInput" required>
                </div>

                <div class="form-group">
                  <label for="emailInput" class="form-label">Email Address</label>
                  <input type="email" name="Email" class="form-control" id="emailInput" required>
                </div>

                <div class="form-group">
                  <label for="phoneInput" class="form-label">Phone Number</label>
                  <input type="tel" name="Number" class="form-control" id="phoneInput" required>
                </div>

                <div class="form-group">
                  <label for="requirementsInput" class="form-label">Your Requirements</label>
                  <textarea name="Requirements" class="form-control" id="requirementsInput" rows="4" required placeholder="Please describe your requirements in detail..."></textarea>
                </div>

                <button type="submit" class="btn-primary-custom">Send Message</button>
              </form>
            </div>

            <div class="contact-info-container slide-in-right">
              <h3 class="contact-info-title">Contact Information</h3>
              
              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                  </svg>
                </div>
                <div class="contact-info-content">
                  <a href="https://maps.app.goo.gl/m55JmXxTUM46Z5XQ6" target="_blank">
                    <p>Chasten Rubber Product<br>
                      Ashtavinayak Ind. Estate, <br>
                      Gala No. 111/ 113/ 114<br>
                      Vasai Phata, Vasai-401208, MH, India.</p>
                  </a>
                </div>
              </div>
              
              <hr class="contact-divider">
              
              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                </div>
                <div class="contact-info-content">
                  <a href="tel:+919820568558">
                    <p>+91 9820568558</p>
                  </a>
                  <a href="tel:+919619917558">
                    <p>+91 9619917558</p>
                  </a>
                </div>
              </div>

              <hr class="contact-divider">
              
              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope"
                    viewBox="0 0 16 16">
                    <path
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                </div>
                <div class="contact-info-content">
                  <a href="mailto:chastenrubber_plastic_pro@yahoo.co.in">
                    <p>chastenrubber_plastic_pro@yahoo.co.in</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="copyright-section fade-in">
            <p class="copyright-text">© 2024 Chasten Rubber Product. All rights reserved.</p>
          </div>
        </div>
      </div>
    `}}function C(){const s={threshold:.1,rootMargin:"0px 0px -50px 0px"},e=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting&&n.target.classList.add("visible")})},s);[".fade-in",".slide-in-left",".slide-in-right"].forEach(t=>{document.querySelectorAll(t).forEach(n=>{e.observe(n)})}),document.documentElement.style.scrollBehavior="smooth",w()}function w(){const s=document.querySelectorAll(".product-item"),e=document.querySelectorAll(".client-item");s.forEach((a,t)=>{a.style.animationDelay=`${t*.1}s`}),e.forEach((a,t)=>{a.style.animationDelay=`${t*.1}s`})}function E(){const s=document.querySelector(".top-bar"),e=document.getElementById("main-navbar");s&&e&&window.addEventListener("scroll",()=>{window.pageYOffset>s.offsetHeight?(e.classList.add("fixed-navbar"),document.body.style.paddingTop=e.offsetHeight+"px"):(e.classList.remove("fixed-navbar"),document.body.style.paddingTop="0")}),document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener("click",function(t){t.preventDefault();const n=document.querySelector(this.getAttribute("href"));if(n){const i=n.offsetTop-(e?e.offsetHeight:0);window.scrollTo({top:i,behavior:"smooth"})}})}),l(),window.addEventListener("scroll",l)}function l(){const s=document.querySelectorAll("section[id]"),e=document.querySelectorAll(".navbar-nav .nav-link");let a="";s.forEach(t=>{const n=t.offsetTop;t.clientHeight,window.pageYOffset>=n-200&&(a=t.getAttribute("id"))}),e.forEach(t=>{t.classList.remove("active"),t.getAttribute("href")===`#${a}`&&t.classList.add("active")})}function x(){const s=document.getElementById("contactForm");s&&s.addEventListener("submit",L)}function L(s){const a=s.target.querySelector('button[type="submit"]'),t=a.textContent;a.textContent="Submitting...",a.disabled=!0,setTimeout(()=>{a.textContent=t,a.disabled=!1},3e3)}class S{constructor(){this.components={},this.init()}init(){this.loadComponents(),this.initializeFeatures()}loadComponents(){this.components.header=new p,this.components.navbar=new m,this.components.hero=new v,this.components.company=new h,this.components.products=new g,this.components.gallery=new f,this.components.clients=new b,this.components.contact=new y,Object.values(this.components).forEach(e=>{e.render&&e.render()})}initializeFeatures(){C(),E(),x()}}document.addEventListener("DOMContentLoaded",()=>{new S});
