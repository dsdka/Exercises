const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
    '53--7----',
    '6--195---',
    '-98----6-',
    '8---6---3',
    '4--8-3--1',
    '7---2---6',
    '-6----28-',
    '---419--5',
    '----8--79',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const sudoku = Array.from({ length: 9 });
for (let i=0; i<9; i+=1) {
    sudoku[i]=gets().split('').map(Number);
}
const nextRow =(row, col) => {
    col+=1;
    if (col> 8) {
       return row+1;
    }
    return row;
};
const nextCol =(col) => {
    col+=1;
    if (col >8) {
        return 0;
    }
    return col;
};
const isNumInRow = (row, num) => {
    for (let i=0; i<9; i+=1) {
        if (sudoku[row][i]===num) {
            return true;
        }
    }
    return false;
};
const isNumInCol = (col, num) => {
    for (let i=0; i<9; i+=1) {
        if (sudoku[i][col]===num) {
            return true;
        }
    }
    return false;
};
const isNumisSquare = (row, col, num) => {
    const startRow = (row / 3 |0)*3;
    const startCol = (col/3 |0)*3;
    for (let i=startRow; i<startRow+3; i+=1) {
        for (let j=startCol; j<startCol+3; j+=1) {
            if (sudoku[i][j]===num) {
                return true;
            }
        }
    }
    return false;
};

const printMattix = () => {
    for (let i=0; i<9; i+=1) {
        print(sudoku[i].join(''));
    }
};
const fullSudoku =( row, col) => {
    if (row===9 && col===0) {
       printMattix();
       return;
    } else if ( isNaN(sudoku[row][col]) || sudoku[row][col]===0 ) {
        for (let i=1; i<=9; i+=1) {
            if (isNumInRow(row, i) ||
                isNumInCol(col, i) ||
            isNumisSquare(row, col, i)) {
                continue;
            }
        sudoku[row][col] = i;
         fullSudoku( nextRow(row, col), nextCol(col));
        sudoku[row][col]=0;
         
     }
    } else {
        
       fullSudoku( nextRow(row, col), nextCol(col));
    }

};


  fullSudoku(0, 0);


