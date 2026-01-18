document.addEventListener('DOMContentLoaded', function() {
  const card = document.querySelector('.card-glass');
  card.style.opacity = '0';
  card.style.transform = 'scale(0.8) translateY(40px)';
  
  setTimeout(() => {
    card.style.animation = 'popup 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
  }, 200);
  
  const buttons = document.querySelectorAll('a');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  const socialIcons = document.querySelectorAll('.social-icon');
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px) scale(1.1)';
    });
    
    icon.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
  
  const profileImg = document.querySelector('.profile-img');
  profileImg.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
    this.style.transition = 'transform 0.5s ease';
  });
  
  profileImg.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
  
  const floatingElements = document.querySelectorAll('.floating-element');
  floatingElements.forEach(el => {
    const randomX = Math.random() * 20 - 10;
    const randomY = Math.random() * 20 - 10;
    el.style.transform = `translate(${randomX}px, ${randomY}px)`;
  });
  
  window.addEventListener('mousemove', function(e) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    card.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
  });
});