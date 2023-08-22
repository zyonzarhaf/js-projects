class Counter {
  constructor(element, value) {
    this.element = document.querySelector(element);
    this.value = this.element.querySelector('.current-value');
    this.value.textContent = value;
    this.decreaseBtn = this.element.querySelector('.decrease-btn');
    this.resetBtn = this.element.querySelector('.reset-btn');
    this.increaseBtn = this.element.querySelector('.increase-btn');
    this.decreaseValue = this.decreaseValue.bind(this);
    this.resetValue = this.resetValue.bind(this);
    this.increaseValue = this.increaseValue.bind(this);
    this.decreaseBtn.addEventListener('click', this.decreaseValue);
    this.resetBtn.addEventListener('click', this.resetValue);
    this.increaseBtn.addEventListener('click', this.increaseValue);
  }

  decreaseValue() {
    this.value.textContent--;
  }

  increaseValue() {
    this.value.textContent++;
  }

  resetValue() {
    this.value.textContent = 0;
  }
  
  currentValue() {
    console.log(this.value);
  }
};

const counter1 = new Counter('.first-counter', 100);
const counter2 = new Counter('.second-counter', 200);
