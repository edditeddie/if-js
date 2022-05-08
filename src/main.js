function palindrom(str) {
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] != str[j]) return false;
    }
    return true;
}
const str = prompt('Введите слово палиндром:');
alert(palindrom(str));



function replaceZero(number) {
    const numStr = `${number}`;
    if (numStr.includes('0')) {
        return `${number}`.replaceAll('0', 'zero');
    }
    return number;
}

console.log([12, 53, 20, 18, 22, 100, 43, 53, 50].map(replaceZero).join(', '));

const b = 5;
console.log(b);
