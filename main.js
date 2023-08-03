const readline = require('readline')
const { game,fastestBingoBoard } = require("./game")
const {readBingoBoard,readInputList}=require('./file')

async function main(){
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    try {
        rl.question('Enter the name of your input file: ', (inputFile) => {
            rl.question('Enter the name of your board file. If there is more than one file, seperate them by commas: ', (boardFiles) => {
                let inputList = readInputList(`./textfiles/${inputFile}`)
                let boardFilesArray = boardFiles.split(',')
                let boards = []
                for (let i = 0; i <  boardFilesArray.length; i++) {
                    let file = boardFilesArray[i]
                    boards.push(readBingoBoard(`./textfiles/${file}`))
                }
                if(boards.length == 1){
                    let result = game(inputList,boards[0])
                    if (result.bingo == true){
                        console.log("!!!BINGO!!! YOU WIN")
                    }else{
                        console.log("YOU LOSE!!! TRY AGAIN!!!")
                    }
                }else{

                    let result = fastestBingoBoard(inputList,boards)
                    console.log("THE FASTEST BOARD IS")
                    console.log(result.board)
                }
                

                rl.close()
            })
        })
    } catch (err) {
        console.error('An error occurred: ', err)
        rl.close()
    }
 
}
main();