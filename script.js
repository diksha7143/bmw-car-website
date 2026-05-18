document.querySelectorAll('a').forEach(anchor => {

  anchor.addEventListener('click', function(e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Button Animation

const button = document.querySelector('.hero-content button');

button.addEventListener('mouseover', () => {
  button.style.transform = 'scale(1.1)';
});

button.addEventListener('mouseleave', () => {
  button.style.transform = 'scale(1)';
});

// Reveal Animation

window.addEventListener('scroll', () => {

  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {

    const position = card.getBoundingClientRect().top;

    const screen = window.innerHeight;

    if(position < screen - 100){
      card.classList.add('active');
    }
  });
});

console.log('BMW Website Loaded Successfully');