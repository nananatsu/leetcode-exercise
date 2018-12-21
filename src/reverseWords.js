var reverseWords = function (s) {
    return s.split(' ').map((v) => v.split('').reverse().join('')).join(' ');

};

console.time('反转字符串中的单词 III');
console.log(reverseWords("Let's take LeetCode contest"));
console.timeEnd('反转字符串中的单词 III');

