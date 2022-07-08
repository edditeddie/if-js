const element1 = document.getElementById('text1');
const element2 = document.getElementById('text2');
const element3 = document.getElementById('text3');


const colors = {
    data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
    [Symbol.iterator]() {
        return this;
    },
    next() {
        if (this.current === undefined) {
            this.current = 0;
        }

        if (this.current < this.data.length) {
            return {
                done: false,
                value: this.data[this.current++]
            }
        }

        if (this.current === this.data.length) {
            this.current = 0;
            return this.next();
        }
    },
};

const changeStyle = id => event => {
    event.target.style.color = id.next().value;
};

element1.addEventListener('click', changeStyle({...colors}));
element2.addEventListener('click', changeStyle({...colors}));
element3.addEventListener('click', changeStyle({...colors}));
