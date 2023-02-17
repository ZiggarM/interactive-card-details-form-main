const cardNum = document.querySelector('.card-num')
const cardName = document.querySelector('.card-name')
const cardExp = document.querySelector('.card-exp')
const cardCvc = document.querySelector('.card-cvc')
const userName = document.querySelector('#name')
const userNum = document.querySelector('#card-num')
const userMonth = document.querySelector('#month')
const userYear = document.querySelector('#year')
const userCvc = document.querySelector('#cvc')


userName.addEventListener("keyup",() => {
cardName.innerText = userName.value
})

userNum.addEventListener("keyup",() => {
cardNum.innerText = userNum.value
})

userMonth.addEventListener("keyup",() => {
cardExp.innerText = `${userMonth.value}/${userYear.value}`
})

userYear.addEventListener("keyup",() => {
cardExp.innerText = `${userMonth.value}/${userYear.value}`
})

userCvc.addEventListener("keyup",() => {
cardCvc.innerText = userCvc.value
})
