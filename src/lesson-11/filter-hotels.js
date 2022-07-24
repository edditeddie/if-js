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
const btnDelete = document.getElementById('delete-child');
const childSelect = document.querySelectorAll('.child-select');
const child = `<select class="child" name="Years Old Child">
                            <option value="1">1 years old</option>
                            <option value="2">2 years old</option>
                            <option value="3">3 years old</option>
                            <option value="4">4 years old</option>
                            <option value="5">5 years old</option>
                            <option value="6">6 years old</option>
                            <option value="7">7 years old</option>
                            <option value="8">8 years old</option>
                            <option value="9">9 years old</option>
                            <option value="10">10 years old</option>
                            <option value="11">11 years old</option>
                            <option value="12">12 years old</option>
                            <option value="13">13 years old</option>
                            <option value="14">14 years old</option>
                            <option value="15">15 years old</option>
                            <option value="16">16 years old</option>
                            <option value="17">17 years old</option>
                        </select>`;

btnAdd.addEventListener('click', () => {
    const allChildren = document.querySelectorAll('.child').length;
    console.log('oke');
    if (allChildren === +btnAdd.dataset.max) {
        return;
    }
    document.getElementById('child-container').classList.add('child-container-on');
    childSelect.insertAdjacentHTML('afterbegin', child);
});

btnDelete.addEventListener('click', () => {
    const allChildren = document.querySelectorAll('.child').length;

    if (allChildren > 0) {
        allChildren[allChildren.length - 1].remove();
    }

    if (allChildren.length === 1) {
        document.getElementById('child-container').classList.remove('child-container-on');
    }
});
