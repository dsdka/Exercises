const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
' 1, 5, 3, 4, 8, 6, 12, 9, 2, 7',

]
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const bubleSort = (arr) => {
    let isSwap = true;
    while (isSwap) {
        isSwap = false;
        for (let i=0; i<arr.length-1; i+=1) {
            if (arr[i+1]<arr[i]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                isSwap = true;
            }
        }
    }
    return arr;
}
const input = gets().split(',').map(Number);
print(input);
print(bubleSort(input));