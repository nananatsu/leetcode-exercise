var singleNumber = function(nums) {
    
    let r = 0;
    nums.forEach(v => r = r^v);
    return r;
};

console.time('只出现一次的数字');
console.log(singleNumber([2,2,1]));
console.timeEnd('只出现一次的数字');
