
function solve(args){
    const inputRowsCols=args[0].split(' ').map(Number);
    const rows=inputRowsCols[0];
    const cols=inputRowsCols[1];
    const coordinate=args[1].split(/[';'' ']/).map(Number);
    
    let board=[];
    for(let i=0;i<rows;i+=1){
        board[i]=[];
        for(let j=0;j<cols;j+=1){
            board[i][j]=false;
        }
    }
   
    let tw={
        row:coordinate[0],
        col:coordinate[1],
        traped:false
    }
    let tn={
        row:coordinate[2],
        col:coordinate[3],
        traped:false
    }
    let p={
        row:coordinate[4],
        col:coordinate[5],
        traped:false
    }
    args.shift();
    args.shift();
    args.forEach(function(command) {
        if(command==='lay trap'){
            board[p.row][p.col]=true;
        }
        else{
            let sp=command.split(' ');
            let unitToMove;
            if(sp[1][0]==='L'){
                unitToMove=p;
            }
           else if(sp[1][0]==='W'){
                unitToMove=tw;
            }
            else if(sp[1][0]==='N'){
                unitToMove=tn;
            }
            else{

            }
            if(unitToMove.traped){
                return;
            }
            
            if(sp[2]==='u' && unitToMove.row>0){
                unitToMove.row-=1;
            }
            else if(sp[2]==='d' && unitToMove.row<rows-1){
                unitToMove.row+=1;
            }
            else if(sp[2]==='l' && unitToMove.col>0){
                unitToMove.col-=1;
            }
            else if(sp[2]==='r' && unitToMove.col<cols-1){
                unitToMove.col+=1;
            }

            if(tw.row===tn.row && tw.col===tn.col){
                tw.traped=false;
                tn.traped=false;
                board[tn.row][tn.col]=false;
            }
        
         if(sp[1][0]!=='L'&& board[unitToMove.row][unitToMove.col]===true){
            unitToMove.traped=true;
         }
            if(p.row===rows-1 && p.col===cols-1){
                console.log(`Lsjtujzbo is saved! ${tw.row} ${tw.col} ${tn.row} ${tn.col}`);
            }
            else if(tw.traped && tn.traped ){
                console.log(`Lsjtujzbo is saved! ${tw.row} ${tw.col} ${tn.row} ${tn.col}`);
            }
            else if(Math.abs(p.row-tw.row)<2 && Math.abs(p.col-tw.col)<2){
                console.log(`The trolls caught Lsjtujzbo at ${p.row} ${p.col}`);
            }
            else if(Math.abs(p.row-tn.row)<2 && Math.abs(p.col-tn.col)<2){
                console.log(`The trolls caught Lsjtujzbo at ${p.row} ${p.col}`);
            }
        }
    });
}
solve([
    '5 5',
    '1 1;0 1;2 3',
    'mv Lsjtujzbo d',
    'lay trap',
    'mv Lsjtujzbo d',
    'mv Wboup r',
    'mv Wboup r',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Wboup d',
    'mv Wboup d'
]);