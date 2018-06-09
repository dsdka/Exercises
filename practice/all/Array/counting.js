const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
'90',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const addOneArray =(ind, arr, i) => {
   if (ind===0) {
       return arr;
   }
    if (arr[i]===undefined) {
        arr[i]=ind;
    } else {
        arr[i]=arr[i]+ind;
     }
       if (arr[i]>9) {
           arr[i]=arr[i]%10;
           addOneArray(ind, arr, i+1);
       } else {
           ind = 0;
       }
};

const arr = gets().split('').map(Number);
arr.reverse();

for (let i=0; i<10; i+=1) {
 addOneArray(1, arr, 0);
 print(arr.reverse().join('').trim());
 arr.reverse();
}



