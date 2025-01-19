listaNomes= []


function adicionarAmigo() {
    let campoNome = document.getElementById("amigo").value
    if (campoNome != null && campoNome.length > 1) {
        primeiraLetraMaiuscula = campoNome.charAt(0).toUpperCase() + campoNome.substring(1);
        if (listaNomes.includes(primeiraLetraMaiuscula)) {
            alert(primeiraLetraMaiuscula+ " Já esta inserido!");
        }else{
            listaNomes.push(primeiraLetraMaiuscula);
            console.log(listaNomes);
            limparCampo();
            let listaAmigos = document.getElementById("listaAmigos");
            let novoLi = document.createElement('li');
            novoLi.textContent = primeiraLetraMaiuscula;
            listaAmigos.appendChild(novoLi);
        }
    }else{
        alert("Por favor, insira um nome")
    }

}
function limparLista(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    listaNomes = [];
}

function sortearAmigo(){
    if (listaNomes == null || listaNomes.length == 0){
        alert("Por favor, insira um nome")
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = '';
    }else{
        let tamanhoLista = listaNomes.length
        let posicaoAleatoria = parseInt(Math.random()*tamanhoLista +1)
        console.log(posicaoAleatoria);
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = listaNomes[posicaoAleatoria-1];
        listaNomes.innerHTML = ''
        limparCampo();
        limparLista()
    }
    
    
}

function limparCampo() {
    let campoNome = document.getElementById("amigo")
    
    campoNome.value = '';
    campoNome.focus();
}