const billInput = document.querySelector('.bill--1');
const tipBtn = document.querySelectorAll('.tip-btn');
const numOfPeopleInput = document.querySelector('.number-of-people--1');
const totalTip = document.querySelector('.total-tip')
const totalAmount = document.querySelector('.total-amount')



billInput.addEventListener('input', inputtedAmount);
numOfPeopleInput.addEventListener('input', inputtedAmount);

tipBtn.forEach(btn => {
  btn.addEventListener('click', function(event) {
    tipBtn.forEach(tip => tip.classList.remove('selected'));
    event.target.classList.add('selected')
    inputtedAmount(event)
  })
})


function inputtedAmount(event){
  event.preventDefault()
  let bill = parseFloat(billInput.value)
  let people = parseFloat(numOfPeopleInput.value)
  let tip = Number(event.target.value) || 15
    calculateAmount(bill, people, tip)
}

function calculateAmount(bill, people, tip) {
  let numOfPeople = people || 1;
  let tipPercentage = tip / 100;
  let tipResult = parseFloat (bill * tipPercentage).toFixed(2)
  let totalResult = parseFloat (bill * (1 + tipPercentage)).toFixed(2)
  let tipAmount = parseFloat (tipResult / numOfPeople).toFixed(2)
  let amount = parseFloat (totalResult / numOfPeople).toFixed(2)
  totalTip.innerHTML = `$${tipAmount}`
  totalAmount.innerHTML = `$${amount}`
  
}


