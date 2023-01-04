
const select = document.querySelector('select');
const input = document.querySelector('input');

// Variables
let changeSelect;

addDisabled();
addWidth();   
select.addEventListener('change', () => {
  addDisabled();
  changeSelect = select.value;

})

input.addEventListener('keyup', () => {
  writeNum(input);
  addWidth();
})

// Function to add disabled on input field
function addDisabled() {
  if (select.value == 'select') {
    return input.setAttribute('disabled', '');
  }

    input.removeAttribute('disabled');
}

// Function to write num in input
function writeNum(input) {
  const spanValue = document.querySelector(`.${changeSelect} span`);
  (input.value > 5) ? input.value = 5 : false;
  (input.value < 0) ? input.value = 0 : false;

  spanValue.innerHTML = parseFloat(input.value);

  (spanValue.innerHTML == 'NaN')? spanValue.innerHTML = 0  : false;
}

// Function to add width on starUp
function addWidth() {
  const spansValue = document.querySelectorAll('tbody th span');
  const starsUp = document.querySelectorAll('tbody th .star-up');

  spansValue.forEach((item, index) => {
    const width = (parseFloat(item.innerHTML) * 100) / 5;
    starsUp[index].style.width = `${width}%`;
  })
}