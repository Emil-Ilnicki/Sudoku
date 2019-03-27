const operations = require('./userStory101.js')
const assert = require('assert');

easyMatrixSize = [
    [1,1,1],
    [1,1,1],
    [1,1,1],
];

mediumMatrixSize = [
    [1,1,1,1,1,1],
    [1,1,1,1,1,1],
    [1,1,1,1,1,1],
    [1,1,1,1,1,1],
    [1,1,1,1,1,1],
    [1,1,1,1,1,1],
];

hardMatrixSize = [
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1],
];

// Unit tests to make sure the correct grid size is created for each difficulty
it ('Correctly creates the grid for easy mode', () => {
    assert.equal(operations.createGrid("easy"), easyMatrixSize.length);
})

it ('Correctly creates the grid for medium mode', () => {
    assert.equal(operations.createGrid("medium"), mediumMatrixSize.length);
})

it ('Correctly creates the grid for easy mode', () => {
    assert.equal(operations.createGrid("hard"), hardMatrixSize.length);
})
