var sudokuGame = {
    matrix:[  [[7],[2],[],[9],[4],[5],[],[3],[]],
        [[],[3],[9],[2],[],[6],[],[],[4]],
        [[1],[5],[],[7],[3],[8],[6],[9],[2]],
        [[6],[4],[7],[1],[],[3],[],[2],[]],
        [[9],[8],[2],[6],[5],[7],[4],[1],[3]],
        [[3],[],[5],[4],[9],[2],[7],[],[6]],
        [[4],[9],[3],[],[6],[1],[],[5],[7]],
        [[5],[7],[],[3],[2],[],[8],[6],[9]],
        [[],[],[8],[5],[7],[9],[3],[4],[]]
    ],


    start: function(){
        var gridSize;
        var path = window.location.pathname;
        var page = path.split('/').pop();
        
        if(page == "hard.html"){
            gridSize = 9;
        }else if (page == "medium.html"){
            gridSize = 6;
        }else{
            gridSize = 3;
        }

        for(var i = 0; i < gridSize; i++){
            var row = $('<tr></tr>');
            for (var j = 0; j < gridSize; j++){
                var block = $('<td class="boxEdit"></td>');
                block.attr('id','Block'+ '_' + i + '_' + j).text(sudokuGame.matrix[i][j]);
                row.append(block);
                $('#sudokuGrid').append(row);
            }
        }      
    }
}

$(document).ready(function(){
    sudokuGame.start();
})
