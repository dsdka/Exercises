/* Write a program that read a digit [0-9] from the console,
 and depending on the input, shows the digit as a word (in English).

Print "not a digit" in case of invalid input.
Use a switch statement. */
const gets=this.gets||require('readline-sinc').question;
const print = this.print||console.log;
const w=gets();
const arr=['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let res='';

if (w>=0 && w<=9) {
    res=arr[w];
} else {
    res="not a digit";
}
print(res);
quit(0);
