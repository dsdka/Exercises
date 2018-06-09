/* You are given a number N.

You can perform 3 operations with N:

Didive it by 2
Only available if N is even
Increment by 1
Decrement by 1
You task is to calculate the minumum count of operations, the can make N
equal to 1 */
//const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
const divTwoAdd = (p) => {
    let c =1;
    if (p===1) {
        return c+=1;
    }
    if (p%2!==0) {
        p+=1;
        c+=1;
    } else {
        c+=1;
    }
    divTwoAdd(p/2, c);
};
const divTwoMin = (k, c) => {
    //let count = 0;
    if (k===1) {
        return c+=1;
    }
    if (k%2!==0) {
        k-=1;
        c+=1;
    }
    divTwoMin(k/2, c);
};

const n=15;//+gets();
let minCount=10000;
let cou=1;
// let i=-1;
/* while (n!==1) {
    i+=1;
    count=i;
    count+=divTwoAdd(n);
    if (minCount>count) {
        minCount=count;
    }
    count=i;
    count+=divTwoMin(n);
    if (minCount>count) {
        minCount=count;
    }

    n=Math.floor(n/2);


} */
 let count=divTwoAdd(n);
//  if ( minCount>count) {
//      minCount=count;
//  }
//  count = divTwoMin(n, cou);
//  if (minCount>count) {
//      minCount=count;
//  }
print(count);
// quit(0);


