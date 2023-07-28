let bingoCard = [
    //0,1,2,3,4     
    [22,13,17,11,0],//0
    [8,2,23,4,24],//1
    [21,9,14,16,7],//2
    [6,10,3,18,5],//3
    [1,12,20,15,19]//4
    ] 
let listOfnums= [7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1]

function createNumList(){
    let list= []
    let uniqueSet = new Set()
    for(let i = 0; i < 30; i++){
        let randVal = Math.floor(Math.random()*50)
        if (!uniqueSet.has(randVal)){
            list.push(randVal)
            uniqueSet.add(randVal)
        }else{
            i = i - 1
        }
        
    }
    return list
}
function bingoCardGenerator(){
    let bingoCard =[] 
    let uniqueSet = new Set()
    for(let i = 0; i < 5; i++){
        let bingoRow = []
        for(let j = 0; j < 5; j++){
            let randVal = Math.floor(Math.random() * 50)
            if (!uniqueSet.has(randVal)){
                uniqueSet.add(randVal)
                bingoRow.push(randVal)     
            }else{
                j = j - 1
            }
        }
        bingoCard.push(bingoRow)   
    }
    return bingoCard
}
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
function mapLogic(map,inputValue,directionIndex){
   
    if(map.has(directionIndex)){
        let directionArray = map.get(directionIndex)
        directionArray.push(inputValue)
        map.set(directionIndex,directionArray)
    }else{
        map.set(directionIndex,[inputValue])
    }
  
}


function game(inputList,board){
    let MarkedRows = new Map()
    let MarkedColumns = new Map()
    for (let i= 0; i < inputList.length; i++){
        let input = findInput(i, board)
        mapLogic(MarkedColumns,input.input,input.column)
        mapLogic(MarkedRows,input.input,input.row)
        if (bingoChecker(MarkedColumns) == true || bingoChecker(MarkedRows) == true){
            return true
        }
    }
    return false
}

function main(){
    

 
}


module.exports = {
    game,
    findInput,
    bingoChecker,
    mapLogic,
    bingoCardGenerator,
    listOfnums,
    createNumList
}