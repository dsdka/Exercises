/* Write a method that returns the index of the first element in array 
that is larger than its neighbours, or -1, if there is no such element. */
const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
const FirstLargestThanNeighbors = (l, arr) => {
let index=-1;
for (let i=1; i<l-2; i+=1) {
        if (arr[i]>arr[i-1] && arr[i]>arr[i+1]) {
            index=i;
            break;
        }
}
return index;
};
const n=+gets();
const array=gets().split(' ').map(Number);
const res=FirstLargestThanNeighbors(n, array);
print(res);

