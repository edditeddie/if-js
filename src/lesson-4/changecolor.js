// клик изменение цвета //
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const element1 = document.getElementById('text1');
const element2 = document.getElementById('text2');
const element3 = document.getElementById('text3');
const pBlock = [element1, element2, element3];

for (let i = 0; i < pBlock.length; i++) {
    pBlock[i].addEventListener('click', changeColor(pBlock[i]));
}

const pArray = document.getElementsByTagName('p');
for (let i = 0; i < pArray.length; i++) {
    pArray[i].addEventListener('click', changeColor(pArray[i]));
}

function changeColor(elem) {
    let counter = 0;
    return function () {
        if (counter === colors.length) {
            counter = 0;
        }
        elem.style.color = colors[counter];
        counter++;
    };
}

module.exports = changeColor;
