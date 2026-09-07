const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const storedTheme = localStorage.getItem('melih-theme');

if (storedTheme) root.dataset.theme = storedTheme;

toggle.addEventListener('click', () => {
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = next;
  localStorage.setItem('melih-theme', next);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
document.querySelector('#year').textContent = new Date().getFullYear();

console.log('%cHello, curious human.', 'color:#5cf2c7;font-size:18px;font-weight:bold');
console.log('You found the tiny developer easter egg. → github.com/melihdilbaz');
