const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
    '0.123456',
    '1.234567',
    '2.345678'
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n=+gets();
const m=+gets();
const p=+gets();
const result = ((n*n + (1/(m*p))+1337)/(n-(128.523123123*p))) + (Math.sin(Math.floor(m%180)));
print(result.toFixed(6));
//quit(0);

