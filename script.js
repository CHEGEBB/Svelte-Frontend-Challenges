document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
      const trigger = dropdown.querySelector('a');
      const arrows = dropdown.querySelector('.down-up-icons');
      const content = dropdown.querySelector('.dropdown-content');
      
      const toggleDropdown = () => {
        dropdowns.forEach(other => {
          if (other !== dropdown) {
            other.querySelector('.dropdown-content').classList.add('hide');
            other.querySelector('.down-up-icons img:first-child').classList.remove('hide');
            other.querySelector('.down-up-icons img:last-child').classList.add('hide');
          }
        });
  
        content.classList.toggle('hide');
        arrows.querySelector('img:first-child').classList.toggle('hide');
        arrows.querySelector('img:last-child').classList.toggle('hide');
      };
  
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        toggleDropdown();
      });
  
      arrows.addEventListener('click', (e) => {
        e.preventDefault();
        toggleDropdown();
      });
    });
  
    const hamburger = document.querySelector('.hamburger-icon');
    const closeBtn = document.querySelector('.close-icon');
    const mobileMenu = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-btns');
  
    if (hamburger && closeBtn) {
      const toggleMenu = () => {
        mobileMenu.classList.toggle('active');
        authButtons.classList.toggle('active');
        hamburger.classList.toggle('hide');
        closeBtn.classList.toggle('hide');
      };
  
      hamburger.addEventListener('click', toggleMenu);
      closeBtn.addEventListener('click', toggleMenu);
    }
  
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.dropdown')) {
        dropdowns.forEach(dropdown => {
          dropdown.querySelector('.dropdown-content').classList.add('hide');
          dropdown.querySelector('.down-up-icons img:first-child').classList.remove('hide');
          dropdown.querySelector('.down-up-icons img:last-child').classList.add('hide');
        });
      }
    });
  });