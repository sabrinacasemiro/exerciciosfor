const $container = document.querySelector('.container');

const array = ['Marcos', 'Sabrina', 'Clarice'];

function inicializacao() {
    for(nome of array){
        imprimeNome(nome);
    }
}

function imprimeNome(nome) {
    const nomes = document.createElement('li');
    nomes.textContent = nome;
    
    $container.appendChild(nomes);



    console.log(imprimeNome);
}

inicializacao();