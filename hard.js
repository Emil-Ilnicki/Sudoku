var sudokuGame = {

    
    start: function(){
        var length = 0;
        var matrix = [];
        for(var i = 0; i < 9; i++){
            matrix[i] = [];
            for (var j = 0; j < 9; j++){
                var random = Math.floor(Math.random() * 10);
                var num;
                switch(random){
                    case 0:
                        num = '';
                        break;
                    case 1:
                        num = '1';
                        break;
                    case 2:
                        num = '2';
                        break;
                    case 3:
                        num = '3';
                        break;            
                    case 4:
                        num = '4';
                        break;            
                    case 5:
                        num = '5';
                        break;            
                    case 6:
                        num = '6';
                        break;            
                    case 7:
                        num = '7';
                        break;            
                    case 8:
                        num = '8';
                        break;            
                    case 9:
                        num = '9';
                        break;            
                }
                    matrix[i][j] = num;

                if (matrix[i][j] != ''){
                    length++;
                }    
            }
        }

        if (length > 39){

            while (length > 39){
                var randomOne = Math.floor(Math.random() * 9);
                var randomTwo = Math.floor(Math.random() * 9);
                if (matrix[randomOne][randomTwo] != ''){
                    matrix[randomOne][randomTwo] = '';
                    length--;
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

        sudokuGame.play(matrix);

    },

    play: function(e){
         $('.boxEdit').click(function(event){
            event.stopPropagation();
            if($(this).hasClass('edit') == true){
                $('.selectActive').removeClass('selectActive');
                $(this).addClass('selectActive');
                $('selector').css('top', event.pageY).css('left', event.pageX).addClass('active');
            }
        });

        $('.selector div').click(function(){
            var input = $(this).text();
            var findBlock = $('.selectActive').attr('id').split('_');

            var currentRow = parseInt(findBlock[1]);
            var currentCol = parseInt(findBlock[2]);
            matrix[currentRow][currentCol] = parseInt(input);

            $('.wrong').removeClass('wrong');
            sudokuGame.compare(matrix);

            $('selectActive').text(parseInt(input));
            $('.selectActive').removeClass('selectActive');
            $('selector').removeClass('active');
        });

        $('.html').click(function(){
            $('.selectActive').removeClass('selectActive');
            $('selector').removeClass('active');
        })
    },

    compare: function(e){
        for (var i = 0; i < 9; i++){
            for (var j = 0; j < 9; j++){
                for (var h = 0; h < 9; h++){
                    if ((matrix [i][j] == matrix [i][h] && j != h) || (matrix[i][j] == matrix[h][j] && i != h)){
                        $('#Block_' + i + '_' + j).addClass('wrong');
                    };

                }

                for (var k = 0; k < 3; k++){
                    for (var l = 0; l < 3; l++){
                        if(matrix[i][j] == matrix[parseInt(i/3) * 3 + k][parseInt(j/3) * 3 + l] && (!(i == parseInt(i/3) * 3 + k && j == parseInt(j/3) * 3 + l))){
                            $('#Block_' + i + '_' + j).addClass('wrong');
                        };
                    }
                }
            }
        }

    }

}

$(document).ready(function(){
    sudokuGame.start();
})
