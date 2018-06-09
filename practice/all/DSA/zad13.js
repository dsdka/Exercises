const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
    '2',
    'test it here now',
    'testhere',
    'hello world my',
    'hellomyworldhello',
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n=+gets();

for (let i=0; i<n; i+=1) {
    const input = gets().split(' ');
    input.sort((x, y)=>
        y.length-x.length
    );
    //print(input);
    const logo = gets();
    let res = logo;
    let result = logo;
    for (let j=0; j<input.length; j+=1) {
        let re = new RegExp(input[j], 'g');
        res=res.replace(re, '');
        result= result.replace(re, input[j]+' ');
    }
    if (res==='') {
        print(result.trim());
    } else {
        print('NOT VALID');
    }
    

}

//quit(0);
