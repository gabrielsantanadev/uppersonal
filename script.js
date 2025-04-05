// Scroll suave para os links do menu
document.addEventListener('DOMContentLoaded', (cabeçalho) => {
    const navLinks = document.querySelectorAll('nav a');
    const header = document.querySelector('header');
    const logo = document.querySelector('h1 .logo');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
  
    // Verifica se elementos existem antes de manipular
    if (navLinks) {
      navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 70,
              behavior: 'smooth'
            });
          }
          // Fecha menu mobile após clique
          if (navMenu) navMenu.classList.remove('open');
        });
      });
    }
  
    // Reduz cabeçalho ao rolar
    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          header.classList.add('shrink');
        } else {
          header.classList.remove('shrink');
        }
      });
    }
  
    // Scroll suave para o topo ao clicar na logo
    if (logo) {
      logo.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  
    // Alternar menu mobile
    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
      });
    }
  });
  