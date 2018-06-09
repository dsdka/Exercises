/* Using loops write a program that converts a hexadecimal integer
 number to its decimal form.

The input is entered as string. The output should be a variable of type long.
_Do not use the built-in .NET functionality._*/
const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
const hex=gets();
let res=0;
let ind=1;
let dec;
for (let i=hex.length-1; i>=0; i-=1) {
    switch (hex[i]) {
        case 'A': dec= 10;
        break;
        case 'B': dec=11;
        break;
        case 'C': dec=12;
        break;
        case 'D': dec=13;
        break;
        case 'E': dec=14;
        break;
        case 'F': dec=15;
        break;
        default: dec=+hex[i];
    }
    res+=dec*ind;
    ind*=16;
}
print(res);
quit(0);
