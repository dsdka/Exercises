function solve(args){
const n=+args[0];
const product=args.slice(1,n+1);
let arrProd=[];
let result=0;
let sum=0;
let listProd=args.slice(n+2);

product.forEach(function(element) {
    let line=element.split(/\s/g);
    
    arrProd.push({
           price:+line.pop(),
           name: line.join(' ')
    })

    
});
listProd.forEach(function(element){
    let line=element.split(',');
    let pr;
    let i;
    line.forEach(function(el){
       let arr=el.trim().split(/\s/);
        if(!isNaN(arr[0])){
            i=+arr[0];
            arr.shift();
        }
        else{
            i=1;
        }
       let l=arr.join(' ');
       for(let j=0;j<arrProd.length;j+=1) {
        if(l===arrProd[j].name){
            sum=i*arrProd[j].price;
            break;
        }
       }
       result+=sum;
       sum=0;
    });
    console.log(result.toFixed(2));
    result=0;
});


}
const args = [
	"5",
	"milk 1.2",
	"orange juice 2.9",
	"icecream 2",
	"cake 5.1",
	"beer 1.2",
	"5",
	"2 beer, 3 orange juice",
	"milk, cake",
	"icecream, 2 cake",
	"icecream, icecream, 3 icecream",
	"5 orange juice, 3 orange juice, orange juice, orange juice"
];
solve(args);
