/* Write a program that calculates the greatest common divisor (GCD)
 of given two integers A and B.

Use the Euclidean algorithm (find it in Internet).*/
const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
const input=gets();
const nm=input.split(' ').map(Number);
const a=nm[0];
const b=nm[1];
let n;
let m;
let res;
let ost=1;
if (a>=b) {
    n=a;
    m=b;
} else {
    n=b;
    m=a;
}
while (ost!==0) {
    ost=n%m;
    n=m;
    res=m;
    m=ost;
}
print(res);
quit(0);
