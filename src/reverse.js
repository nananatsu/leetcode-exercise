var reverse = function(x) {
    
    x = x.toString();
    let isNegative = false;
    if(x[0] === '-'){
        isNegative = true;
        x = x.slice(1);
    }
    let s = '';
    for(let i = x.length - 1; i >= 0; i--){
        s += x[i];
    }
    if(isNegative) s = '-' + s;
    let n = parseInt(s);
    let i = Math.pow(2,31);
    console.log(i);
    if( n > (i - 1) || n < (-i)){
        n = 0;
    }
    return n;


};

console.time('反转整数');
console.log(reverse(1563847412));
console.timeEnd('反转整数');
