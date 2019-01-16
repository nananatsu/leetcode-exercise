/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  
    let row = [{},{},{},{},{},{},{},{},{}];
    let column = [{},{},{},{},{},{},{},{},{}];
    let child = [{},{},{},{},{},{},{},{},{}];

    for(let i = 0; i < board.length;i++){
        let r = board[i];
        for(let j =0;j < r.length;j++){
            if(r[j] === '.') continue;
            let p = (Math.floor(i/3)*3 +Math.floor(j/3));
            if(row[i][r[j]] || column[j][r[j]] || child[p][r[j]]){
                return false;
            }else{
                row[i][r[j]] = true;
                column[j][r[j]] = true;
                child[p][r[j]] = true;
            }
        }
    }    
    return true;
};

console.time('有效的数独');
console.log(isValidSudoku([
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]));
console.timeEnd('有效的数独');