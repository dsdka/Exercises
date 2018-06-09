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
'-7 -2 3'
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const n=+gets();
const arr=gets().split(' ').map(Number);
const res = [];
for (let i=1; i<=n; i+=1) {
    const el = Math.max(...arr);
    const ind= arr.indexOf(el);
    res[ind]=i;
    arr[ind]=-Infinity;
}
print(res.join(' '));
//quit(0);
