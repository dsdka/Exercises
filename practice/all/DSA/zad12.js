const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
    '6',
    '7 1 1 2 3 1',
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n=+gets();
let arr = gets().split(' ').map(Number);
let count = -1;
let k=true;
while(k) {
    k=false;
    for (let i=n-1; i>0; i-=1) {
        let j=1;
        while (arr[i-j]===0) {
            j+=1;
        }
        if (arr[i]>arr[i-j]) {
            k=true;
            arr[i]=0;
        }
    }
    count+=1;
}
print(count);
//quit(0);