const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
'5',
'1',
'2',
'3',
'1',
'2',
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;

let arr= Array.from({ length: 11 })
.fill(0);
const n= +gets();
for (let i=0; i<n; i+=1) {
    let k= +gets();
    arr[k]+=1;
};
const result = arr.indexOf(Math.max(...arr));
print(result);


