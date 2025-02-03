listaNomes= []


function adicionarAmigo() {
    let campoNome = document.getElementById("amigo").value.trim();
    if (campoNome != null && campoNome.length > 1) {
        primeiraLetraMaiuscula = campoNome.charAt(0).toUpperCase() + campoNome.substring(1);
        if (listaNomes.includes(primeiraLetraMaiuscula)) {
            alert(primeiraLetraMaiuscula+ " Já esta inserido!");
        }else{
            listaNomes.push(primeiraLetraMaiuscula);
            limparCampo();
            let listaAmigos = document.getElementById("listaAmigos");
            let novoLi = document.createElement('li');
            novoLi.setAttribute('id', primeiraLetraMaiuscula);
            
            let icone = document.createElement('img');
            icone.src = "assets/close.png";
            icone.className = "icone";
            icone.addEventListener('click', function (){excluirAmigo(novoLi)});
            
            novoLi.appendChild(icone);
            novoLi.appendChild(document.createTextNode(primeiraLetraMaiuscula)); 
            listaAmigos.appendChild(novoLi);
        }
        limparResultado();
    }else{
        alert("Por favor, insira um nome")
    }

}
function excluirAmigo(item) {
    if (item) {
        let nome = item.getAttribute("id");
        item.remove(); // Remove o <li> do DOM

        // Remove o nome da lista de nomes
        let index = listaNomes.indexOf(nome);
        if (index !== -1) {
            listaNomes.splice(index, 1);
        } else {
            console.log("Nome não encontrado:", nome);
        }
    }
}


function sortearAmigo(){
    if (listaNomes == null || listaNomes.length === 0){
        alert("Por favor, insira um nome")
        limparResultado();
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

function limparLista(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    listaNomes = [];
}
function limparResultado(){
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = '';
}
function limparCampo() {
    let campoNome = document.getElementById("amigo")
    campoNome.value = '';
    campoNome.focus();
}