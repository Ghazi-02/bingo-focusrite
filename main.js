let bingoCard = [
    //0,1,2,3,4     
    [22,13,17,11,0],//0
    [8,2,23,4,24],//1
    [21,9,14,16,7],//2
    [6,10,3,18,5],//3
    [1,12,20,15,19]//4
    ] 
let listOfnums= [7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1]

function findInput(input,matrix){
    for(let i = 0; i < matrix.length;i++){
        for(let j = 0; j < matrix.length;j++){
            if(matrix[i][j] == input){
                return {
                    input: input,
                    row: i ,
                    column: j,
                }
            }
        }
    }
    return null

}



function main(){
    let input = findInput(listOfnums[0],bingoCard) // cycle through list of nums
    
    let MarkedRows = new Map()
    let MarkedColumn = new Map()
    
    if(MarkedRows.has(input.row)){
        let rowArray =MarkedRows.get(input.row)
        rowArray.push(input.input)
         MarkedRows.set(input.row,rowArray)
     }else{
         MarkedRows.set(input.row,[input.input])
     }
    
    if(MarkedColumn.has(input.column)){
        let colArray = MarkedColumn.get(input.column)
        MarkedColumn.set(input.column,colArray)
    }else{
        MarkedColumn.set(input.column,[input.input])
    }



 
}
console.log(main())

module.exports = (
    findInput
)