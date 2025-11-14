  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links li a');

  // Toggle mobile menu
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when a link is clicked
  navItems.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });
  });
