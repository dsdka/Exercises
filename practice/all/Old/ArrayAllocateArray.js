let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;

console.log(gets);
// gets(5);

const number = +gets();
console.log('-------');

const arr = [];
for (let i = 0; i < number; i += 1) {
    arr.push(i * 5);
    print(arr[i]);
}
