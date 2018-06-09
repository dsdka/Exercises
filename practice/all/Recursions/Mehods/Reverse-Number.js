/* Write a method that reverses the digits of a given decimal number. */
const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
const ReverseNumber = (number) => {
    let res='';
    const l=number.length;
    for (let i=l-1; i>=0; i-=1 ) {
        res+=number[i];
    }
    return res;
};
const input = gets();
const result=ReverseNumber(input);

print(result);
