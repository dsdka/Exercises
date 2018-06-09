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

const insertionSort = (arr) => {
    for (let i = 1; i<arr.length; i+=1) {
        let j=i;
        while (j>0 && arr[j-1]>arr[j]) {
            [arr[j-1], arr[j]]=[arr[j], arr[j-1]];
            j-=1;
        }
    }
    return arr;
}
const input = gets().split(',').map(Number);
print(input);
print(insertionSort(input));