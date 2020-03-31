const numeros = [1, 11, 12, 9, -5, -1];

const array = [];

function chamarArray(){
    for(numero of numeros){
        if(numero < 10){
            array.push(numero);
        }
    }
    console.log(array);
}

// array.push(item)

chamarArray();