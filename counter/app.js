const countValue = document.querySelector('.count-value');
const countBtns = document.querySelectorAll('.btn');
let count = 0;

countBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.currentTarget.classList.contains('decrease-btn')) {
      count--;
      countValue.textContent = `${count}`;
    } else if (e.currentTarget.classList.contains('reset-btn')) {
      count = 0;
      countValue.textContent = `${count}`;
    } else {
      count++;
      countValue.textContent = `${count}`;
    }
    if (count > 0) {
        countValue.style.color = 'var(--clr-blue)';
    } else if (count < 0) {
        countValue.style.color = 'var(--clr-red)';
    } else {
        countValue.style.color = 'var(--clr-black)';
    }
  });
});