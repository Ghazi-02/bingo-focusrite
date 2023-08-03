const assert = require('assert')
const { game,findInput, bingoChecker, mapLogic, bingoCardGenerator,createNumList,fastestBingoBoard } = require("./main")
const {readBingoBoard,readInputList}=require('./file')
const { deflateSync } = require('zlib')
let listOfnums= [7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1]   
let MarkedRows = new Map()
let bingoCard = [
    //0,1,2,3,4     
    [22,13,17,11,0],//0
    [8,2,23,4,24],//1
    [21,9,14,16,7],//2
    [6,10,3,18,5],//3
    [1,12,20,15,19]//4
    ] 
describe("Input finder", () =>{

    it("should return the input,row and column",()=>{
        const result = findInput(7,bingoCard);
        assert.deepStrictEqual(result,{input:7,row:2,column:4})
    })
    it("should return null if the input doesnt exist", ()=>{
        const result = findInput(999,bingoCard);
        assert.deepStrictEqual(result,null)
    })
})

describe("Marked Checker", ()=>{

    it("should check if the input has been marked",()=>{
        let MarkedRows = new Map()
        let usedNums = []
        for (let i = 0; i < 10; i++){
            const input = findInput(listOfnums[i],bingoCard) // cycle through list of nums
            usedNums.push(listOfnums[i])
            mapLogic(MarkedRows,input.input,input.row)
    }
    console.log(MarkedRows)
    assert.deepStrictEqual(MarkedRows.get(0),[11,17,0])
    assert.deepStrictEqual(MarkedRows.get(1),[4,23,2])
}
    )
})

describe("Bingo Checker",()=>{
    it("should check if player can bingo",()=>{
        assert.deepStrictEqual(bingoChecker(MarkedRows),false)
    })
})
 
describe("Bingo card generator", ()=>{
    it("Should print the bingo card",() =>{
        console.log(createNumList())
        console.log(bingoCardGenerator())
        
    })
})
describe("Check if it all works",()=>{
    it("Should return final game result",()=>{
        console.log('hardcoded:',game(listOfnums,bingoCard))
        let x = 0;
        while (x < 10){
            let list = createNumList()
            let card = bingoCardGenerator()
            console.log("List:",list)
            console.log("Bingo Card:",card)
            console.log(game(list,card))
            x += 1
    } 
    })

})
describe("Fastest bingo board checker",()=>{
    it("Should return the bingo board that gets bingo the quickest", ()=>{
        let card1=bingoCardGenerator()
        let card2=bingoCardGenerator()
        let card3=bingoCardGenerator()
        console.log(listOfnums)
        console.log(fastestBingoBoard(listOfnums,[card1,card2,card3]))
        console.log(readBingoBoard('./board.txt'))
        console.log(readInputList("./inputList.txt"))
    })
})

describe("File reading tester",()=>{
    it("Show the data of the read files",()=>{
        console.log(readBingoBoard('./board.txt'))
        console.log(readInputList("./inputList.txt"))
    })
})