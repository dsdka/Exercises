/* Write a program that enters 3 real numbers and prints them sorted in descending order.

Use nested if statements.
_Don’t use arrays and the built-in sorting functionality._*/
const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
const a=+gets();
const b=+gets();
const c=+gets();
let res='';
if (a>=b && a>=c) {
    if (b>=c) {
    res=`${a} ${b} ${c}`;
    } else {
        res=`${a} ${c} ${b}`;
    }
} else if (b>=a && b>=c) {
    if (a>=c) {
        res=`${b} ${a} ${c}`;
    } else if (c>=a) {
        res=`${b} ${c} ${a}`;
    }
} else if (c>=a &&c>=b) {
    if (a>=b) {
        res=`${c} ${a} ${b}`;
    } else {
        res=`${c} ${b} ${a}`;
    }
}
print(res);
quit(0);
