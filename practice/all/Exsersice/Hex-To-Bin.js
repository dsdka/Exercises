/* The task is simple: convert a number in hexadecimal to a number
 in binary

Do it without conversion to decimal
Hint https://en.wikipedia.org/wiki/Hexadecimal#Binary_conversion */
const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
const n=gets();
let res='';
let ind;
for (let i=n.length-1; i>=0; i-=1) {
    switch (n[i]) {
        case '1': ind='0001';
        break;
        case '2': ind='0010';
        break;
        case '3': ind='0011';
        break;
        case '4': ind='0100';
        break;
        case '5': ind='0101';
        break;
        case '6': ind='0110';
        break;
        case '7': ind='0111';
        break;
        case '8': ind='1000';
        break;
        case '9': ind='1001';
        break;
        case 'A': ind='1010';
        break;
        case 'B': ind='1011';
        break;
        case 'C': ind='1100';
        break;
        case 'D': ind='1101';
        break;
        case 'E': ind='1110';
        break;
        case 'F': ind='1111';
        break;
        default: ind='0000';
    }
    res=ind+res;
}
 const result = res.replace(/^[0]+/, '');
print(result.trim());
quit(0);
