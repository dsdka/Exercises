const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
    '1',
    '6',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const digitOfBinary=(n, div, res) => {
    while (n) {
        div=n%2;
        res.push(div);
        n=Math.floor(n/2);
    }
    return res;
};
const countNumber = (k, counter, arr)=> {
    for (let i=0; i<arr.length; i+=1) {
        if (arr[i]===k) {
            counter+=1;
        }
    }
    return counter;
};

const b=+gets();
const n=+gets();

for (let i=0; i<n; i+=1) {
    const result=[];
    let el=+gets();
    print(countNumber(b, 0, digitOfBinary(el, 0, result)));
   // print(result.join(''));
}
quit(0);


