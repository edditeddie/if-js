function palindrom(str) {
    return str == str.split('').reverse().join('');
}
const str = prompt('Введите слово палиндром:');
alert(palindrom(str));
