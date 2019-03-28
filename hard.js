var sudokuGame = {

    // function used to print out a solveable game to the html grid
    start: function(){

        matrix = [
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

        for(var j = 0; j<9;j++){
            for(var k = 0; k<9;k++){

                if(matrix[j][k]==0){
                    matrix[j][k] = ''
                }


            }

        }

        for(var i = 0; i < 9; i++){
            var row = $('<tr></tr>');
            for (var j = 0; j < 9; j++){
                var block = $('<td class="boxEdit edit"></td>');
                block.attr('id','Block'+ '_' + i + '_' + j).text(matrix[i][j]);
                row.append(block);

                if(matrix[i][j] != ''){
                    block.removeClass ('edit');
                }

                var sectionOne = Math.floor(i/3);
                var sectionTwo = Math.floor(j/3);

                if (sectionOne%2 == sectionTwo%2){
                    block.addClass('sectionone');
                }else{
                    block.addClass('sectiontwo');
                }
                $('#sudokuGrid').append(row);
            }
        }

   
    },

    //  Solve function used to write the solution to the html grid
    solve: function(){

        var matrixSolved = [
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
        
        for(var i = 0; i < 9; i++){
            var row = $('<tr></tr>');
            for (var j = 0; j < 9; j++){
                var block = $('<td class="boxEdit edit"></td>');
                block.attr('id','Block'+ '_' + i + '_' + j).text(matrixSolved[i][j]);
                row.append(block);

                if(matrixSolved[i][j] != ''){
                    block.removeClass ('edit');
                }

                var sectionOne = Math.floor(i/3);
                var sectionTwo = Math.floor(j/3);

                if (sectionOne%2 == sectionTwo%2){
                    block.addClass('sectionone');
                }else{
                    block.addClass('sectiontwo');
                }
                $('#sudokuGrid').append(row);
            }
        }
    }

}

$(document).ready(function(){
    sudokuGame.start();
    $('#solveButton').click(function(){
        $("#sudokuGrid").empty();
        sudokuGame.solve();
    })
})

