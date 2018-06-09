/* Write a program that, depending on the first line of the input, reads an int, double or string variable.

If the variable is int or double, the program increases it by one.
If the variable is a string, the program appends * at the end.
Print the result at the console. Use switch statement. */
const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
const t=gets();
const value=gets();
let res='';
if (t==='integer') {
  res=+(value)+1;
} else if (t==='real') {
    res=(+(value)+1).toFixed(2);
} else if (t==='text') {
   res=value+'*';
}

print(res);
quit(0);