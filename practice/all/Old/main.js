// // function solve(args){
// //     let row=+args[0][0],
// //           col=+args[0][2];
// //   //  let arr=[];	
// //     let board=[];  
// //     let out='';
// //       let w={
// //           r:+args[1][0],
// //           c:+args[1][2],
// //           trap:'f'
// //       };
// //       let n={
// //           r:+args[1][4],
// //           c:+args[1][6],
// //           trap:'f'
// //       };
// //       let l={
// //           r:+args[1][8],
// //           c:+args[1][10],
// //           trap:'f'
// //       };
// //       for(let i=0;i<row;i+=1){
// //           board[i]=[];
// //           for(let j=0;j<col;j+=1){
// //               board[i][j]='f';
// //           }
        
// //       }
          
// //       for(let i=2;i<args.length;i+=1){
// //           let input=args[i].split(' ');
// //        //   console.log(input);
// //           if(input.length===2){
          
// //               board[l.r][l.c]='t';
// // //console.log(board);
// //               continue;
// //       }
// //          else{
// //             if(input[1]==='Lsjtujzbo'){
// //               move(input[2],l);
            
// //             }
// //             else if(input[1]==='Wboup'){
// //              isTrap(board,w);
// //              isLib(w,n);
// //               move(input[2],w);
              
// //             }
// //             else if(input[1]==='Nbslbub'){
// //                 isTrap(board,n);
// //                 isLib(w,n);
// //               move(input[2],n);
              
// //             }
// //          }
// //        //  console.log(l);
// //        //  console.log(w);
// //        //  console.log(n);
         
// //          if(end(row,col,l,w,n)===0){
// //              continue;
// //          }
// //          else{
// //              out= end(row,col,l,w,n);
// //              break;
// //          }
        
// //       }
// //       function move(input,ob){
// //           if(ob.trap==='f'){
// //             if(input=='u'&& ob.r>0){
// //               ob.r--;
// //              }
// //             else if(input=='d'&&ob.r<row-1){
// //               ob.r++;
// //             }
// //             else if(input=='l'&&ob.c>0){
// //               ob.c--;
// //             }
// //             else if(input=='r' &&ob.c<col-1) {
              
// //               ob.c++;
              
// //             }
// //           }
// //           return ob;
// //        }
// //        function isTrap(board,ob){
// //            if(board[ob.r][ob.c]==='t'){
// //                ob.trap='t';
// //            }
// //        }
// //        function isLib(ob1,ob2){
// //            if((ob1.r===ob2.r)&&(ob1.c===ob2.c)){
// //             ob1.trap='f';
// //             ob2.trap='f';
// //            }
// //        }
// //        function end(row,col,l,w,n){
// //            let result=0;
// //            if((l.r===row-1 &&l.c===col-1)||
// //            (w.trap==='t'&&n.trap==='t')){
// //                result=`Lsjtujzbo is saved! ${w.r} ${w.c} ${n.r} ${n.c}`;
// //            }
// //            else if(
// //                     ((l.r-1===w.r)&&(l.c-1===w.c||l.c===w.c||l.c+1===w.c))||
// //                     ((l.r+1===w.r)&&(l.c-1===w.c||l.c===w.c||l.c+1===w.c))||
// //                     ((l.r===w.r)&&(l.c-1===w.c||l.c===w.c||l.c+1===w.c))||
// //                     ((l.r-1===n.r)&&(l.c-1===n.c||l.c===n.c||l.c+1===n.c))||
// //                     ((l.r+1===n.r)&&(l.c-1===n.c||l.c===n.c||l.c+1===w.c))||
// //                     ((l.r===w.r)&&(l.c-1===w.c||l.c===w.c||l.c+1===w.c)))
// //                     {
// //                         result=`The trolls caught Lsjtujzbo at ${l.r} ${l.c}`;
// //            }
// //            return result;
// //        }
// //        console.log(out);
// //   }



// const text = 'Given an integer, convert it integer to an roman numeral Given an.';

// let word = text.split(/[\s , .]/);
// let words=[];
// for(index of word){
//     // if(words.includes(words[index])){
//     //    
//     // }
//     if(words[index]===undefined||[]){
//         words.push(words[index]);
//         words[index]=0;
//     }
//     words[index]+=1;
    
// }
// console.log(words);
function solve(args) {
    var number = +args[0];

    for(var i = number; i >= 2; i -= 1) {
        var prime = true;
        for(var j = 2; j <= (Math.sqrt(i) | 0); j += 1) {
            if(i % j === 0) {
                prime = false;
            }
        }
        if(prime) {
            console.log(i);
            break;
        }

        
    }
}
solve([126]);