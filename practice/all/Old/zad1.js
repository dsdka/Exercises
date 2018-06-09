function solve(args){
  //  let input=args.toString();
  //  let arr=input.split('');
    //console.log(input);
    let arr=args[0];
    let sum=10;
    while(sum>=9){
        arr=sumr(arr).toString();
    }
        sum=0;
        function sumr(arr){function solve(args){
            //  let input=args.toString();
            //  let arr=input.split('');
              //console.log(input);
              let arr=args[0]
              let sum=10;
              while(sum>=9){
                  sum=0;
                  for(let i=0;l=arr.length;;i+=1){
                      if(arr[i]==='.'|| arr[i]==='-'){
                          continue;
                      }
                      else{
                          sum+=+arr[i];
                      }
                  }
                  arr=sum.toString().split('');
                  
              }
              console.log(sum);
              
              }
            let sum=0;
        for(let i=0,l=arr.length; i<l;i+=1){
            if(arr[i]==='.'|| arr[i]==='-'){
                continue;
            }
            else{
                sum+=+arr[i];
            }
        }
        return sum;
    }
        
    
    console.log(sum);
    
    }
solve(['-102000034000567.00000800000900']);