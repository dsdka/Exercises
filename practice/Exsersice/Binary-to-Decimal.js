/* Using loops write a program that converts a binary integer number to its
 decimal form.

The input is entered as string. The output should be a variable of
 type long.
_Do not use the built-in .NET functionality._*/
const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
const text=gets();
 const l=text.length;
let ind=1;
let res = 0;
for (let i=l-1; i>=0; i-=1) {
    res+=+(text[i])*ind;
    ind*=2;
}
print(res);
//quit(0);
