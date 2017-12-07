/* Write a program that reads from the console a sequence of N real numbers and
 returns the minimal, the maximal number, the sum and the average of
 all numbers (displayed with 2 digits after the decimal point).

The input starts by the number N (alone in a line) followed by N lines, each holding an real number.
The output is like in the examples below.*/
const gets=this.gets||require('readline-sinc').question;
const print = this.print||console.log;
const n=+gets();
const arr = [];
for (let i=0; i<n; i+=1) {
    arr[i]=+gets();
}
const min = Math.min(...arr).toFixed(2);
const max = Math.max(...arr).toFixed(2);
const sum = arr.reduce((a, b)=> a+b, 0).toFixed(2);
const avg = (sum/arr.length).toFixed(2);
print(`min=${min}\n max=${max}\n sum=${sum}\n avg=${avg}`);
quit(0);
