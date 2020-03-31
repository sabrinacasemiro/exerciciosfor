const array = [ 1, 6, 8, 9, 10, 98, 633 ]

function exercio1(){
    let somaTotal = 0;

    for(numero of array) {
        somaTotal = somaTotal+numero;
        console.log(numero);
    }
    console.log(somaTotal);
}

exercio1();

