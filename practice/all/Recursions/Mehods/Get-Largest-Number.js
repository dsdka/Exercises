/* Write a method GetMax() with two parameters that returns the larger
 of two integers. Write a program that reads 3 integers from the console
  and prints the largest of them using the method GetMax(). */
 // const gets=this.gets || require('readline-sinc').quetstion;
  const print = this.print||console.log;
  const getMax = (a, b) =>{
      return Math.max(a, b);
  };
  const input =gets().split(' ').map(Number);
  const res=(getMax(getMax(input[0], input[1]), input[2]));
 print(res);
 quit(0);

