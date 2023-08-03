const { Cipher } = require("crypto");
const fs=require("fs")


function readBingoBoard(path){
    const content = fs.readFileSync(path,'utf-8')
    const rows= content.trim().split('\n')
    console.log(content,rows)
    const bingoBoard = rows.map((row) => {
        return row.split(/\s+/).map((number) => {
            const parsedInt = parseInt(number)
            if (!isNaN(parsedInt)) {
              return parsedInt
            }
          }).filter((number) => number !== undefined);

        
      })
    return bingoBoard

}


module.exports={
    readBingoBoard,
}