const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
'15',
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;



const n = +gets();
const counter = 0;
const minCounter = 0;

