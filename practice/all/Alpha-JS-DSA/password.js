const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '2',
    '>',
    '13',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});

const n = +gets();
const relation = gets();
const k = +gets();

let counter = k;

password = (pass, relation) => {
    if (pass === '') {
        for (let i = 0; i <= 9; i += 1) {
            password(i.toString(), relation)
        }
        return;
    }
    let index = pass.length - 1;
    if (index >= relation.length) {
        counter -= 1;
        if (counter === 0) {
            print(pass);
        }
        return;
    }

    if (relation[index] === '=') {
        password(pass + pass[index], relation);
    }
    if (relation[index] === '<') {

        let last;
        if (pass[index === 0]) {
            last = 9;
        } else {
            last = pass[index] - 1;
        }

        for (let i = 1; i <= last; i += 1) {
            password(pass + i, relation);
        }
    } else if (pass[index] !== 0) {

        password(pass + '0', relation);
        for (let i = +pass[index] + 1; i <= 9; i += 1) {
            password(pass + i, relation);
        }
    }
}
password('', relation);