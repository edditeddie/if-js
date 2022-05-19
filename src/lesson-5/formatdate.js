const str = prompt('Введите дату в формате YYYY-MM-DD', '2020-11-26');
const arr = str.split('-');
const result = arr.reverse().join('.');
alert(result);
