/* We are given an array of integers and a number S. Write a program
 to find if there exists a subset of the elements of the array that
  has a sum S.*/
  const gets = this.gets || require('readline-sync').question;
  const print = this.print || console.log;

const s =+gets();
const arr=gets().split(' ').map(Number);

let k=0;
for (const number of arr) {
    k+=number;
}
const sums=Array.from({ lenhth: k+1 })
.fill(false);
sums[0]=true;
for (const el of arr) {
    for (let i=sums.length-1; i>=0; i-=1) {
        if (sums[i]) {
            const sum =i+el;
            sums[sum]= true;
        }
    }
}
if (sums[s]) {
    print('yes');
} else {
    print ('no');
}
quit(0);
