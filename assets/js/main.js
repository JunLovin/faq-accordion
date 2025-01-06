const firstPlusBtn = document.getElementById('firstPlus')
const secondPlusBtn = document.getElementById('secondPlus')
const thirdPlusBtn = document.getElementById('thirdPlus')
const fourthPlusBtn = document.getElementById('fourthPlus')
const firstMinusBtn = document.getElementById('firstMinus')
const secondMinusBtn = document.getElementById('secondMinus')
const thirdMinusBtn = document.getElementById('thirdMinus')
const fourthMinusBtn = document.getElementById('fourthMinus')
const pFirstHidden = document.getElementById('p-first-hide')
const pSecondHidden = document.getElementById('p-second-hide')
const pThirdHidden = document.getElementById('p-third-hide')
const pFourthHidden = document.getElementById('p-fourth-hide')

const showText = (minus, btn, text) => {
    btn.classList.add('disappear')
    text.classList.add('show')
    minus.classList.add('active')
}

const showPlus = (minus, btn, text) => {
    btn.classList.remove('disappear')
    text.classList.remove('show')
    minus.classList.remove('active')
}

firstPlusBtn.addEventListener('click', () => showText(firstMinusBtn, firstPlusBtn, pFirstHidden))

secondPlusBtn.addEventListener('click', () => showText(secondMinusBtn, secondPlusBtn, pSecondHidden))

thirdPlusBtn.addEventListener('click', () => showText(thirdMinusBtn, thirdPlusBtn, pThirdHidden))

fourthPlusBtn.addEventListener('click', () => showText(fourthMinusBtn, fourthPlusBtn, pFourthHidden))

firstMinusBtn.addEventListener('click', () => showPlus(firstMinusBtn, firstPlusBtn, pFirstHidden))

secondMinusBtn.addEventListener('click', () => showPlus(secondMinusBtn, secondPlusBtn, pSecondHidden))

thirdMinusBtn.addEventListener('click', () => showPlus(thirdMinusBtn, thirdPlusBtn, pThirdHidden))

fourthMinusBtn.addEventListener('click', () => showPlus(fourthMinusBtn, fourthPlusBtn, pFourthHidden))