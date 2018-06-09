const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
'8',
'5 4 7',
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;
//------------------------------------------

 class Node {
    constructor(value, prev) {
        this.value=value;
        this.next = null;
        this.prev=prev || null;
    
    if (prev) {
        prev.next = this;
    }
  }
}
const n=+gets();
const swappingNumber = gets().split(' ').map(Number);
const arr = Array.from({ length: n+1 });

for (let i=1; i<=n; i+=1) {
    const node = new Node(i, arr[i-1]);
    arr[i] = node;
}
// 
print(arr);