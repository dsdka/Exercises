const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
'1',
'5',
'3',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const randDigits = (max, min) => {
return Math.floor(Math.random()*(max-min))+min;
};

const arr = [];
for (let i=0; i<50; i+=1) {
    arr.push({
        value: i+1,
        visit: false,
    });
}
print('-----------------------------');
const input=Array.from({ length: 8 });
for (let i=0; i<16; i+=2) {

    let k=randDigits(0, 49);

    while (arr[k].visit) {
        k=randDigits(0, 49);

    }
    input[i]={
        value: arr[k].value,
        visit: false,
    };
    input[i+1]={
        value: arr[k].value,
        visit: false,
    };
    arr[k].visit=true;
}
const matrix = [];
for (let i=0; i<4; i+=1) {
    matrix[i]=[];
    for (let j=0; j<4; j+=1) {
        let n=randDigits(0, 16);
        while (input[n].visit) {
            n=randDigits(0, 16);
        }

       matrix[i][j]={
           value: input[n].value,
           open: false,
       };
       input[n].visit=true;
    }
}


let count = 0;
while (count<8) {
    let frow=randDigits(0, 4);
    let fcol = randDigits(0, 4);

    let lrow = randDigits(0, 4);
    let lcol = randDigits(0, 4);
    while (frow===lrow && fcol===lcol || matrix[frow][fcol].open
        || matrix[lrow][lcol].open) {
            frow = randDigits(0, 4);
            fcol=randDigits(0, 4);
            lrow = randDigits(0, 4);
            lcol = randDigits(0, 4);
        }
        const first = matrix[frow][fcol];
        const last = matrix[lrow][lcol];
        if (first.value===last.value) {
            first.open=true;
            last.open=true;
            count+=1;
            print('goooooood');
        } else {
            print('nooooooooooooooo');
        }


}
print(matrix);





function randDigits(max, min){
    return Math.floor(Math.random()*(max-min))+min;
    }
    
    var arrfurst = [];
        for (var w=0; w<50; w+=1) {
            arrfurst.push({
            value: w+1,
            visit: false,
        });
    }

    var input = [];
    for (var p=0; p<boardSize*2; p+=2) {

        var k=randDigits(0, 49);
    
        while (arrfurst[k].visit) {
            k=randDigits(0, 49);
    
        }
        input[p]={
            value: arrfurst[k].value,
            visit: false,
        };
        input[p+1]={
            value: arrfurst[k].value,
            visit: false,
        };
        arrfurst[k].visit=true;
    }


var arr = [];
for (var t=0; t<boardSize*2; t+=1) {

    var m=randDigits(0, boardSize*2);

    while (input[m].visit) {
        m=randDigits(0, boardSize*2);

    }
    arr[t]= input[m].value;

    input[m].visit=true;
}