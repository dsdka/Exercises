const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
    '-11',
    '6',
    '-6',
    '3',
    '1',
    '-9',
    '-3',
    '-12',
    '-4',
    '-6',
    '-1',
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const damage = (sx1, sy1, sx2, sy2, h, cx, cy) => {
    let result =0;
    const caty = 2*h-cy;
    const catx = cx;
    const maxX=Math.max(sx1, sx2);
    const minX = Math.min(sx1, sx2);
    const maxY = Math.max(sy1, sy2);
    const minY = Math.min(sy1, sy2);
    
     if ((catx===maxX && caty===maxY)||(catx===maxX && caty===minY)||
     (catx===minX && caty===maxY)||(catx===minX && caty===minY)) {
         result=25;
     } else if ((catx===minX || catx===maxX) && (minY<caty && caty<maxY )) {
        result = 50;
     } else if ((caty===minY || caty===maxY) && (minX<catx && catx<maxX)) {
         result = 50;
     } else if (minX<catx && catx<maxX && minY<caty && caty<maxY) {
         result = 100;
     }
    
     return result;
}

const sx1=+gets();
const sy1 =+gets();
const sx2=+gets();
const sy2 = +gets();
const h=+gets();
let procent=0;
const c1x = +gets();
const c1y = +gets();
procent+=damage(sx1, sy1, sx2, sy2, h, c1x, c1y);
const c2x = +gets();
const c2y = +gets();
procent+=damage(sx1, sy1, sx2, sy2, h, c2x, c2y);
const c3x = +gets();
const c3y = +gets();
procent+=damage(sx1, sy1, sx2, sy2, h, c3x, c3y);
print(`${procent}%`);


