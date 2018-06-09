const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
    '3 4',
    '0 1 1 1',
    '1 1 0 0',
    '1 1 0 1',
    '1 0 1 1',
    '1 0 0 0',
    '1 1 1 1',
    'Shoot 2 3',
    'Shoot 1 1',
    'Shoot 2 1',
    'Shoot 0 0',
    'Shoot 1 1',
    'Shoot 1 1',
    'Shoot 2 1',
    'Shoot 2 3',
    'END',
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const [r, c] = gets().split(' ').map(Number);
const pb1 = Array.from({ length: r });
for (let i=0; i<r; i+=1) {
    pb1[i]=gets().split(' ').map(Number);
}
const pb2 = Array.from({ length: r });
for (let i=r-1; i>=0; i-=1) {
    pb2[i]=gets().split(' ').map(Number).reverse();
}
let k=1;
const shoot = (arr, row, col) => {
    if (arr[row][col]===1) {
        arr[row][col]='x';
        print('Booom');
    } else if (arr[row][col]===0) {
        arr[row][col] = 'x';
        print('Missed');
    } else {
        print('You already shot there!');
    }
}
while (true) {
    const input = gets().split(' ');
    if (input[0]==='END') {
        break;
    } else if (k===1) {
        k=2;
        shoot(pb2,+input[1], +input[2]);
        continue;
        } else if (k===2) {
            k=1;
            shoot(pb1, +input[1], +input[2]);
            continue;
        }
    }
    let count1=0;
    let count2=0;
for (let i=0; i<r; i+=1) {
    for (let j=0; j<c; j+=1) {
        if (pb1[i][j]===1) {
            count1+=1;
        }
        if (pb2[i][j]===1) {
            count2+=1;
        }
    }
}
print(`${count1}:${count2}`);
//quit(0);
