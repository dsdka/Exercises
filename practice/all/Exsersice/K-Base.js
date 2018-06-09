const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
'2',
'10'
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const n=+gets();
const k=+gets();
const el=k-n+1;
let fact=1;
for (let i=k; i>=el; i-=1) {
    fact=fact*i;
}
print(fact);
//quit(0);