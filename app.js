// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const contenedor = document.getElementById('listaAmigos');
const name = document.getElementById('amigo');

const amigos = [];

function agregarAmigo() {
    if (name.value === '') {
        alert('Debes escribir un nombre');   
    }else{
        const amigo = name.value;
        amigos.push(amigo);
        const li = document.createElement('li');
        li.innerHTML = amigo;
        contenedor.appendChild(li);
        console.log(amigos);
        name.value = '';
    }
}