

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
'7',
'3',
'4',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});

const n= +gets();
const m= +gets();
let row = +gets();
let col = +gets();
const board = [];

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    add(value) {
        const node = {
            value: value,
            next: null,
            };
        if (this.length === 0) {
            this.head = node;
        } else {
            this.tail.next =node;
        }
        this.tail = node;
        this.length += 1;
        return this;
    }
    del() {
        if (this.length === 0) {
            return null;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.length -= 1;
        return value;
    }
    len() {
        return this.length;
    }
};




for (let i=0; i<n; i+=1) {
    board[i]=[];
    for (let j = 0; j<m; j+=1) {
        board[i][j]=0;
    }
}

let rows = new Queue;
let cols = new Queue;
let nums = new Queue;
rows.add(row);
cols.add(col);
nums.add(1);
board[row][col] = 1;
//  nums.enqueue(2);
// print(board);
//  console.log(nums.dequeue());
// print(rows.isLength());
const f = (r, c, nb, rows, cols, nums, board) => {
    if (board[r][c]===0) {
        rows.add(r);
        cols.add(c);
        nums.add(nb+1);
        board[r][c]=nb+1;
    }
}


while(rows.len()!==0) {
    // print(rows.peek());
    let r = rows.del();
    let c= cols.del();
    let nb = nums.del();
    //console.log(nb);
   

     if(r-1>=0) {
         if(c+2<m) {
         f(r-1, c+2, nb, rows, cols, nums, board);
        }
        if(c-2>=0) {
            f(r-1, c-2, nb, rows, cols, nums, board);
        }
    }
     if(r+1<n) {
         if (c+2<m) {
         f(r+1, c+2, nb, rows, cols, nums, board);
     }
        if(c-2>=0) {
            f(r+1, c-2, nb, rows, cols, nums, board);
        }
    }


     if(r-2>=0) {
        if(c+1<m) {
        f(r-2, c+1, nb, rows, cols, nums, board);
        }
        if(c-1>=0) {
        f(r-2, c-1, nb, rows, cols, nums, board);
        }
    }
    
    if(r+2<n){
        if(c+1<m) {
        f(r+2, c+1, nb, rows, cols, nums, board);
        }
        if(c-1>=0) {
       f(r+2, c-1, nb, rows, cols, nums, board);
        }
    }
};

let k=m/2 | 0;
// print(k);
for (let i=0; i<n; i+=1) {
    print(board[i][k]);
}
// print(board);
