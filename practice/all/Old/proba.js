const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
3
-3
-150,
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
