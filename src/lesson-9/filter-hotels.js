const input = document.getElementById('guests');
const modal = document.getElementById('filter');

input.addEventListener('click', () => {
    modal.style.display = 'block';
});

window.addEventListener('click', (event) => {
    if (event.target.contains(modal)) {
        modal.style.display = 'none';
    }
});

function countFuncAdults(count) {
    const btnPlus = count.querySelector('.js-plus-adults');
    const btnMinus = count.querySelector('.js-minus-adults');
    const field = count.querySelector('.filter-value-1');
    let fieldValue = parseFloat(field.value, 10);

    btnPlus.addEventListener('click', function () {
        if (fieldValue < 30) {
            fieldValue++;
            field.value = fieldValue;
        } else {
            return fieldValue;
        }
    });

    btnMinus.addEventListener('click', function () {
        if (fieldValue > 1) {
            fieldValue--;
            field.value = fieldValue;
        } else {
            return 1;
        }
    });
}
const countsAdults = document.querySelectorAll('.button-rectangle');
countsAdults.forEach(countFuncAdults);

function countFuncChild(count) {
    const btnPlus2 = count.querySelector('.js-plus-child');
    const btnMinus2 = count.querySelector('.js-minus-child');
    const field2 = count.querySelector('.filter-value-2');
    let fieldValue2 = parseFloat(field2.value, 10);

    btnPlus2.addEventListener('click', function () {
        if (fieldValue2 < 10) {
            fieldValue2++;
            field2.value = fieldValue2;
        } else {
            return fieldValue2;
        }
    });

    btnMinus2.addEventListener('click', function () {
        if (fieldValue2 > 0) {
            fieldValue2--;
            field2.value = fieldValue2;
        } else {
            return 1;
        }
    });
}
const countsChild = document.querySelectorAll('.button-rectangle2');
countsChild.forEach(countFuncChild);

function countFuncRooms(count) {
    const btnPlus3 = count.querySelector('.js-plus-rooms');
    const btnMinus3 = count.querySelector('.js-minus-rooms');
    const field3 = count.querySelector('.filter-value-3');
    let fieldValue3 = parseFloat(field3.value, 10);

    btnPlus3.addEventListener('click', function () {
        if (fieldValue3 < 30) {
            fieldValue3++;
            field3.value = fieldValue3;
        } else {
            return fieldValue3;
        }
    });

    btnMinus3.addEventListener('click', function () {
        if (fieldValue3 > 1) {
            fieldValue3--;
            field3.value = fieldValue3;
        } else {
            return 1;
        }
    });
}
const countsRooms = document.querySelectorAll('.button-rectangle3');
countsRooms.forEach(countFuncRooms);

const btnAdd = document.getElementById('add-child');
/*const childrenWrap = document.querySelector('.child-container');*/
const btnDelete = document.getElementById('delete-child');
const childSelect = document.querySelector('.child-select');

btnAdd.addEventListener('click', () => {
    const allChildren = childSelect.length;

    if (allChildren === +btnAdd.dataset.max) {
        return;
    }
    /*childrenWrap.style.display = 'flex';*/
    document.getElementById('child-container').classList.add('child-container-on');
});

btnDelete.addEventListener('click', () => {
    document.getElementById('child-container').classList.remove('child-container-on');

});
