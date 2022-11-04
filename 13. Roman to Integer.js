var romanToInt = function(s) {
    let valor = [];
    let total = 0;
    for(let i = 0; i < s.length; i++){

        if(s[i] == "I"){
            valor.push(1);
        
        }else if(s[i] == "V"){
            valor.push(5);
            if(valor[i-1] == 1){
                valor[i-1] *= -1;
            }

        }else if(s[i] == "X"){
            valor.push(10);
            if(valor[i-1] == 1){
                valor[i-1] *= -1;
            }
        
        }else if(s[i] == "L"){
            valor.push(50);
            if(valor[i-1] == 10){
                valor[i-1] *= -1;
            }
        
        }else if(s[i] == "C"){
            valor.push(100);
            if(valor[i-1] == 10){
                valor[i-1] *= -1;
            }
        
        }else if(s[i] == "D"){
            valor.push(500);
            if(valor[i-1] == 100){
                valor[i-1] *= -1;
            }
        
        }else if(s[i] == "M"){
            valor.push(1000);
            if(valor[i-1] == 100){
                valor[i-1] *= -1;
            }
        }
    }
    for(let i = 0; i < valor.length; i++){
        total += valor[i];
    }
    return total;
};

//Testing
let x = romanToInt("III");
console.log(x);