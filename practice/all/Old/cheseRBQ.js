function solve(args){
let rows=+args[0];
let cols=+args[1];
let board=[];
for(let i=0;i<rows;i+=1){
    board[i]=args[i+2].split('');
}
let input=args.slice(3+rows);
input.forEach(function(line){
    let start={
        row:reverseNumber(rows,line[1]),
        col:reverseChar(line[0])
    };
    let end={
        row:reverseNumber(rows,line[4]),
        col:reverseChar(line[3])
    };
    if(start.row===end.row && start.col===end.col){
        console.log('no');
    }
    else{
     if(board[start.row][start.col]==='R'){
        if(moveR(board,start,end)){
            console.log('yes');

        }
        else{
            console.log('no');
        }
    }
    else if(board[start.row][start.col]==='B'){
        if(moveB(board,start,end)){
            console.log('yes');
        }
        else{
            console.log('no');
        }
    }
    else if(board[start.row][start.col]==='Q'){
        if(moveR(board,start,end)){
            console.log('yes');

        }
        else  if(moveB(board,start,end)){
            console.log('yes');
        }
        else{
            console.log('no');
        }
    }
    else {
        console.log('no');
    }
}

});
function moveR(board,start,end){
    if(start.row!==end.row && start.col!==end.col){
        return false;
    }
    let deltaR=(start.row<end.row)?1:-1;
    let deltaC=(start.col<end.col)?1:-1;
    if(start.row===end.row){
        while(start.col!==end.col){
            start.col+=deltaC;
            if(board[start.row][start.col]!=='-'){
                return false;
            }
            
        }
        return true;
    }
    else if(start.col===end.col){
        
        while(start.row!==end.row){
            start.row+=deltaR;
            if(board[start.row][start.col]!=='-'){
                return false;
            }
           
            
        }
        return true;

    }
}
function moveB(board,start,end){
    if((start.row===end.row || start.col===end.col )&&
    (Math.abs(start.row-end.row)!==Math.abs(start.col-end.col))){
        return false;
    }
    let deltaR=(start.row<end.row)?1:-1;
    let deltaC=(start.col<end.col)?1:-1;
    while(start.row!==end.row){
        start.row+=deltaR;
        start.col+=deltaC;
        if(board[start.row][start.col]!=='-'){
            return false;
        }
      
    }
    return true;

}

function reverseNumber(rows,ind){
    let result=Math.abs(ind-rows);
    return result;
}
function reverseChar(ch){
    let result=ch.charCodeAt(0)-97;
    return result;
}
}

solve(['3',
    '4',
    
    '--R-',
    'B--B',
    'Q--Q',
    '12',
    'd1 b3',
    'a1 a3',
    'c3 b2',
    'a1 c1',
    'a1 b2',
    'a1 c3',
    'a2 b3',
    'd2 c1',
    'b1 b2',
    'c3 b1',
    'a2 a3',
    'd1 d3',
   ]);