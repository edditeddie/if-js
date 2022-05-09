function palindrom(str) {
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] != str[j]) return false;
    }
    return true;
}
const str = prompt('Введите слово палиндром:');
alert(palindrom(str));

function min(a, b) {
    return a < b ? a : b;
}
console.log(min(1, 7));

function max(a, y) {
    return a < y ? y : a;
}
console.log(max(2, 6));

function getRandomInt() {
    return Math.ceil(Math.random() * 100);
}

const arr = [];
for (let i = 0; i <= 9; i++) {
    arr[i] = getRandomInt();
}

function replaceToZero() {
    for (let i = 0; i <= 9; i++) {
        if (arr[i].toString().includes('0')) {
            arr[i] = arr[i].toString().replaceAll('0', 'zero');
        }
    }
}
console.log(arr);
replaceToZero();
console.log(arr);
