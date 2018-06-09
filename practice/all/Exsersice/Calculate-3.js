/* In combinatorics, the number of ways to choose N different members
 out of a group of N different elements (also known as the number of
     combinations) is calculated by the following formula: formula For example,
      there are 2598960 ways to withdraw 5 cards out of a standard deck
       of 52 cards. Your task is to write a program that calculates
        N! / (K! * (N - K)!) for given N and K.

_Try to use only two loops._ */
const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
const n=+gets();
const k=+gets();
let fact1=Math.bignumber(1);
let fact2=Math.bignumber(1);
const m=n-k;
for (let i=k+1; i<=n; i+=1) {
    fact1*=i;
}
for (let i=1; i<=m; i+=1) {
    fact2*=i;
}
const res=Math.bignumber(fact1/fact2);
print(res);
quit(0);