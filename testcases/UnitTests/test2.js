const operations = require('./userStory106.js')
const assert = require('assert');


userMatrix = [
    [0,0,0,8,0,0,9,6,0],
    [1,0,0,0,0,0,0,0,8],
    [0,0,0,3,5,0,0,0,0],
    [0,0,3,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,7],
    [0,0,0,0,0,3,0,0,1],
    [0,2,1,0,0,4,8,9,6],
    [8,3,7,0,0,0,0,4,2],
    [0,0,4,0,0,0,0,1,0],
]



// Unit test to make sure the solution displayed matches with the solution matrix
it ('Correctly shows the solution to the sudoku puzzle', () => {
    assert.equal(operations.solve(userMatrix), true);
})
