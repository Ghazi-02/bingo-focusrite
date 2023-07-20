const assert = require('assert')
const { findInput, bingoChecker, mapLogic } = require("./main")
const { markAsUntransferable } = require('worker_threads')

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