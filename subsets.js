var subsets = function(nums) {

    let len = nums.length;
    let total = 1 << len;
    let result = [];
    for(let i = 0; i < total; i++){
        let tmp = [];
        let index = 0;
        let j = i;
        while(j > 0){
            if(j&1) tmp.push(nums[index]);
            index++;
            j = j >> 1;
        }
        result.push(tmp);
    }
    return result;

};

console.time('子集');
console.log(subsets([1,2,3]));
console.timeEnd('子集');
