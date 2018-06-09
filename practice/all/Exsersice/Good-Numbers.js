const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
'42 142',
//'5',
//'3',
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;

//--------------------------------------------

const [a, b] = gets().split(' ').map(Number);
let count=0;
let el;
let pr = false;
for (let i=a; i<=b; i+=1) {
    let ch=i;
    while (ch) {
        el=ch%10;
        ch=Math.floor(ch/10);
        if (el === 0) {
            continue;
        } else {
            if (i%el ===0) {
                pr=true;
            } else {
                pr=false;
                break;
            }
        }        
    }
    if (pr) {
        count+=1;
    }
    pr=false;
}
print(count);

