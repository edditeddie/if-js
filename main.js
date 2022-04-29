let user = 'John Doe';
console.log(user);

let student = 'Eduard';
console.log(student);

let test = 1;
test = test + 1;
test += '1'; // 21;
console.log(test);
test -= 1; // 20;
console.log(test); // true
console.log(Boolean(test));

let result = 1;
let arr = [2, 3, 5, 8];
for (let i = 0; i < 4; i++) {
  result *= arr[i];
}
console.log(result);

let arrOdd = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arrOdd.length; i++) {
  if (arrOdd[i] > 5 && arrOdd[i] < 10) {
    console.log(arrOdd[i]);
  }
}

let arrEven = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arrEven.length; i++) {
  if (arrEven[i] % 2 === 0 && arrEven[i] > 0) {
    console.log(arrEven[i]);
  }
}

