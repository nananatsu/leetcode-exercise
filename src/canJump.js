/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {

    let len = nums.length;
    if(len === 1) return true;
    let can = {};
    can[0] = true;
    for (let i = 0; i < len - 1; i++) {
        if (can[i]) {
            let c = i + nums[i];
            if (c >= len - 1) return true;
            else {
                for (let j = nums[i]; j > 0; j--) {
                    let sum = i + j;
                    if(can[sum]) break;
                    else can[sum] = true;
                }
            }
        }
    }
    return false;

};

console.time('跳跃游戏');
console.log(canJump([0]));
console.timeEnd('跳跃游戏');