const solve = (userMatrix) =>{

    matrixSolved = [
        [3,4,2,8,1,7,9,6,5],
        [1,5,6,2,4,9,3,7,8],
        [7,8,9,3,5,6,1,2,4],
        [2,1,3,4,7,5,6,8,9],
        [4,6,5,1,9,8,2,3,7],
        [9,7,8,6,2,3,4,5,1],
        [5,2,1,7,3,4,8,9,6],
        [8,3,7,9,6,1,5,4,2],
        [6,9,4,5,8,2,7,1,3],
    ]

    // set every index value equal to the solved matrix index value
    for(var i = 0; i < 9; i++){
        for(var j = 0; j < 9; j++){
            userMatrix[i][j] = matrixSolved[i][j]
        }
    }

    // Check if every value in the userMatrix is the same as the solution matrix
    for(var i = 0; i < 9; i++){
        for (var j = 0; j < 9; j++){
            if(userMatrix[i][j] != matrixSolved[i][j]){
                return false;
            }
        }
    }
    
    return true;
}

module.exports = { solve }
