const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
    '5',
'5',
'Q---Q',
'-----',
'-B---',
'--R--',
'Q---Q',
'10',
'a1 a1',
'a1 d4',
'e1 b4',
'a5 d2',
'e5 b2',
'b3 d5',
'b3 a2',
'b3 d1',
'b3 a4',
'c2 c5',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});

const readMove = (str, r) => {
    const [f, t] = str.split(' ');
    
    return {
        from : {
            row : r-(+f[1]),
            col : +(f.charCodeAt(0) - 97)
        },
        to : {
            row : r-(+t[1]),
            col : +(t.charCodeAt(0) - 97)
        }

    }
};

const move = (fr, fc, tr, tc) => {
    let deltaR = fr>tr ? -1 : 1;
    let deltaC = fc>tc ? -1 : 1;

    if (fr===tr) {
        deltaR = 0;
    } else if (fc===tc) {
        deltaC = 0;
    }

    while ((fr!==tr) || (fc!==tc)) {
        fr+=deltaR;
        fc+=deltaC;
    
        if (board[fr][fc]!=='-') {
            return false;
        }
    }
    return true;
}

const moveRook = (fr, fc, tr, tc) => {
    if (fr!==tr && fc!==tc) {
        return false;
    }
   return move(fr, fc, tr, tc);
};

const moveBishop = (fr, fc, tr, tc) => {
    if (Math.abs(fr-tr) !== Math.abs(fc-tc)) {
        return false;
    }
    return move(fr, fc, tr, tc );
};

const moveQueen = (fr, fc, tr, tc) => {
    return moveBishop(fr, fc, tr, tc) || moveRook(fr, fc, tr, tc);
};

const r = +gets();
const c = +gets();
const board = [];

for (let i=0; i<r; i+=1) {
    board[i]=gets().split('');
};
const rowInput = +gets();
for (let i=0; i<rowInput; i+=1) {
    const input = gets();
    const movie = readMove(input, r);
    const fRow = movie.from.row;
    const fCol = movie.from.col;
    const tRow = movie.to.row;
    const tCol = movie.to.col;
    // console.log(`${fRow}, ${fCol}, ${tRow}, ${tCol}`);
if(fRow<0 || fRow>=r || tRow<0 || tRow>=r || fCol<0 || fCol>=c || tCol<0 || tCol>=c){
    print('no');
        continue;
};

    if (fRow===tRow && fCol===tCol) {
        print('no');
        continue;
    };
    let piece = board[fRow][fCol];

    if (piece ==='-') {
        print('no');
        continue;
    }

    if (piece ==='R') {
        if (moveRook (fRow, fCol, tRow, tCol)) {
            print('yes');
            continue;
        } else {
            print('no');
            continue;
        }
    };

    if (piece==='B') {
        if (moveBishop (fRow, fCol, tRow, tCol)) {
            print('yes');
            continue;
        } else {
            print('no');
            continue;
        }
    };
    if (piece==='Q') {
        if (moveQueen (fRow, fCol, tRow, tCol)) {
            print('yes');
            continue;
        } else {
            print('no');
            continue;
        }
    };

}




