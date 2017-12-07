/* Using loops write a program that converts an integer number
 to its hexadecimal representation.

The input is entered as long. The output should be a variable of type string.
_Do not use the built-in .NET functionality._*/
const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
const n=+gets();
let k=n;
let res;
let div;
if (k===0) {
    res=0;
} else {
    res='';
}

while (k>0) {
    div=k%16;
    k= Math.floor(k/16);
    switch (div) {
        case 10: div='A';
        break;
        case 11: div='B';
        break;
        case 12: div='C';
        break;
        case 13: div='D';
        break;
        case 14: div='E';
        break;
        case 15: div='F';
        break;
        default: div=div.toString();
    }
    res=div+res;
}
print(res);
// quit(0);
