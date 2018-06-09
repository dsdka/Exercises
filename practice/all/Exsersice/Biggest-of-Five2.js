/* Write a program that finds the biggest of 5 numbers that are read
 from the console, using only 5 if statements.*/
 const gets=this.gets || require('readline-sinc').quetstion;
 const print = this.print||console.log;
 const getMax = (a, b) =>{
    return Math.max(a, b);
};
const n=+gets();
let res=n;
for (let i=1; i<5; i+=1) {
    res=getMax(res, +gets());
}
print(res);
quit(0);
