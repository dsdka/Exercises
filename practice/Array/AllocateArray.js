/* Write a program that allocates array of N integers, initializes each
 element by its index multiplied by 5 and the prints the obtained array
  on the console. */

  const gets = this.gets || require('readline-sync').question;
  const print = this.print || console.log;
  const line=+gets();

  const arr=[];
  for (let i=0; i<line; i+=1) {
      arr.push(i*5);
  }
 print(arr.join('\n'));
