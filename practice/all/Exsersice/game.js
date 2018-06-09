const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
'981',
// '5',
// '3',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
// ----------------------------------------

const n=gets().split('').map(Number);
let res = 1;
let ind =0;
for (let i=0; i<3; i+=1) {
    if (n[i]===0) {
        continue;
    } else if (n[i]===1) {
        ind+=1;
    } else {
        res = res*n[i];
    }
}
if (res===1) {
    res=ind;
} else {
res= res+ind;
}
print(res);
