import texts from './texts.js';

// Function to safely set text content
function setText(elementId, text) {
  const element = document.getElementById(elementId);
  if (element && text) {
    element.textContent = text;
  }
}

// Function to safely set placeholder
function setPlaceholder(elementId, placeholder) {
  const element = document.getElementById(elementId);
  if (element && placeholder) {
    element.placeholder = placeholder;
  }
}

// Initialize all texts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Header texts
  setText('brand-name', texts.header.brand);
  setText('nav-features', texts.header.nav.features);
  setText('nav-pricing', texts.header.nav.pricing);
  setText('nav-about', texts.header.nav.about);
  setText('nav-contact', texts.header.nav.contact);
  setText('login-btn', texts.header.login);
  setText('register-btn', texts.header.register);

  // Hero texts
  setText('hero-title', texts.hero.title);
  setText('hero-description', texts.hero.description);
  setText('hero-cta', texts.hero.cta);

  // Offer 24h texts
  setText('offer-title', texts.offer24h.title);
  setText('offer-description', texts.offer24h.description);
  setText('offer-info-btn', texts.offer24h.infoBtn);
  setText('offer-cta', texts.offer24h.cta);

  // Que Es texts
  setText('que-es-title', texts.queEs.title);
  setText('que-es-description', texts.queEs.description);
  setText('feature-1', texts.queEs.bullets[0]);
  setText('feature-2', texts.queEs.bullets[1]);
  setText('feature-3', texts.queEs.bullets[2]);
  setText('que-es-closing', texts.queEs.closing);

  // Plans texts
  setText('planes-title', texts.planes.title);
  
  // Basic plan
  setText('plan-basico-title', texts.planes.basico.title);
  setText('plan-basico-description', texts.planes.basico.description);
  setText('plan-basico-feature-1', texts.planes.basico.bullets[0]);
  setText('plan-basico-feature-2', texts.planes.basico.bullets[1]);
  setText('plan-basico-feature-3', texts.planes.basico.bullets[2]);
  setText('plan-basico-highlight', texts.planes.basico.highlight);

  // Medium plan
  setText('plan-medio-title', texts.planes.medio.title);
  setText('plan-medio-description', texts.planes.medio.description);
  setText('plan-medio-feature-1', texts.planes.medio.bullets[0]);
  setText('plan-medio-feature-2', texts.planes.medio.bullets[1]);
  setText('plan-medio-feature-3', texts.planes.medio.bullets[2]);
  setText('plan-medio-feature-4', texts.planes.medio.bullets[3]);
  setText('plan-medio-highlight', texts.planes.medio.highlight);

  // Pro plan
  setText('plan-pro-title', texts.planes.pro.title);
  setText('plan-pro-description', texts.planes.pro.description);
  setText('plan-pro-feature-1', texts.planes.pro.bullets[0]);
  setText('plan-pro-feature-2', texts.planes.pro.bullets[1]);
  setText('plan-pro-feature-3', texts.planes.pro.bullets[2]);
  setText('plan-pro-feature-4', texts.planes.pro.bullets[3]);
  setText('plan-pro-highlight', texts.planes.pro.highlight);

  // Solutions texts
  setText('soluciones-title', texts.soluciones.title);
  setText('problema-1', texts.soluciones.bullets[0]);
  setText('problema-2', texts.soluciones.bullets[1]);
  setText('problema-3', texts.soluciones.bullets[2]);
  setText('problema-4', texts.soluciones.bullets[3]);
  setText('problema-5', texts.soluciones.bullets[4]);
  setText('soluciones-closing', texts.soluciones.closing);

  // Final CTA texts
  setText('final-cta-title', texts.finalCta.title);
  setText('final-cta-description', texts.finalCta.description);
  setPlaceholder('email-input', texts.finalCta.inputPlaceholder);
  setText('final-cta-btn', texts.finalCta.cta);
  setText('final-cta-note', texts.finalCta.note);

  // Footer texts
  setText('copyright', texts.footer.copyright);
  setText('terms-link', texts.footer.terms);
  setText('privacy-link', texts.footer.privacy);

  // Initialize interactive features
  initializeInteractivity();
});

function initializeInteractivity() {
  // Mobile menu toggle
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Form submission
  const ctaForm = document.querySelector('.cta-form');
  if (ctaForm) {
    ctaForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('email-input').value;
      
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
      
      // Show success message (you can customize this)
      alert('¡Gracias! Te contactaremos pronto para tu asesoría gratuita.');
      
      // Reset form
      this.reset();
    });
  }

  // Add scroll effect to header
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}
