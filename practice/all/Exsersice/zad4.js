const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
'123',
'6',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
// ----------------------------------------

const variationWhithRepeat = (arrn, arrk, index, permutation, count, res) => {
    if (index===arrn.length-1) {
        let result=0;
        for ( let i=0, j=0; i<arrn[i]-2; i+=1) {
            result=result+(+arrn[i]+permutation[j]);
        }
        result+=arrn[arrn.length-1];
        if (result===res) {
           count.push(1);
        }
        return count;
    }
    for (let i=0; i<arrn.length-1; i+=1) {
        permutation[index]=exp[i];
        variationWhithRepeat(arrn, arrk, index+1, permutation, count, res );
    }
};
const arr=gets().split('').map(Number);
const n=+gets();
const exp=['', '+', '*', '-'];
const count=[];
const variation=[];
const permutation=[];
variationWhithRepeat(arr, exp, 0, permutation, count, n);
print(count.length);
