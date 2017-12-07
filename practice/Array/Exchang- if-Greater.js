/* Write a program that reads two double values from the console A and B,
 stores them in variables and exchanges their values if the first one is
  greater than the second one. Use an if-statement. As a result print the
   values of the variables A and B, separated by a space.*/
   const gets = this.gets || require('readline-sync').question;
   const print = this.print || console.log;
   const a=+gets();
   const b=+gets();
   if (a<b) {
       print(a+' '+b );
   } else if (b<a) {
       print(b+' '+a);
   } else {
       print(a+' '+b);
   }
   quit(0);
