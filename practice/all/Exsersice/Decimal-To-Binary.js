/*  Using loops write a program that converts an integer number 
to its binary representation.

The input is entered as long. The output should be a variable of type string.
_Do not use the built-in .NET functionality._*/
const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
let n=+gets();
let ind;
let res=;
if ( n===0) {
    res=0;
} else {
    res='';
}
while (n>0) {
ind=n%2;
n=n/2|0;
res=ind+res;
}

print(res);
//quit(0);
