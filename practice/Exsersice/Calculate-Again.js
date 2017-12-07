/* Write a program that calculates N! / K! for given N and K.

Use only one loop. */
const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
const n=+gets();
const k=+gets();

let fact=1;
for (let i=k+1; i<=n; i+=1) {
    fact*=i;
}
print(fact);
quit(0);