/* Write a program that finds the biggest of three numbers that are
read from the console.*/
const gets=this.gets||require('readline-sinc').question;
const print = this.print||console.log;
const a=+gets();
const b=+gets();
const c=+gets();
const res=Math.max(a, Math.max(b, c));
print(res);
//quit(0);
