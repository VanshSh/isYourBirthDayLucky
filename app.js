const date = document.getElementById('date')
const inputNumber = document.getElementById('inputNumber')
const happy = document.getElementById('happy')
const sad = document.getElementById('sad')
const valid = document.getElementById('valid')
const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', () => {
  let luckyNumber = Number(inputNumber.value)
  let dateValue = date.value.split('-').join('')
  let sumOfDate = 0
  for (value of dateValue) {
    sumOfDate += Number(value)
  }
  
  if (dateValue === '' || luckyNumber === '') {
    valid.classList.add('d-block')
  } else if (sumOfDate % luckyNumber === 0) {
    happy.classList.add('d-block')
  } else {
    sad.classList.add('d-block')
  }
})
