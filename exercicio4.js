const numeros = [1, 11, 12, 9, -5, -1];

function numeral() {
    for(numero of numeros){
        if(numero < 10){
            console.log(numero);
        }
    }
}

numeral();