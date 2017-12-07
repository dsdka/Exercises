/* In combinatorics, the Catalan numbers are calculated by the following 
formula: catalan-formula

Write a program to calculate the Nth Catalan number by given N */
const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
const n=+gets();
let res=1;
for (let k=2; k<=n; k+=1) {
    res*=(n+k)/k;
}
print(res.toFixed(0));
//quit(0);

