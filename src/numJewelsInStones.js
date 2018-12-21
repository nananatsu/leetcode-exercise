var numJewelsInStones = function (J, S) {

    let count = 0;
    for (let i = 0; i < J.length; i++) {
        let a = J.charAt(i);
        for (let j = 0; j < S.length; j++) {
            if (a === S.charAt(j)) count++;
        }
    }
    return count;
};

console.time('宝石与石头');
console.log(numJewelsInStones('aA','aAAbbbb'));
console.timeEnd('宝石与石头');