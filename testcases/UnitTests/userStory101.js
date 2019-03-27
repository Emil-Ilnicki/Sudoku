const createGrid = (x) => {
    var size;
    var matrix = [];
    length = 0;
    if (x === "easy"){
        size = 3;

        for(var i = 0; i < size; i++){
            matrix[i] = [];
            for (var j = 0; j < size; j++){
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
            }
        }

        return matrix.length
    }
    else if(x === "medium"){
        size = 6;
        for(var i = 0; i < size; i++){
            matrix[i] = [];
            for (var j = 0; j < size; j++){
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
            }
        }

        return matrix.length
    }
    else if(x === "hard"){
        size = 9;
        
        for(var i = 0; i < size; i++){
            matrix[i] = [];
            for (var j = 0; j < size; j++){
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
        return matrix.length
    }
}

module.exports = { createGrid }
