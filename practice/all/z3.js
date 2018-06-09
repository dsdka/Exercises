const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
    '12 4',
    '4 2 3 5',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});

// const fn = (balls, arr, used, p) => {
//     for (let i=0; i<n; i+=1) {
//        if (used.has(arr[i])) {
//             continue;
//        }
//         if (balls%arr[i]!==0) {
//             used.add(arr[i]);
//             continue;
//         }
//         used.add(arr[i]);
//         count+=t;
//         t=p/arr[i];
//         let newBalls = arr[i];
//         fn(newBalls, arr, used, p);
//     }
//     if(maxCount<count) {
//         maxCount=count;
        
//     }
//     count = 0;
//     //used.clear();
//     return maxCount;
// }

const fn=(balls, arr, p , res) => {
    
    for (let i=0; i<arr.length; i+=1) {
        if (p===balls) {
            continue;
        }
        if (balls%arr[i]!==0) {
            continue;
        }
            print(balls/arr[i]);
         res.push(balls/arr[i]);
        //print(res);
        fn(arr[i], arr, p, res);
    }
    
    return res;
}
const [balls, n] = gets().split(' ').map(Number);
const sizeBags = gets().split(' ').map(Number);

let count = 0;
let maxCount = 0;
let result = 0;
//let t=1;
let p=balls;
const res = [];
//let used = new Set();
sizeBags.sort((a, b)=>b-a);
for (let i=0; i<n; i+=1) {
    
    let c = fn(balls, sizeBags, p, res);
    print(c);
    let arr = [...c];
   
    arr.pop();
    let sum = arr.reduce((a, b) => a + b, 0);
  
    if (maxCount<sum+1) {
        maxCount=sum+1;
    }
// maxCount=fn(balls, sizeBags, used, p);
// if(result<maxCount) {
//     result=maxCount;
//     break;
// }
}
// if (p===sizeBags[0]) {
//     result-=1;
// }
if (p===1 || p===0) {
    result=0;
}
 print(maxCount);
