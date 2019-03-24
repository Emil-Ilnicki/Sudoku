var sudokuGame = {

    
    start: function(){
        var matrix = [];
        for(var i = 0; i < 9; i++){
            matrix[i] = [];
            for (var j = 0; j < 9; j++){
                matrix[i][j] = Math.floor(Math.random() * 10);
            }
        }

        for(var i = 0; i < 9; i++){
            var row = $('<tr></tr>');
            for (var j = 0; j < 9; j++){
                var block = $('<td class="boxEdit"></td>');
                block.attr('id','Block'+ '_' + i + '_' + j).text(matrix[i][j]);
                row.append(block);
                $('#sudokuGrid').append(row);
            }
        }            
    },


}

$(document).ready(function(){
    sudokuGame.start();
})
