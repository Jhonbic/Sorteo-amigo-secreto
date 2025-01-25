// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const contenedor = document.getElementById('listaAmigos');
const name = document.getElementById('amigo');
const contenedorSorteo = document.getElementById('resultado');


const amigos = [];

function agregarAmigo() {
    if (name.value === '') {
        alert('Debes escribir un nombre');   
    }else{
        if (contenedorSorteo.innerHTML !== '') {
            contenedorSorteo.innerHTML = '';
        }  
        const amigo = name.value;
        amigos.push(amigo);
        const li = document.createElement('li');
        li.innerHTML = amigo;
        contenedor.appendChild(li);
        name.value = '';
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
    }else{
        const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        amigos.length = 0;
        contenedor.innerHTML = '';
        const li = document.createElement('li');
        li.innerHTML = `El amigo secreto es ${amigoSorteado}`;
        contenedorSorteo.appendChild(li);
    }
}