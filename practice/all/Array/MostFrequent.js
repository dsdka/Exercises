/* Write a program that finds the most frequent number in an array
 of N elements.*/
 const gets = this.gets || require('readline-sync').question;
 const print = this.print || console.log;
const n =+gets();
const arr=[];
for (let i = 0; i<n; i+=1) {
    arr[i] = +gets();
}
let count=1;
let maxCount=0;
let el=arr[0];
for (let i=0; i<n-1; i+=1) {
    count=1;
    for ( let j = i+1; j<n; j+=1) {
        if (arr[i]===arr[j]) {
            count+=1;
        }
    if (maxCount<count) {
        maxCount=count;
        el = arr[i];
    }
    }
}
print(`${el} (${maxCount} times)`);


