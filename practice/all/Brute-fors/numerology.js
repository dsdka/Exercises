const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
    '18790314',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});

const arr = gets().split('').map(Number);
const res = Array.from({length:10}).fill(0);

const operat = (a, b) => {
    return (a + b) * (a ^ b) % 10;
}


    
    const fnc = (arr) => {
      // let  k=[...arr];
       if (arr.length===1) {
        //print(k[0]);
        res[arr[0]]+=1;
       // print(res);
        return;
    }
        for (let i=0; i<arr.length-1; i+=1) {
        
        let a=arr[i];
        let b = arr[i+1];
        let c = operat(a, b);
        // print(c);
       const k=[...arr];
        k.splice(i, 2, c);
        fnc(k);
    }
}
fnc(arr);
print(res.join(' ').trim());
//qiut(0);