const main = document.querySelector('main');
const hexValue = document.querySelector('.clr-value');
const btn = document.querySelector('.btn-hero');
const hex = '0123456789ABCDEF';

const getRandomHex = () => {
  let randomClr = '#';
  for (let i = 0; i < 6; i++) {
    randomClr += `${hex[Math.floor(Math.random() * hex.length)]}`;
  }
  return randomClr;
};

btn.addEventListener('click', () => {
  const clr = getRandomHex();
  main.style.backgroundColor = clr;
  hexValue.textContent = clr;
});
