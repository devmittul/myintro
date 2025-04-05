// Initialize GSAP and ScrollTrigger if they exist
if (typeof gsap !== 'undefined') {
  try {
    gsap.registerPlugin(ScrollTrigger);
  } catch (error) {
    console.warn('Error registering ScrollTrigger plugin:', error);
  }
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Make sure the page is visible regardless of animations
  document.body.style.visibility = 'visible';
  document.body.style.opacity = '1';
  
  // Only run GSAP code if it's available
  if (typeof gsap === 'undefined') {
    console.warn('GSAP not loaded. Animations disabled.');
    return;
  }

  // Custom cursor effect
  const cursor = document.querySelector('.custom-cursor');
  
  if (window.innerWidth > 768 && cursor) {
    document.addEventListener('mousemove', (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power1.out'
      });
      
      if (cursor.style.opacity === '0') {
        gsap.to(cursor, {
          opacity: 1,
          duration: 0.3
        });
      }
    });
    
    document.addEventListener('mouseout', () => {
      gsap.to(cursor, {
        opacity: 0,
        duration: 0.3
      });
    });
  }
  
  // Navbar active link update on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.menu-items a');
  
  function updateActiveLink() {
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', updateActiveLink);
  
  // Hero section animations
  try {
    const tl = gsap.timeline();
    
    tl.from('.greeting', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
    .from('.name', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.6')
    .from('.profession', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.6')
    .from('.description', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.6')
    .from('.cta-buttons', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.6')
    .from('.profile-image', {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: 'elastic.out(1, 0.5)'
    }, '-=0.8')
    .from('.orbit-element', {
      scale: 0,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'elastic.out(1, 0.5)'
    }, '-=0.5');
  } catch (error) {
    console.warn('Error animating hero section:', error);
    // Show elements without animation as fallback
    document.querySelectorAll('.greeting, .name, .profession, .description, .cta-buttons, .profile-image, .orbit-element').forEach(el => {
      el.style.opacity = '1';
    });
  }
  
  // Only run ScrollTrigger animations if available
  if (typeof ScrollTrigger !== 'undefined') {
    try {
      // About cards staggered animation
      gsap.from('.about-card', {
        scrollTrigger: {
          trigger: '.about-cards',
          start: 'top 80%'
        },
        x: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
      
      // Stats animation
      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: '.stats',
          start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
      
      // Project cards staggered animation
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%'
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
      
      // Contact cards animation
      gsap.from('.contact-card', {
        scrollTrigger: {
          trigger: '.contact-info',
          start: 'top 80%'
        },
        x: -100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
      
      // Contact form animation
      gsap.from('.contact-form', {
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top 80%'
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    } catch (error) {
      console.warn('Error setting up scroll animations:', error);
      // Make all elements visible without animations
      document.querySelectorAll('.about-card, .stat-item, .project-card, .contact-card, .contact-form').forEach(el => {
        el.style.opacity = '1';
      });
    }
  } else {
    // Show elements if ScrollTrigger isn't available
    document.querySelectorAll('.about-card, .stat-item, .project-card, .contact-card, .contact-form').forEach(el => {
      el.style.opacity = '1';
    });
  }
  
  // Form submission - remove the simulation since we're using FormSubmit
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    // Remove the previous event listener that simulated form submission
    const oldSubmitHandler = contactForm.onsubmit;
    contactForm.onsubmit = null;
    
    // Add loading animation on submit
    contactForm.addEventListener('submit', function() {
      const submitBtn = this.querySelector('.submit-btn');
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // The actual submission is handled by FormSubmit service
      // This just provides visual feedback before the page redirects
    });
  }
  
  // Scroll to top functionality
  function createScrollTopButton() {
    try {
      const button = document.createElement('button');
      button.innerHTML = '<i class="fas fa-arrow-up"></i>';
      button.classList.add('scroll-top-btn');
      document.body.appendChild(button);
      
      // Apply styles
      button.style.position = 'fixed';
      button.style.bottom = '30px';
      button.style.right = '30px';
      button.style.width = '50px';
      button.style.height = '50px';
      button.style.borderRadius = '50%';
      button.style.backgroundColor = 'var(--glass-bg)';
      button.style.backdropFilter = 'blur(10px)';
      button.style.border = '1px solid var(--glass-border)';
      button.style.color = 'var(--crayon-teal)';
      button.style.fontSize = '1.2rem';
      button.style.cursor = 'pointer';
      button.style.display = 'flex';
      button.style.alignItems = 'center';
      button.style.justifyContent = 'center';
      button.style.transition = 'all 0.3s ease';
      button.style.opacity = '0';
      button.style.visibility = 'hidden';
      button.style.zIndex = '100';
      
      // Show/hide based on scroll position
      window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
          button.style.opacity = '1';
          button.style.visibility = 'visible';
        } else {
          button.style.opacity = '0';
          button.style.visibility = 'hidden';
        }
      });
      
      // Scroll to top on click
      button.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
      
      // Hover effect
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
        button.style.boxShadow = '0 5px 15px rgba(12, 255, 225, 0.3)';
      });
      
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = 'none';
      });
    } catch (error) {
      console.warn('Error creating scroll top button:', error);
    }
  }
  
  createScrollTopButton();
}); 