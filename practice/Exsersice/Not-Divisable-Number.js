/* Write a program that reads from the console a positive integer N
 and prints all the numbers from 1 to N not divisible by 3 or 7,
  on a single line, separated by a space.*/
  const gets = this.gets || require('readline-sync').question;
  const print = this.print || console.log;
  const n=+gets();
  const arr=[];
  for(let i=1; i<=n; i+=1) {
    if( i%3===0 || i%7===0) {
        continue;
    } else {
        arr.push(i);
    }
  }
  print(arr.join(' '));
  //quit(0);