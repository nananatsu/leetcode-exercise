/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
    while (true) {
        let a = rand7(), b = rand7();
        let rand = (a - 1) * 7 + b;
        if (rand <= 40) return rand % 10 + 1;
        a = rand - 40, b = rand7();
        rand = (a - 1) * 7 + b;
        if (rand <= 60) return rand % 10 + 1;
        a = rand - 60, b = rand7();
        rand = (a - 1) * 7 + b;
        if (rand <= 20) return rand % 10 + 1;
    }
};

let rand7 = () => Math.ceil(Math.random() * 7)

console.time('470. 用 Rand7() 实现 Rand10()');
for (let i = 0; i < 100; i++) console.log(rand10());
console.timeEnd('470. 用 Rand7() 实现 Rand10()');

