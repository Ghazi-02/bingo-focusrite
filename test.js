const assert = require('assert');
var findInput = require("./main")
describe("Input finder", () =>{
    let bingoCard = [
        //0,1,2,3,4     
        [22,13,17,11,0],//0
        [8,2,23,4,24],//1
        [21,9,14,16,7],//2
        [6,10,3,18,5],//3
        [1,12,20,15,19]//4
        ] 
    it("should return the input,row and column",()=>{
        const result = findInput(7,bingoCard);
        assert.deepStrictEqual(result,{input:7,row:2,col:4})
    })
})