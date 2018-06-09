const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
'6 6',
'92 11 23 42 59 48',
'09 92 23 72 56 14',
'17 63 92 46 85 95',
'34 12 52 69 23 95',
'26 88 78 71 29 9',
'26 34 16 63 39 95',
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const readMatrix = () => {
const [n, m]=gets().split(' ').map(Number);
const matrix = Array.from({ length: n });
for (let i=0; i<m; i+=1) {
    matrix[i]=gets().split(' ').map(Number);
}
return matrix;
        
};

const moveRight = (i, j, matrix, cols) => {
    let currentCount = 0;
    let current = matrix[j][j];
    for (let col =j; col<cols; col+=1) {
        if (matrix[i][col]===current) {
            currentCount+=1;
            if ( currentCount>bestCount) {
                bestCount=currentCount;
            }
        } else {
                current=matrix[i][col];
                currentCount = 1;
        }
    }
};
const moveDown = (i, j, matrix, rows) => {
    for (let row = i; row<rows; row+=1) {

    }
};
const moveRightDiagonalUnder = (i, j, matrix, rows) => {
    let [row, col] = [i, j]; 
    while (row<rows) {
        //

        row+=1;
        col+=1;
    }
};
const moveRightDiagonalUpper = (i, j, matrix, cols) => {
    let [row, col] = [i, j];
    while (col<cols) {
        //

        row+=1;
        col+=1;
    }
}
const moveLeftDiagonalUpper = (i, j, matrix, cols) => {
    let [row, col] = [i, j];
    while (col<cols) {
        //

        row+=1;
        col-=1;
    }
}
const moveLeftDiagonalDown = (i, j, matrix, rows) => {
    let [row, col] = [i, j];
    while (row<rows) {
        //

        row+=1;
        col-=1;
    }
}
const countEqualsElement =(previous, next, curentCount, curentBestCount ) => {
    
}



