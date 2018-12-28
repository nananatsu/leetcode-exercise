var generateParenthesis = function(n) {
    
    let arr = [];
    if(n === 0) return arr;

    let dfs = (left,right,str) => {
        if(left === n && right === n) return arr.push(str);
        if(left < n) dfs(left + 1, right, str + "(");
        if(left > right) dfs(left, right + 1, str + ")");
    }
    dfs(0,0,"");
    return arr;
};

console.time('括号生成');
console.log(generateParenthesis(4));
console.timeEnd('括号生成');
