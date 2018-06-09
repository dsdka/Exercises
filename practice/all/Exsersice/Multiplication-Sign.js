/* Write a program that shows the sign (+, - or 0) of the product of three
 real numbers, without calculating it.

Use a sequence of if operators.*/
const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
const a=+gets();
const b=+gets();
const c=+gets();
let res='';
if ((a>0 && b>0 && c>0) || (a>0 && b<0 && c<0) ||
(a<0 && b>0 && c<0) || (a<0 && b<0 && c>0)) {
    res = '+';
} else if ( a===0 || b===0 || c===0) {
    res = '0';
} else {
    res = '-';
}
print(res);
quit(0);
