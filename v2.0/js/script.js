// Declaração de variáveis.:
let $buscador = document.querySelector('#buscador');
let $btnBusca = document.querySelector('#btnBusca');
let $btnLimpar = document.querySelector('#btnLimpar');
let avatar = document.querySelector("#avatar_url");
let $cardProfile = document.querySelector("#cardProfile");
let $errorMsg = document.querySelector("#errorMsg");

//****Funções Auxiliares.:***
btnLimpar.addEventListener('click', function limparDados() {
        desabilitaCard();
        desabilitarMsgErro();
        desabilitaBtnLimpar();
        limparInput();
});
function auxResultBusca() {
        habilitarCard();
        habilitaBtnLimpar();
        desabilitarMsgErro();
}
function auxMsgErro() {
        habilitaMsgErro();
        habilitaBtnLimpar();
        desabilitaCard();
}
function msgUserNaoEncontrado() {
        $errorMsg.innerHTML = 'Usuário não encontrado, por favor tente novamente!';
}
function msgInputVazio() {
        errorMsg.innerHTML = 'Por favor, digite algum nome de usuário para pesquisar!';
}
//1.Funções Habilitadoras:
function habilitaBuscador(){
        $buscador.style.display = "block";
}
function habilitarCard() {
        avatar.style.display = "block";
        cardProfile.style.display = "block";
}
function habilitaBtnLimpar() {
        btnLimpar.style.display = "block";
        desabilitaBuscador();
}
function habilitaMsgErro() {
        errorMsg.style.display = "block";
}
//2.Funções Desabilitadoras:
function desabilitaBuscador(){
        $buscador.style.display = "none";
}

function desabilitaCard() {
        avatar.style.display = "none";
        cardProfile.style.display = "none";
}
function desabilitaBtnLimpar() {
        btnLimpar.style.display = "none";
        habilitaBuscador();
}
function desabilitarMsgErro() {
        errorMsg.style.display = "none";
}
function limparInput() {
        inputBusca.value = "";
}
const showData = (result) => {
        for (const campo in result) {
                if (document.querySelector('#' + campo)) {
                        document.querySelector("#" + campo).value = result[campo]
                        document.querySelector("#avatar_url").innerHTML = '<img src="' + result.avatar_url + '"></img>';
                        document.querySelector("#name").innerHTML = 'Nome: ' + result.name;
                        document.querySelector("#login").innerHTML = 'Login: ' + result.login;
                        document.querySelector("#public_repos").innerHTML = 'Repositórios: ' + result.public_repos;
                        document.querySelector("#followers").innerHTML = 'Seguidores: ' + result.followers;
                        document.querySelector("#location").innerHTML = 'Localização: ' + result.location;
                        document.querySelector("#html_url").innerHTML = 'Url: <a href="' + result.html_url + ' "> ' + result.html_url + '</a>';
                }
        }
        
}
function verificaRequest(data){
        if (data.message != "Not Found" ) {
                showData(data)
        }
        else if(inputBusca == ""){
                auxMsgErro();
                msgInputVazio();
        }
        else{
                auxMsgErro();
                msgUserNaoEncontrado();
        }
        return data;
}
//Função Principal.:
function ajaxRequest(){
        let inputBusca = document.getElementById("inputBusca").value;
        fetch(`https://api.github.com/users/` + `${inputBusca}`)
                .then(response => {
                        response.json()
                        .then(data => {verificaRequest(data)})
                        .then(auxResultBusca())

                }).catch(e => console.log('Deu erro: ' + e, message))
}
btnBusca.addEventListener('click', function buscarUsuarios() {
       ajaxRequest();
});

