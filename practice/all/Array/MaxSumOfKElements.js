/* Write a program that reads two integer numbers N and K and
 an array of N elements from the console. Find the maximal sum
  of K elements in the array.*/
const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
const n = +gets();
const k = +gets();
const arr = [];
let sum = 0;
for (let i = 0; i < n; i += 1) {
    arr[i] = +gets();
}
const minEl=Math.min(...arr);
for (let i = 0; i < k; i += 1) {
    const el = arr.indexOf(Math.max(...arr));
    sum += arr[el];
    arr[el] = minEl;
}
print(sum);

