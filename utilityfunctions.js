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

module.exports =  {
    createNumList,
    bingoCardGenerator,
}