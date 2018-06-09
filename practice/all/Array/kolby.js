const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '10 5',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const input = gets().split(' ').map(Number);
const n = input[0];
const l = input[1];

let result = 0;
let el = 0;
for (let i = 1; i <= l + 1; i += 1) {
    el += i - 1;
    if (el < l) {
        continue;
    }
    if (el >= l) {
        if (i % 2 === 0) {
            result = i + 1;
            break;
        } else {
            result = i;
            break;
        }
    }
}

print(result);
//quit(0);