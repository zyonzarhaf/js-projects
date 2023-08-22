const main = document.querySelector('main');
const simpleValue = document.querySelector('.clr-value');
const btn = document.querySelector('.btn-hero');

const simpleClr = ['red', 'green', 'black', 'white'];
let randomClr, lastClr;


const getRandomClr = () => {
  while (randomClr === lastClr) {
    randomClr = simpleClr[Math.floor(Math.random() * simpleClr.length)];
  }
  lastClr = randomClr;
  return randomClr;
};

btn.addEventListener('click', () => {
  const clr = getRandomClr();
  main.style.backgroundColor = clr;
  simpleValue.textContent = clr;
});
