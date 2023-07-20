let bingoCard = [
    //0,1,2,3,4     
    [22,13,17,11,0],//0
    [8,2,23,4,24],//1
    [21,9,14,16,7],//2
    [6,10,3,18,5],//3
    [1,12,20,15,19]//4
    ] 

function findInput(input,matrix){
    for(let i = 0; i < matrix.length();i++){
        for(let j = 0; j < matrix.length();j++){
            if(matrix[i][j] == input){
                return {
                    input: input,
                    row: i ,
                    column: j,
                }
            }
        }
    }
}