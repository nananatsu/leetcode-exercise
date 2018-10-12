var longestCommonPrefix = function (strs) {

    if (strs.length === 0) return '';
    let compre = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let index = strs[i].indexOf(compre);
        while (index === -1 || index !== 0) {
            compre = compre.substring(0, compre.length - 1);
            index = strs[i].indexOf(compre);
        }
        if (compre.length === 0) {
            break;
        }
    }
    return compre;
};

console.time('最长公共前缀');
console.log(longestCommonPrefix(["c", "acc", "ccc"]));
console.timeEnd('最长公共前缀');