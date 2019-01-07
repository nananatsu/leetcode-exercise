/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function (poured, query_row, query_glass) {

    let tower = [];
    for (let i = 1; i <= 100; i++) {
        tower.push(new Array(i));
    }

    let floor = 1;
    tower[0][0] = poured;
    poured--;
    while (poured > 0 && floor < 100) {
        let flo = tower[floor];
        let left, right;
        for (let i = 0; i < flo.length; i++) {
            if (i >= 1) left = tower[floor - 1][i - 1] - 1;
            right = tower[floor - 1][i] - 1;
            if (left === undefined || Number.isNaN(left) || left < 0) left = 0;
            if (right === undefined || Number.isNaN(right) || right < 0) right = 0;
            flo[i] = (left + right) / 2;
            if (flo[i] > 1) poured--;
            else poured -= flo[i];
        }
        floor++;
    }
    let ans = tower[query_row][query_glass];
    if (ans === undefined) ans = 0;
    return ans >= 1 ? 1 : ans;

};


console.time('799. 香槟塔');
console.log(champagneTower(6, 3, 1));
console.timeEnd('799. 香槟塔');