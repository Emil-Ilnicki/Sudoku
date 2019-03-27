var sudokuGame = {

    solve: function(){

        matrix = [
            [3,8,7,4,1,5,2,6,9],
            [4,9,2,7,6,3,5,1,8],
            [5,1,6,9,2,8,4,3,7],
            [1,6,9,2,8,4,3,7,5],
            [7,5,4,3,9,6,8,2,1],
            [8,2,3,1,5,7,6,4,9],
            [2,7,5,8,3,1,9,6,4],
            [9,4,8,6,7,2,1,5,3],
            [6,3,1,5,4,9,7,8,2]
        ]

        for(var i = 0; i < 9; i++){
            var row = $('<tr></tr>');
            for (var j = 0; j < 9; j++){
                var block = $('<td class="boxEdit"></td>');


                block.attr('id','Block'+ '_' + i + '_' + j).text(matrix[i][j]);
                row.append(block);
                 sectIDi = Math.floor( i / 3 );
                    sectIDj = Math.floor( j / 3 );
                    // Set the design for different sections
                    if ( ( sectIDi + sectIDj ) % 2 ===  0) {
                        block.addClass( 'sudoku-section-one' );
                    } else {
                        block.addClass( 'sudoku-section-two' );
                    }

                $('#sudokuGridSolved').append(row);
            }
        }

    $("#sudokuGridSolved").show();



    }


}
