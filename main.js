let bingoCard = [
    //0,1,2,3,4     
    [22,13,17,11,0],//0
    [8,2,23,4,24],//1
    [21,9,14,16,7],//2
    [6,10,3,18,5],//3
    [1,12,20,15,19]//4
    ] 
let listOfnums= [7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1]

function findInput(value,matrix){
    for(let i = 0; i < matrix.length;i++){
        for(let j = 0; j < matrix.length;j++){
            if(matrix[i][j] == value){
                return {
                    input: value,
                    row: i ,
                    column: j,
                }
            }
        }
    }
    return null

}


function bingoChecker(map){
    for(let values of map.values()){
        if(values.length == 4){
            return true
        }
    }
    return false
}
function mapLogic(map,inputValue,direction){
    if(map.has(direction)){
        let directionArray = map.get(direction)
        array.push(inputValue)
        map.set(direction,directionArray)
    }else{
        map.set(direction,[inputValue])
    }
}

function main(){
    let input = findInput(listOfnums[0],bingoCard) // cycle through list of nums
    
    let MarkedRows = new Map()
    let MarkedColumn = new Map()
    
    mapLogic(MarkedColumn,input,input.column)
    mapLogic(MarkedRows,input,input.row)
    bingoChecker(MarkedColumn)
    bingoChecker(MarkedRows)


 
}
console.log(main())

module.exports = {
    findInput,
    bingoChecker
}