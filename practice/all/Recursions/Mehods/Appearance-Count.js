/* Write a method that counts how many times given number appears in a
given array. Write a test program to check if the method is working correctly. */
const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
const HowManyGivenElement = (el, arr)=>{
    let count=0;
    for (const digit of arr) {
        if (digit===el) {
            count+=1;
        } else {
            continue;
        }
    }
    return count;
};
const n=+gets();
const array = gets().split(' ').map(Number);
const elem=+gets();
const res= HowManyGivenElement(elem, array);
print(res);
