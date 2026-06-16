import './style.css';

let count = 0;
const text = document.querySelector('#counter-text');
const btn = document.querySelector('#counter-btn');

btn.addEventListener('click', () => {
  count++;
  text.textContent = `计数: ${count}`;
});
