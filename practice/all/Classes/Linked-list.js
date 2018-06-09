class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev=null;
    }
}
class LinkedList {
    constructor() {
        this._first = null;
        this._last = null;
        this._length = 0;
    }

    get length() {
        return this._length;
    }

    get first() {
        return this._first;
    }

    get last() {
        return this._last;
    }
     append(...el) {
        for (const elem of el) {
        const node = new ListNode(elem);
        if (this._first===null) {
            this._first = node;
            this._last = node;
           
        } else {
            // let current = this._first;
            // while (current.next) {
            //     current=current.next;
            // }
            // current.next = node;
            this._last.next=node;
           
        }
        this._last = node;
        this._length+=1;
    }
    return this;
}
}
const list = new LinkedList();
list.append(1, 2, 3).append(4);
console.log(list.data);
console.log('------------------');
list.append(20);
//console.log(list.data);
console.log('------------------');
list.append(50);
console.log(list);
console.log('------------------');
//const res = [];
// for (let i=0; i<list.length; i+=1) {
//     res[i]=list[i].data;
// }
console.log(list._first.data);


