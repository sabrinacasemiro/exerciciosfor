const listaDeFamilias = [['Marcos', 'Sabrina', 'Clarice'], ['João', 'Maria', 'Josefa'], ['Pedro', 'Jorge', 'Joana']];

const sobrenomesDasFamilias = ['Casemiro', 'Silva', 'Oppenheimer'];

const $container = document.querySelector('.container');


function exemplo() {
    for(let i = 0; i < sobrenomesDasFamilias.length; i++){
        const boxFamilia = document.createElement('li');
        
        const sobrenome = document.createElement('h1');
        sobrenome.textContent = sobrenomesDasFamilias[i];

        $container.appendChild(boxFamilia);
        boxFamilia.appendChild(sobrenome);

        for(nome of listaDeFamilias[i]){
            const nomeFamilia = document.createElement('li');
            nomeFamilia.textContent = nome;

            boxFamilia.appendChild(nomeFamilia);
        }
    }
}

// let soma = 0;

// for (let i = 0; i < teste.length; i++){
//     if (i < 3){
//         soma = soma + teste[i];
//     }
// }

exemplo();