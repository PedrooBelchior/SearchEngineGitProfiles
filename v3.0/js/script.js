// Declaração de variáveis.:
let $buscador = document.querySelector('#buscador');
let $btnBusca = document.querySelector('#btnBusca');
let $btnLimpar = document.querySelector('#btnLimpar');
let $avatar = document.querySelector("#avatar_url");
let $cardProfile = document.querySelector("#cardProfile");
let $errorMsg = document.querySelector("#errorMsg");
let $inputBusca = document.querySelector("#inputBusca");

//****Funções Auxiliares.:***
$inputBusca.addEventListener('focus', () => { inputBusca.classList.remove('errorRequiredFiled'); limparInputUserName(); });
$btnLimpar.addEventListener('click', () => {
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
        auxMsgErro();
        $errorMsg.innerHTML = 'Usuário não encontrado, por favor tente novamente!';
}
function msgInputVazio() {
        auxMsgErro();
        $errorMsg.innerHTML = 'Por favor, digite algum nome de usuário para pesquisar!';
}

//1.Funções Habilitadoras:
function habilitaBuscador() {
        $buscador.style.display = "block";
}
function habilitarCard() {
        $avatar.style.display = "block";
        $cardProfile.style.display = "block";
}
function habilitaBtnLimpar() {
        $btnLimpar.style.display = "block";
        desabilitaBuscador();
}
function habilitaMsgErro() {
        $errorMsg.style.display = "block";
}

//2.Funções Desabilitadoras:
function desabilitaBuscador() {
        $buscador.style.display = "none";
}
function desabilitaCard() {
        $avatar.style.display = "none";
        $cardProfile.style.display = "none";
}
function desabilitaBtnLimpar() {
        $btnLimpar.style.display = "none";
        habilitaBuscador();
}
function desabilitarMsgErro() {
        $errorMsg.style.display = "none";
}
function limparInput() {
        inputBusca.value = "";
        document.querySelector("#avatar_url").innerHTML = '';
        document.querySelector("#name").innerHTML = '';
        document.querySelector("#login").innerHTML = '';
        document.querySelector("#public_repos").innerHTML = '';
        document.querySelector("#followers").innerHTML = '';
        document.querySelector("#location").innerHTML = '';
        document.querySelector("#html_url").innerHTML = '';
}

// DISPARO CLICK DO BOTÃO BUSCAR
$btnBusca.addEventListener('click', () => validarSeInputNaoVazio($inputBusca.value));

// LIMPO O CAMPO DE INPUT A ONDE O USER VAI DIGITAR O PROFILE
let limparInputUserName = () => $inputBusca.value = "";

// VALIDO SE O CAMPO INPUT ESTÁ PREENCHIDO PARA PROSSEGUIR COM O REQUEST
let validarSeInputNaoVazio = (userNameDigitado) => userNameDigitado != '' ? ajaxRequest(userNameDigitado) : mostrarErro();

// MOSTRO ALERTA DE ERRO
let mostrarErro = () => { msgInputVazio(); $inputBusca.classList.add('errorRequiredField'); }

// FUNÇÃO PRINCIPAL.:
function ajaxRequest(valorDigitadoInput) {
        const API = 'https://api.github.com/users/'
        fetch(`${API}${valorDigitadoInput}`)
                .then((res) => res.status !== 200 ?
                        res.json().then((e) => handlerErro(e)) :
                        res.json().then((e) => respostaPrinter(e)))
}

let handlerErro = (res) => res.message == 'Not Found' ?
        msgUserNaoEncontrado() :
        alert('Erro: ', res.message, 'Por favor, contate o administrador!');

let respostaPrinter = (res) => {
        $cardProfile.insertAdjacentHTML('afterbegin', `
                        <div id="avatar_url"><img src="${res.avatar_url}"></img></div>
                                <ul>
                                <li id="name">Nome: ${res.name}</li>
                                <li id="login">Login: ${res.login}</li>
                                <li id="public_repos">Repositórios: ${res.public_repos}</li>
                                <li id="followers">Seguidores: ${res.followers}</li>
                                <li id="location">Localização: ${res.location}</li>
                                <li id="html_url">Url: <a href="${res.html_url}" target="_blank"> ${res.html_url}</a></li>
                                </ul>
                        </div>
        `)
        auxResultBusca();
}