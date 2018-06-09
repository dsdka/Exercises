const matrix=[
    [1,2,3,4,5],
    [2,1,4,5,6],
    [3,4,1,6,7],
    [4,5,6,1,8],
    [5,6,7,8,1],
];
let sum=0;
// for(let i=1;i<=matrix.length-1;i+=1){
//     for(let j=0;j<i;j+=1){
//         sum+=matrix[i][j];
//     }
// }
for(let i=0;i<matrix.length-1;i+=1){
    for(let j=i+1;j<matrix.length;j+=1){
        sum+=matrix[i][j];
    }
}
console.log(sum);
