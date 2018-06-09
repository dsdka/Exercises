function solve(args){
 let input=[];
 let i=0;
 let start=0;
 while(true){
    
    let ind=args.indexOf('</>',i);
    if(ind<0){
        break;
    }
    let arr=args.slice(start,ind);
    input.push(arr);
    start=ind+1;
    i=ind+1;
 }
 input.forEach(function(coment){
    if(coment[0][1]!=='@'){
        for(let i=1;i<coment.length;i+=1){
            if(coment[i].indexOf('=')>0){
                
            }
        }
    }
 });
 
}

solve([
    '<Fruit>',
    '  Apple;',
    '  Banana;',
    '  Pineapple;',
    '</>',
    '<Vegetable>',
    '  Cucumber = 1;',
    '  Cabage;',
    '</>'
]);