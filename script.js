document.addEventListener('DOMContentLoaded', function () {
  const typingText = document.querySelector('.typing-text');
  const text = "We offer a wide range of delicious treats.";
  let index = 0;

  function typeWriter() {
      if (index < text.length) {
          typingText.textContent += text.charAt(index);
          index++;
          setTimeout(typeWriter, 50);
      }
  }

  typeWriter();
});

// JavaScript to trigger typewriter animation when section enters viewport
document.addEventListener('DOMContentLoaded', function () {
  const aboutSection = document.querySelector('.about-section');
  const aboutContent = document.querySelector('.about-content');

  function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function startTypewriterAnimation() {
      const typewriterText = aboutContent.querySelector('.typewriter');
      typewriterText.style.animation = 'typing 3s steps(40) 1s forwards'; // Start animation
  }

  function checkTypewriterAnimation() {
      if (isInViewport(aboutSection)) {
          startTypewriterAnimation();
          window.removeEventListener('scroll', checkTypewriterAnimation); // Remove event listener after animation starts
      }
  }

  window.addEventListener('scroll', checkTypewriterAnimation);
});

document.addEventListener("DOMContentLoaded", function() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');

  hamburgerMenu.addEventListener('click', function() {
      navLinks.classList.toggle('show');
  });
});

