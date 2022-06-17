const obj1 = {
    a: 'a',
    b: {
        a: 'a',
        b: 'b',
        c: {
            a: 1,
        },
    },
};
const obj2 = {
    b: {
        c: {
            a: 1,
        },
        b: 'b',
        a: 'a',
    },
    a: 'a',
};
const obj3 = {
    a: {
        c: {
            a: 'a',
        },
        b: 'b',
        a: 'a',
    },
    b: 'b',
};

function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }

    if (obj1 === null || obj2 === null) {
        return false;
    }

    if (typeof obj1 === 'undefined' || typeof obj2 === 'undefined') {
        return false;
    }

    if (typeof obj1 === 'object' && typeof obj2 === 'object' &&
        !(obj1 instanceof Array) && !(obj2 instanceof Array)) {
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }
        for (const key in obj1) {
            if (typeof obj1[key] !== 'object' && typeof obj2[key] !== 'object') {
                if (obj1[key] !== obj2[key]) {
                    return false;
                }
            }

            if (!deepEqual(obj1[key], obj2[key])) {
                return false;
            }
        }
        return true;
    }
    return false;
}

console.log(deepEqual(obj1, obj2));// true
console.log(deepEqual(obj1, obj3));// false
console.log(deepEqual(obj2, obj3));// false