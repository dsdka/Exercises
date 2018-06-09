const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
let ind=+gets();
const arr=gets().split(',').map(Number);
let forwardSum=0;
let backwardSum=0;
let comand;
const len=arr.length;
while ((comand=gets())!=='exit') {
    const args=comand.split(' ');
    const stepsCount = +args[0];
    const direction = args[1];
    const stepSize = args[2];

    for (let i=0; i<stepsCount; i+=1) {
    if (direction==='forward') {
        ind += stepSize%len;
        forwardSum+=arr[ind];
    } else {
        ind=len-ind-1;
        ind +=stepSize%len;
        ind = len-ind-1;
        backwardSum+=arr[ind];
    }
}
}
print(`Forward: ${forwardSum}`);
print(`Backwards: ${backwardSum}`);

