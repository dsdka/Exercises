/* Write a program that calculates with how many zeroes the factorial of
 a given number N has at its end.

Your program should work well for very big numbers, e.g. N = 100000 */
const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
const n=+gets();
let sum=0;
let m=n;
let k;
while (m>=5) {
    k=m/5|0;
    sum+=k;
    m=k;
}
print(sum);
quit(0);

