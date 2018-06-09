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
    // '1 2 3 4 5 6 7',
    // '1 2',
    // '2 1',
    // '2 7',
    // '7 6',
    'Emo Misho Ivanka Ginka Vancho Stancho Sashka',
    'Emo Misho',
    'Misho Emo',
    'Misho Sashka',
    'Sashka Stancho',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});

class Node {
    constructor(value, prev) {
        this.value = value;
        this.prev = prev || null;
        this.next = null;

        if (prev) {
            prev.next = this;
        }
    }
    static detach(node) {
        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }
        node.next = null;
        node.prev = null;
    }
    static attach(node, el) {

        // node.next=el.next;
        // if(el.next) {
        // node.next.prev=node;
        // }
        node.next = el;
        if (el.prev) {
            el.prev.next = node;
            node.prev = el.prev;
        }

        el.prev = node;

        // el.next=node;
        // node.prev=el;

    }
}

const [n, k] = gets().split(' ').map(Number);
const arrSt = gets().split(' ');
const map = new Map();

for (i = 0; i < n; i += 1) {
    map.set(arrSt[i], i + 1);
}
const arr = [];
for (let i = 1; i <= n; i += 1) {
    const node = new Node(arrSt[i-1], arr[i - 1]);
    arr[i] = node;
}
let first = arr[1];
// console.log(arr[1]);
//  console.log(arr[6].value);
// console.log(map);

for (let i = 0; i < k; i += 1) {
    // console.log(arr);
    //console.log(first);
    const input = gets().split(' ');
    const f = map.get(input[0]);
    const s = map.get(input[1]);
    // if(f+1===s || f===s) {
    //     continue;
    // }
    //    console.log(f);
    //    console.log(s);
    const move = arr[f];
    const after = arr[s];
    // console.log(move);
    // console.log('-------------------');
    // console.log(after);
    if(move===after.prev) {
        continue;
    }
    if(move===first) {
        first=move.next;
    }else if (after === first) {
        first = move;
    }

    //     // console.log(move);
    //     // console.log(after);
    Node.detach(move);
    Node.attach(move, after);
    // if (!move.prev) {
    //     first = move;
    // }
}
// const mapKey = [...map.keys()];
//  console.log(mapKey[4]);

const res = [];
let d = first;

//console.log(d.prev);
for (let i = 0; i < n; i += 1) {
    res[i] = d.value;
    if (d.next === null) {
        break;
    }
    d = d.next;
    //  console.log(res);
    // console.log(res[0]);
}
print(res.join(' '));