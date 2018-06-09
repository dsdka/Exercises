const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
'28,1,45,255',

]
const gets = this.gets || getGets(test);
const print = this.print || console.log;
//-------------------------------------------

const arr = gets().split(',').map(Number);

let result = '';
for (let j=0; j<arr.length; j+=1) {
    let res=Array.from({ length: 8 })
    .fill(0);
    let i=res.length-1;
    let div;
    let n=arr[j];
    while (n>0) {
        div=n%2;
        res[i]=div;
        i-=1;
        n=n/2 | 0;
    }
    let index;
    if (j%2===0) {
        index = 1;
    } else {
        index = 0;
    }
    for (let k=index; k<res.length; k+=2) {
        result=result+res[k];
    }
}
print(result);