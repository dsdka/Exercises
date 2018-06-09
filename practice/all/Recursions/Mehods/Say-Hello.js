/* Write a method that asks the user for his name and prints Hello, <name>!.
 Write a program to test this method. */
 const gets=this.gets || require('readline-sinc').quetstion;
 const print = this.print||console.log;
 const SayHello = (name) => {
    return (`Hello, ${name}!`);   
 };
const input=gets();
const res = SayHello(input);
print(res);
quit(0);

