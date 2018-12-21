var rotateString = function (A, B) {
    let result = true;
    let checkString = function (start) {
        result = true;
        let index = A.indexOf(B.charAt(0), start);
        if (index > -1) {
            let i = index + 1;
            let j = 1;
            let len = A.length;
            if (i >= len) {
                i = 0;
            }
            while (i !== index) {
                if (A.charAt(i++) !== B.charAt(j++)) {
                    result = false;
                    checkString(index + 1);
                    break;
                }
                if (i >= len) {
                    i = 0;
                }
            }
        } else {
            result = false;
        }
    }
    checkString(0);
    return result;
};

console.time('旋转字符串');
console.log(rotateString('vcuszhlbtpmksjleuchmjffufrwpiddgyynfujnqblngzoogzg', 'fufrwpiddgyynfujnqblngzoogzgvcuszhlbtpmksjleuchmjf'));
console.timeEnd('旋转字符串');