/* Write a program that, for a given two numbers N and x, calculates 
the sum S = 1 + 1!/x + 2!/x2 + … + N!/xN.

Use only one loop. Print the result with 5 digits after the decimal point.*/
const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
const n=+gets();
const x=+gets();
let fact=1;
let sq=1;
let sum=1;
for (let i=1; i<=n; i+=1) {
fact=fact*i;
sq=sq*x;
sum=sum+fact/sq;
}
print(sum.toFixed(5));
quit(0);
