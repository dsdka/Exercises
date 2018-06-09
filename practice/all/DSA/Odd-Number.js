/* globals Set */
const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '3',
    '2',
    '-1',
    '2',
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const set = new Set();
const n = +gets();

for (let i=0; i<n; i+=1) {
    const value = gets();

    if (set.has(value)) {
        set.delete(value);
    } else {
        set.add(value);
    }
}
print(Array.from(set).join(''));
quit(0);