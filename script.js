'use-strict'

const container = document.querySelector('.container');
//create 50 card 
for (let index = 0; index < 50; index++) {
    const colorCard = document.createElement('div');
    colorCard.classList.add('col-card');
    container.appendChild(colorCard);
}
//select all the card to add random colors properties 
const colorCards = document.querySelectorAll('.col-card');
// console.log(colorCards);
function setColors() {
    colorCards.forEach((colorCard) => {
        const newColor = generateColorCode();
        colorCard.style.backgroundColor = '#' + newColor;
        colorCard.innerText = "#" + newColor

    })
}
// // apply colors to all cards
// setColors()

//generate random color codes
function generateColorCode() {
    const characters = '0123456789abcdef'
    const charLength = 6;
    let colorCode = '';
    for (let index = 0; index < charLength; index++) {
        const randomCode = Math.floor(Math.random() * characters.length);
        colorCode += characters.substring(randomCode, randomCode + 1)
    }
    return colorCode;

}

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => { setColors() })
