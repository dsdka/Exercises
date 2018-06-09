const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
'123456 4',
//'5',
//'3',
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;
//----------------------------------------

const [n, k] = gets().split(' ');
let ch = n.split('').reverse().join('');
const div = Math.floor(+ch/+k);
const ost = +ch%+k;
const res = div+ost;
print(res);