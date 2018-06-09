function solve(args){
const rows=+args[0];
let inputB=args.slice(2,2+rows);
let board=[];
for(let i=0;i<inputB.length;i+=1){
    board[i]=inputB[i].split('');
}

}
solve(['3',
    '4',
    '--K-',
    'K--K',
    'Q--Q',
    '12',
    'd1 b3',
    'a1 a3',
    'c3 b2',
    'a1 c1',
    'a1 b2',
    'a1 c3',
    'a2 c1',
    'd2 b1',
    'b1 b2',
    'c3 a3',
    'a2 a3',
    'd1 d3']);