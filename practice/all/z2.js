const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
    '7 4',
    '1 5 4 7',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});

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
            node.prev.next=node.next;
        }
        if (node.next) {
            node.next.prev=node.prev;
        }
        node.next=null;
        node.prev=null;
    }
    static attach(node,el) {
       
        node.next=el.next;
        if(el.next) {
        node.next.prev=node;
        }
        
        el.next=node;
        node.prev=el;
    }
}
const [n, m]=gets().split(' ').map(Number);
const swap = gets().split(' ').map(Number);

const arr = [];

for (let i=1; i<=n; i+=1) {
    const node = new Node(i, arr[i-1]);
    arr[i]=node;
}

  let first = arr[1];


 swap.forEach((el) => {
     const move = arr[el];
    
    let after;
    
    if (el%2!==0) {
        after = el*2;
        if (after>n) {
            after=n;
        }
     
    } else {
        after=el/2;
    }
   
    if (move===first) {
        first=move.next;
    }
    if (el!==after) {
    Node.detach(move);
    Node.attach(move, arr[after]);
    }
   
 });


const res = [];
let k=first;

for (let i=0; i<n; i+=1) {

    res[i]=k.value;
    if (k.next===null) {
        break;
    }
    k=k.next;
}
print(res.join(' '));
