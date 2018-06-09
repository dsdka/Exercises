
/* global Set */
const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
    '5 6',
    '1 3 2 2 2 4',
    '3 3 3 2 4 4',
    '4 3 1 2 3 3',
    '4 3 1 3 3 1',
    '4 3 3 3 1 1',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    add(value) {
        if (this.length === 0) {
            this.head = value;
        } else {
            this.tail.next = value;
        }
        this.tail = value;
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
    count() {
        return this.length;
    }
}


const search = (matrix, used, queue, row, col, counter) => {
    

    while (queue.count()) {
        const el = queue.del();
        
         row=el.row;
         col = el.col;
        counter+=1;
        used[row][col]=true;
        if (row+1<n) {
        if (el.val===matrix[row+1][col] && !used[row+1][col]) {
            queue.add({
                value: { val: matrix[row+1][col],
                row: row+1,
                col: col,
            },
                next: null,
            });
            used[row+1][col] = true;
        }
     }
        if (row-1 >=0) {
        if (el.val===matrix[row-1][col] && !used[row-1][col]) {
            queue.add({
                value: { val: matrix[row-1][col],
                row: row-1,
                col: col,
            },
                next: null,
            });
             used[row-1][col]=true;
        }
    }
        if (col+1<m) {
        if (el.val===matrix[row][col+1] && !used[row][col+1]) {
            queue.add({
                value: { val: matrix[row][col+1],
                row: row,
                col: col+1,
            },
                next: null,
            });
             used[row][col+1]=true;
        }
    }
        if (col-1>=0) {
        if (el.val===matrix[row][col-1] && !used[row][col-1]) {
            queue.add({
                value: { val: matrix[row][col-1],
                row: row,
                col: col-1,
            },
                next: null,
            });
             used[row][col-1]=true;
        }                  
    }
}
    return counter;
};
const [n, m] =gets().split(' ').map(Number);
const matrix=[];
for (let i=0; i<n; i+=1) {
    matrix[i]=gets().split(' ').map(Number);
}
let maxCounter = 0;

for (let i=0; i<n; i+=1) {
    for (let j=0; j<m; j+=1) {
        const set = new Set();
        if (set.has(matrix[i][j])) {
            continue;
        } else {
            set.add(matrix[i][j]);
        const queue = new Queue;
        queue.add({
            value: { val: matrix[i][j],
            row: i,
            col: j,
        },
            next: null,
        });
        const used = [];
        // for (let k=0; k<n; k+=1) {
        //     used[k] = [];
        // }
        let counter = 0;
        counter=search(matrix, used, queue, i, j, counter);
        if (maxCounter<counter) {
            maxCounter=counter;
        }
    }
}
}
print(maxCounter);


