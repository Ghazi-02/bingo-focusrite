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
        if(values.length == 5){
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

function fastestBingoBoard(listOfInputs,listOfBoards){
    let fastestBoard= {speed: Infinity}

    for(let i = 0; i < listOfBoards.length; i++){
        let board = listOfBoards[i]
        let currBoard =game(listOfInputs,board)
        if (currBoard.bingo == true && currBoard.speed < fastestBoard.speed){
            fastestBoard = {
                            board: board,
                            bingo: currBoard.bingo,
                            speed:currBoard.speed
                        } 
        }
    }
    return fastestBoard
}

function game(inputList,board){
    let MarkedRows = new Map()
    let MarkedColumns = new Map()
    for (let i= 0; i < inputList.length; i++){
        let input = findInput(inputList[i], board)
        if (input == null){
            continue;
        }
        mapLogic(MarkedColumns,input.input,input.column)
        mapLogic(MarkedRows,input.input,input.row)
        if (bingoChecker(MarkedColumns) == true || bingoChecker(MarkedRows) == true){
            return {bingo: true, speed: i}
        }
    }
    return {bingo:false,speed:inputList.length}
}

module.exports = {
    game,
    findInput,
    bingoChecker,
    mapLogic,
    fastestBingoBoard
}