const $container = document.querySelector('.container');

const array = ['Marcos', 'Sabrina', 'Clarice'];

function lista(){
    for(nominho of array) {
        const nome = document.createElement('li');
        nome.classList.add('nome');
        nome.textContent = nominho;

        $container.appendChild(nome);

    }
}

lista();
