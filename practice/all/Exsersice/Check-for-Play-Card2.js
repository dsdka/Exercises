const gets=this.gets||require('readline-sinc').question;
const print = this.print||console.log;
const n=gets();
let res='';
switch (n) {
    case '2': res=`yes ${n}`; break;
    case '3': res=`yes ${n}`; break;
    case '4': res=`yes ${n}`; break;
    case '5': res=`yes ${n}`; break;
    case '6': res=`yes ${n}`; break;
    case '7': res=`yes ${n}`; break;
    case '8': res=`yes ${n}`; break;
    case '9': res=`yes ${n}`; break;
    case '10': res=`yes ${n}`; break;
    case 'J': res=`yes ${n}`; break;
    case 'Q': res=`yes ${n}`; break;
    case 'K': res=`yes ${n}`; break;
    case 'A': res=`yes ${n}`; break;
    default: res=`no ${n}`;
}
print(res);
quit(0);
