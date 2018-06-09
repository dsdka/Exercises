const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
    'ADD 5',
    'ADD 1',
    'ADD 2',
    'FIND',
    'ADD 3',
    'FIND',
    'ADD 1',
    'FIND',
    'EXIT',
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;