let lista = [];
let listaAmigos = document.getElementById('lista-amigos');
listaAmigos.innerHTML = lista;

function adicionar() {

    let CampoNome = document.getElementById('nome-amigo');
    lista.push(CampoNome.value);
    listaAmigos.innerHTML = lista;
    CampoNome.value = '';
   




}