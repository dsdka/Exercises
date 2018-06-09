const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
    '50',
    '4852.2:tsps:lCqTHyDEuzvytNEhDWXmZMe gVjThodwRg',
    '14421.1:qts:MaLW',
    '67487.3:tablespoons:RbCTfqoZywxCSADqwe',
    '16189.9:gals:p',
    '99834.8:pts:LBd eREYp',
    '55472.8:pts:MQcvxdaCSfmnYAk qhyKPRciAmMrFsQ',
    '47051.7:tablespoons:mznzitFakeYE BIkMAnsDTmUcUSqVBdljMH',
    '48908.3:qts:NXGWjalobHLjUpxequuXXqUSwVptgNbRhWzqLdIKFa',
    '17738.1:teaspoons:sj wlIGOdNjfzXylfskWhwKhhacr',
    '96165.6:pints:GOVkBKRvEKYsxvsTqllEJtGWvHiuFpuSN',
    '16815.4:tablespoons:WgZymBfbPo GCYOlkhmVuuvA',
    '63458.7:pints:nrvNeuugHCDNxIaZcaECciYSx',
    '36161.6:liters:lCqTHyDEuzvytNEhDWXmZMe gVjThodwRg',
    '27173.7:mls:PHstPtqjfZY',
    '72569.4:tablespoons:lYRwdiyAFxbPnQWC',
    '90946.1:tsps:FygLNrc  pBURXZEFyPOAFnFTKyKhYaf',
    '120189.8:milliliters:J CKxNReGdJg',
    '27351:ls:lwfIDxEMbYMWyzRLFshr',
    '50269.3:pts:cRcvRNOwSzanuqjqIKIChbQiNtDd',
    '83716.6:pints:UgM',
    '50955.5:cups:wofXUTDARh',
    '113923.9:ls:NLihIphBdvOgwwTxOVIweNxyuezCXAVncJV',
    '10321.7:ls:fownHyAHcwkYFDtmE',
    '34733.3:milliliters:CejxxRuUtQDFmvZNECwcPAHuJJRkCXCjqmSFU',
    '88086.6:qts:PHstPtqjfZY',
    '100104.9:pints:PHstPtqjfZY',
    '121038.8:gallons:hLYqjKPULGbhI kYgFVFoSP',
    '46372.7:qts:nrvNeuugHCDNxIaZcaECciYSx',
    '74114.6:gals:MocwrbcXwOBVEKRikIP inedpKgwJCZgLJupwtpTl',
    '114300.6:tsps:MmXSJTZlyebxkRNzTP',
    '97977.8:qts:lYRwdiyAFxbPnQWC',
    '44887.9:tsps:nNXYDuxYaUHjQRtVmklVGbdcmaCUTCURdIHcPBngJoWfg',
    '72185.8:mls:MocwrbcXwOBVEKRikIP inedpKgwJCZgLJupwtpTl',
    '91000.1:fluid ounces:YJ TtiYiPBOBiEpxtpoHbtt',
    '123393.7:tbsps:UgM',
    '82851.1:cups:OHpQhz nwFreWKvxfIC',
    '8949.3:tablespoons:FygLNrc  pBURXZEFyPOAFnFTKyKhYaf',
    '94930.9:gallons:XZNRscibFpFj',
    '22258.7:fl ozs:MQcvxdaCSfmnYAk qhyKPRciAmMrFsQ',
    '67533:cups:wKHijWQQYZnQerTHplQEjUXBpgWDTfCKzIQQyTF',
    '30934.6:tbsps:aPPEDliVpQjfeRLOfyzNGJzafEurrEvBDZMluN',
    '59971.1:tsps:GOVkBKRvEKYsxvsTqllEJtGWvHiuFpuSN',
    '73850.6:fl ozs:WSTHCJ',
    '36261.5:mls:OapDmDcxUVAZXStCYhcDx',
    '40223.7:teaspoons:XsOiCTNIoFt',
    '83150.8:qts:yjLlUglfQwwHuepluxsHPPxZBCdkWhS',
    '113647.1:teaspoons:hM XTQoJfgMFMKBtvsAcYDZdpTR',
    '18420.8:liters:NOzeSOgz AVAGaYGygtmsxoAqfHbNwNUOKZMNnKegvB',
    '119257.1:fluid ounces:bxqFTvwqFJXJBRxBSnatGWeZ',
    '77681.1:gals:WgZymBfbPo GCYOlkhmVuuvA',
    '50',
    '46709.3:qts:jx euZxkxeEWmOqNCv',
    '54846.5:mls:wKHijWQQYZnQerTHplQEjUXBpgWDTfCKzIQQyTF',
    '114897.3:fluid ounces:czWeR',
    '55650.5:tsps:GzspQlGWNjMOFxDsNKMPUaaC qEtqTyoeyyCme',
    '88229:teaspoons:akkNeZ',
    '86911.5:liters:AwvBSFYQCgJVdypgRvGZpKNDPDDB',
    '98723.6:ls:lCqTHyDEuzvytNEhDWXmZMe gVjThodwRg',
    '104826.7:pts:FygLNrc  pBURXZEFyPOAFnFTKyKhYaf',
    '84710:liters:zsfOjPyOuwsUPJohizfqCsbzZJio',
    '85161.7:mls:lYRwdiyAFxbPnQWC',
    '77099.1:ls:cgsOonlxPfeOZFreTSfxphZk ScSssAowl',
    '72024.2:teaspoons:mS',
    '98857.3:tsps:MmXSJTZlyebxkRNzTP',
    '36564.1:quarts:WEFeI',
    '116818:gallons:oqLrthjrVPJVycOAnL',
    '29134.4:gallons:mDvlyCZLEYjNgO JyzQNLoJxgwYGnNTgojKID',
    '15779.7:tbsps:K',
    '57128.1:fl ozs:OHhkEBJspSLKHbalpabDIlQIMMIrdajJDISLW',
    '15031.7:pts:bUfxmJXEjoVCgouohUnfSXuRTheAZ',
    '120290.2:liters:QHPrkDrKAjRUegFogVItVghowktfxDQtOQAxdAU',
    '18933.8:liters:fjgtYAwmPIQFkQ SFXOTvIqJDdRZhbmsmgrWVecAR',
    '89992.6:cups:MDzAXChdIvpDlwbaT',
    '496.2:tbsps:kVqBMRtVpKftfZAvGORsf',
    '23979:gallons:ll WCJErdkQedMzk',
    '87665.9:fl ozs:cXZyfcxSysgVp MqCfZxT',
    '97047.5:qts:WSTHCJ',
    '66283:teaspoons:cXZyfcxSysgVp MqCfZxT',
    '33005.9:pts:K',
    '110368.8:milliliters:jyFWXQWBEUIMiBJkSJ',
    '62048.1:teaspoons:PHstPtqjfZY',
    '97499.5:liters:p',
    '47421.5:teaspoons:kVqBMRtVpKftfZAvGORsf',
    '111847.6:fluid ounces:ZkAZ',
    '94431.9:pints:cRcvRNOwSzanuqjqIKIChbQiNtDd',
    '24528.3:mls:XsOiCTNIoFt',
    '4009.7:liters:NOzeSOgz AVAGaYGygtmsxoAqfHbNwNUOKZMNnKegvB',
    '112667:mls:hnGUcYPhsmLIrWWGCKEVmXxgbxbbnXCvZNSfGvIsCZ',
    '29877.5:pints:OapDmDcxUVAZXStCYhcDx',
    '90229.6:mls:lCqTHyDEuzvytNEhDWXmZMe gVjThodwRg',
    '89340.4:pts:WEFeI',
    '120618.9:pts:bUfxmJXEjoVCgouohUnfSXuRTheAZ',
    '60466:pts:GzspQlGWNjMOFxDsNKMPUaaC qEtqTyoeyyCme',
    '54089.3:tbsps:nrvNeuugHCDNxIaZcaECciYSx',
    '32336.4:liters:dmtKLlNIgXpnivzgrqO YQQEJwGAfeAurGwAnYNPsW',
    '66444:pts:WEFeI',
    '43335.1:tsps:NLihIphBdvOgwwTxOVIweNxyuezCXAVncJV',
    '114076.8:pints:wBrvAckwFzVurZaTZgmGbugCepesZCqxSKCZeLppdHC',
    '100414:liters:eAnDeFxFJmyn vYRRpDhivBvrpR GRftqUPU',
    '93795.5:tbsps:cWa TkeewvMkIMbLbTYdPdsFdUjjxnDVQMAR g',
    '100679.8:liters:YwzbIYXLMevsMRTJAAVZlmnWsyfoFikFaPv HfFxnGs',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const chanceMeansure =(means, kol) => {
    let res=1;
    switch (means) {
        case 'tbsps': res=kol/3;
        break;
        case 'tablespoons': res=kol/3;
        break;
        case 'ls': res=kol/1000;
        break;
        case 'liters': res=kol/1000;
        break;
        case 'ozs': res=kol*8;
        break;
        case 'fluid ounces': res=kol*8;
        break;
        case 'tsps': res=kol/5;
        break;
        case 'teaspoons': res=kol/5;
        break;
        case 'gals': res=kol/4;
        break;
        case 'gallons': res=kol/4;
        break;
        case 'pts': res=kol/2;
        break;
        case 'pints': res=kol/2;
        break;
        case 'qts': res=kol/2;
        break;
        case 'quarts': res=kol/2;
        break;
        case 'cups': res=kol/48;
        break;
        default: res=1;
    }
    return res;
};
const n=+gets();
const arr = [];
// const imp = gets().split(':');
// arr[0]={
//     quantity: imp[0],
//     measurent: imp[1],
//     product: imp[2],
// };
for (let i=0; i<n; i+=1) {
    const input=gets().split(':');
    const ind = arr.findIndex((x)=>x.product.toLowerCase()===input[2].toLowerCase());
    if (ind<0) {
    arr[i]={
        quantity: input[0],
        measurent: input[1],
        product: input[2],
    };
  } else {
    if (arr[ind].measurent !== input[1]) {
        input[0]=chanceMeansure(arr[ind].measurent, +input[0]);
    }
     arr[ind].quantity =(+arr[ind].quantity + (+input[0]));
     arr[i]='';
  }
}
const m=+gets();

for (let i=0; i<m; i+=1) {
    const input = gets().split(':');
    const ind = arr.findIndex((x)=>x.product.toLowerCase()===input[2].toLowerCase());
    if (ind<0) {
        continue;
    } else {
        if (arr[ind].measurent !== input[1]) {
            input[0]=chanceMeansure(arr[ind].measurent, +input[0]);
        }
        if ( +arr[ind].quantity > +input[0]) {
            arr[ind].quantity =( +arr[ind].quantity-(+input[0]));
        } else {
            arr[ind]='';
        }
    }
}
for (let i=0; i<arr.length; i+=1) {
    if (arr[i]==='') {
        continue;
    }
    arr[i].quantity = ((Math.round((arr[i].quantity+1)*100)/100)-1).toFixed(2);
        print(`${arr[i].quantity}:${arr[i].measurent}:${arr[i].product}`);
}
