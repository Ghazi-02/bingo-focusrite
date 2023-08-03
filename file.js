const { Cipher } = require("crypto");
const fs=require("fs")


function readBingoBoard(path){
    const content = fs.readFileSync
    const rows= content.trim().split('\n')
    console.log(content,rows)
    const bingoBoard = rows.map((row) => {
        return row.split(/\s+/).map((number) => {
            return parseInt(number);
        });
      });
    return bingoBoard

}
console.log(readBingoBoard('./board.txt'))
module.exports={
    readBingoBoard,
}