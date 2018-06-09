const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
'1,5,3,4,8,6,12,9,2,7'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const selectionSort = (arr) => {
    for (let i=0; i<arr.length-1; i+=1) {
        let ind = i;
        for (let j=i+1; j<arr.length; j+=1) {
            if (arr[j]<arr[ind]) {
                ind=j;
            }
        }
        if (i!==ind) {
        [arr[i], arr[ind]]=[arr[ind], arr[i]];
        }
    }
    return arr;
};
const input = gets().split(',').map(Number);
print(input);
const res = selectionSort(input);
print(res);
