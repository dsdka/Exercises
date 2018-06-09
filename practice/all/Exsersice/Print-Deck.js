const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
const n=gets();
const arr = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const ind=arr.indexOf(n);
let res = [];
for (let i=0; i<=ind; i+=1) { 
    res[i]= arr[i]+' of spades, '+arr[i]+' of clubs, '+arr[i]+' of hearts, '+arr[i]+' of diamonds';
}
print(res.join('\n'));
//quit(0);
