function curry(f) {
    return function (a) {
        return function (b) {
            return f(a, b);
        };
    };
}

function sum(a, b) {
    return a + b;
}

const showSum = curry(sum);
module.exports = sum;

console.log(showSum(5)(2));
