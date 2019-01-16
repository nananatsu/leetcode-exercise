/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

    if (needle === '') return 0;
    let list = new Array(needle.length);

    let match = (str) => {
        let k = -1, j = 0;
        list[0] = -1;
        while(j < str.length - 1){
            if(k === -1 || str[j] === str[k]){
                k++;
                j++;
                list[j] = k;
            }else{
                k = list[k];
            }
        }
    }
    match(needle);
    let ans = -1;
    let i = 0, j = 0;
    while(i < haystack.length && j < needle.length){
        if(j === -1 || haystack[i] === needle[j]){
            i++;
            j++;
        }else{
            j = list[j];
        }
    }
    return j === needle.length ? i - j : -1;
    
};

console.time('实现strStr()');
console.log(strStr("hello"
    , "lo"));
console.timeEnd('实现strStr()');