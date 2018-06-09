/* global Map */
const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
    "5",
    "milk 1.2",
    "orange juice 2.9",
    "icecream 2",
    "cake 5.1",
    "beer 1.2",
    "5",
    "2 beer, 3 orange juice",
    "milk, cake",
    "icecream, 2 cake",
    "icecream, icecream, 3 icecream",
    "5 orange juice, 3 orange juice, orange juice, orange juice",
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n=+gets();
const map = new Map();
for (let i=0; i<n; i+=1) {
    const input = gets().split(' ');
    let name='';
    for (let j=0; j<input.length-1; j+=1) {
        name=name +input[j];
        
    }
    //name=name.trim();
    map.set(name, input[input.length-1]);
}
const m=+gets();
for (let i=0; i<m; i+=1) {
    const arr = gets().split(',');
    let sum=0;
    for (let j=0; j<arr.length; j+=1) {
        let tr = arr[j].trim();
        let  sp = tr.split(' ');
        let br;
        let p;
        if (isNaN(sp[0])) {
            br = 1;
            p=0;
        } else {
            br=+sp[0];
            p=1;
        }
        let nam='';
        for (p; p<sp.length; p+=1) {
            nam+=sp[p];
        }
        let k=map.get(nam);
        sum+=br*(+k);
    }
    print(sum.toFixed(2));
}