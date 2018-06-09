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
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

class Node {
    constructor(value, prev) {
        this.value=value;
        this.prev = prev || null;
        this.next = null;

        if (prev) {
            prev.next = this;
        }
    }
    static detach(node) {
        if (node.prev) {
            node.prev.next=null;
        }
        if (node.next) {
            node.next.prev=null;
        }
        node.next=null;
        node.prev=null;
    }
    static attach(left, right) {
        if (left===right) {
            return;
        }
        left.next = right;
        right.prev = left;
    }
}
const n=+gets();
const swap = gets().split(' ').map(Number);
const arr = [];

for (let i=1; i<=n; i+=1) {
    const node = new Node(i, arr[i-1]);
    arr[i]=node;
}
 let first = arr[1];
 let last = arr[n];

 swap.forEach((el) => {
     const middle = arr[el];
     const newFirst =middle.next;
     const newLast =middle.prev;

     Node.detach(middle);
     Node.attach(middle, first);
     Node.attach(last, middle);

     first=newFirst||middle;
     last = newLast||middle;
 });

const res = [];
let k=first;
for (let i=1; i<=n; i+=1) {

    res[i]=k.value;
    k=k.next;
}
print(res.join(' '));

// let newFirst;
// let newLast;

// for (const mid of swap) {
//     if (arr[mid]===first) {
//      (arr[mid].next).prev=null;
//      arr[mid].prev=last;
//      arr[mid].next=null;
//      last = arr[mid];
//     } else if (arr[mid]===last) {
//         last = arr[mid].prev;
//         arr[mid].prev=null;
//         arr[mid].next=first;
//         first.prev=arr[mid];
//         first=arr[mid];
//     } else {
//     (arr[mid].next).prev=null;
//     (arr[mid].prev).next = null;
//     newFirst = arr[mid].next;
//     newLast = arr[mid].prev;
//     first.prev=arr[mid];
//     last.next = arr[mid];
//     arr[mid].next=first;
//     arr[mid].prev = last;
//     first=newFirst;
//     last = newLast;
//     }
// }
// const res = [];
// let k=first;
// for (let i=1; i<=n; i+=1) {

//     res[i]=k.value;
//     k=k.next;
// }
// print(res.join(' '));


