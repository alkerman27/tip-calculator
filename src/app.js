const billInput = document.querySelector('.bill--1');
const tipBtn = document.querySelectorAll('.tip-btn');
const customBtn = document.querySelector('.custom-btn')
const customInput = document.querySelector('.custom-input')
const numOfPeopleInput = document.querySelector('.number-of-people--1');
const totalTip = document.querySelector('.total-tip')
const totalAmount = document.querySelector('.total-amount')
const reset = document.querySelector('.reset-btn')
const defaultTip = document.querySelector('.default')

customBtn.addEventListener('click', function(event) {
  customInput.removeAttribute('hidden')
  event.target.setAttribute('hidden', true)
  tipBtn.forEach(tip => tip.classList.remove('selected'));
  customInput.focus();
  // event.target.removeAttribute('hidden') // for removing attribute again
})

customInput.addEventListener('input', inputtedTip)
billInput.addEventListener('input', inputtedAmount);
numOfPeopleInput.addEventListener('input', inputtedAmount);

tipBtn.forEach(btn => {
  btn.addEventListener('click', function(event) {
    tipBtn.forEach(tip => tip.classList.remove('selected'));
    event.target.classList.add('selected')
    customBtn.removeAttribute('hidden')
    customInput.setAttribute('hidden', true)
    customInput.value = '';
    inputtedTip(event)
  })
})

reset.addEventListener('click', function(event) {
  event.preventDefault()
  tipBtn.forEach(tip => tip.classList.remove('selected'));
  defaultTip.classList.add('selected')
  billInput.value = 0;
  numOfPeopleInput.value = 1;
  customBtn.removeAttribute('hidden')
  customInput.setAttribute('hidden', true)
  customInput.value = '';
  totalTip.innerHTML = '$0.00'
  totalAmount.innerHTML = '$0.00'
})

function inputtedTip(event) {
  inputtedAmount(event)
}

function inputtedAmount(event){
  event.preventDefault()
  let tip = 15;
  let bill = parseFloat(billInput.value)
  let people = parseFloat(numOfPeopleInput.value)
  if(event.target.classList.contains('tipIn')) {
    tip = event.target.value
  }
  calculateAmount(tip, bill, people)
    
}

function calculateAmount(tip, bill, people) {
  let numOfPeople = people || 1;
  let tipPercentage = tip / 100;
  let tipResult = parseFloat (bill * tipPercentage).toFixed(2)
  let totalResult = parseFloat (bill * (1 + tipPercentage)).toFixed(2)
  let tipAmount = parseFloat (tipResult / numOfPeople).toFixed(2)
  let amount = parseFloat (totalResult / numOfPeople).toFixed(2)
  totalTip.innerHTML = `$${tipAmount}`
  totalAmount.innerHTML = `$${amount}`
  
}




