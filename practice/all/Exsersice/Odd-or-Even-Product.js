/* You are given N integers (given in a single line, separated by a space).

Write a program that checks whether the product of the odd elements is equal 
to the product of the even elements.
Elements are counted from 1 to N, so the first element is odd, 
the second is even, etc. */
const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
const n=+gets();
const input=gets();
const arr=input.split(' ').map(Number);
let odd=1;
let event=1;
for (let i=0; i<n; i+=2) {
    odd*=arr[i];
}
for (let i=1; i<n; i+=2) {
    event*=arr[i];
}
if (odd===event) {
    print(`yes ${odd}`);
} else {
    print(`no ${odd} ${event}`);
};
quit(0);