/* Classical play cards use the following signs to designate
 the card face: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K and A. Write a program
  that enters a string and prints "yes CONTENT_OF_STRING" if it is a valid card
   sign or "no CONTENT_OF_STRING" otherwise.*/

   
const n=gets();
const arr=['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let res = arr.indexOf(n);
if (res<=0) {
    print(`no ${n}`);
} else {
    print(`yes ${n}`);
}
quit(0);

