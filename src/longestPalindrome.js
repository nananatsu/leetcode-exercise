var longestPalindrome = function (s) {

    if (s.length === 1) return s;
    let str = s.charAt(0);
    let getPalindrome = function (m, n) {
        while (m >= 0 && s.charAt(m) === s.charAt(n)) {
            m--;
            n++;
        }
        if ((n - m - 1) > str.length) {
            str = s.substring(m + 1, n);
        }
    }
    for (let i = 0; i < s.length; i++) {
        let a = s.charAt(i);
        if (a === s.charAt(i + 1)) {
            let m = i - 1,
                n = i + 2;
            while (a === s.charAt(n)) {
                n++;
            }
            getPalindrome(m, n);
        } else if (a === s.charAt(i + 2)) {
            let m = i - 1,
                n = i + 3;
            getPalindrome(m, n);
        }
    }
    return str;
};

console.time('两数之和');
console.log(longestPalindrome("abacab"));
console.timeEnd('两数之和');