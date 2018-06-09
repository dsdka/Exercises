const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
    '6 7',
    '5',
    'UR 5',
    'RD 2',
    'DL 3',
    'LU 6',
    'DR 5',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});

const [n, m] = gets().split(' ').map(Number);
let l = +gets();
const board = [];
for (let i=n-1; i>=0; i-=1) {
     board[i] =[];
    let k=(n-i-1)*3;
    for (let j=0; j<m; j+=1) {
        board[i][j]=k;
        k=k+3;
    }
}

let sum = 0;
let row=n-1;
col=0;

for (let i=0; i<l; i+=1) {
    const [d, c] = gets().split(' ');
    const q=+c;
    let dr;
    let dc;
    if (d==='UR' || d==='RU') {
        dr=-1;
        dc = 1;
    } else if (d==='DR' || d==='RD') {
        dr = 1;
        dc = 1;
    } else if (d==='DL' || d==='LD') {
        dr = 1;
        dc = -1;
    } else if (d==='UL' || d==='LU') {
        dr = -1;
        dc = -1;
    }
    let p = 1;
    while (p<=q ) {
        if( row===n ) {
            row=n-1;
            col-=dc;
            break;
        } else if(row<0) {
            row = 0;
            col-=dc;
            break;
        } else if (col===m) {
            col=m-1;
            row-=dr;
            break;
        } else if (col<0) {
            col=0;
            row-=dr;
            break;
        }
        sum+=board[row][col];
        board[row][col]=0;
        if (p<q) {
        row+=dr;
        col+=dc;
        }
        p+=1;
        
}
}
print(sum);