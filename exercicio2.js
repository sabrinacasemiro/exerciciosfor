const nomes = ['Marcos', 'Sabrina', 'Clarice'];

let frase = 'A familia Casemiro Maia: ';

function frases() {
    for(nome of nomes) {
        if(nome !='Clarice') {
            frase = frase + nome + ', ';
        } else {
            frase = frase + nome + '.';
        }
        console.log(frase);
    }
}

frases();

//A familia Casemiro Maia: Marcos, Sabrina, Clarice;
