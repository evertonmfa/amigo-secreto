let listaParticipantes = [];
let listaAmigos = document.getElementById('lista-amigos');
let CampoNome = document.getElementById('nome-amigo');
let exibirSorteados = document.getElementById('lista-sorteio');

listaAmigos.innerHTML = listaParticipantes;

function adicionar() {

    if (CampoNome.value == '') {
        alert('Informe um nome');
        return;
    }
    if (listaParticipantes.includes(CampoNome.value)){ //includes valida se exite incluso dentro do array
        alert('Usuário já existe');
        return

    }
    
    listaParticipantes.push(CampoNome.value); // .push() adiciona o valor a lista
    listaAmigos.innerHTML = listaParticipantes.join(', ');; // .join(', ') coloca add a virgula e o espaço entre os nomes preenchidos.
    CampoNome.value = '';
    


}

function sortear() {

    if ( listaParticipantes.length < 4) {

    alert('Informe ao mesnos 4 pessoas para o sorteio')
    return;
    }
        let listaSorteados = listaParticipantes;
        embaralha(listaSorteados);
        let exibirSorteados = document.getElementById('lista-sorteio');


        for (let tamanho = 0; tamanho < listaSorteados.length; tamanho++) {

            if (tamanho == listaSorteados.length - 1) {

                exibirSorteados.innerHTML = exibirSorteados.innerHTML + listaSorteados[tamanho] + ' --> ' + listaSorteados[0] + "<br>"

            }
            else {

                exibirSorteados.innerHTML = exibirSorteados.innerHTML + listaSorteados[tamanho] + ' --> ' + listaSorteados[tamanho + 1] + "<br>"
            }


        }

    
     
        
    



}


function reiniciar() {

    CampoNome.value = '';
    exibirSorteados.innerHTML = '';
    listaAmigos.innerHTML = '';
    listaParticipantes = []
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}