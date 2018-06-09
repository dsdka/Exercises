const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
'5',
'6',
'4',
'14 27 1 5',
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;

//-------------------------------------------

const readMatrix = (r, c) => {
    const arr = Array.from({ length: r });
    for (let i=r-1, k=1; i>=0; i-=1, k*=2) {
        arr[i] = Array.from({ length: c })
        .fill(false);
        
    }
    return arr;
}



const r=+gets();
const c=+gets();
const n=+gets();
const movies = gets().split(' ').map(Number);
let count=0;
const coef = Math.max(r, c);
let startRow =r-1;
let startCol = 0;
const matrix = readMatrix(r, c);
// for (const move of movies) {
//     const endRow=Math.floor(move/coef);
//     const endCol =move%coef;
//     if (startCol<endCol) {
//         for (let i=startCol; i<=endCol; i+=1) {
//             count +=matrix[startRow][i];
//             matrix[startRow][i]=0;
//         }
//         startCol=endCol;
//     } else {
//         for (let i=startCol; i>=endCol; i-=1) {
//             count +=matrix[startRow][i];
//             matrix[startRow][i]=0;
//         }
//         startCol=endCol;
//     }
//     if (startRow>endRow) {
//         for (let i=startRow; i>=endRow; i-=1) {
//             count+=matrix[i][startCol];
//             matrix[i][startCol]=0;
//         }
//         startRow=endRow;
//     } else {
//         for (let i=startRow; i<endRow; i+=1) {
//             count+=matrix[i][startCol];
//             matrix[i][startCol]=0;
//         }
//         startRow=endRow;
//     }  
    
// }

let k=0;
let d=8;
let b=k<<1;
let g=d>>1;

print(b);
print(g);
k=0011;
let l=0001;
print(k+l);

