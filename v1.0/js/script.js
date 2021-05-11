// JSON mocado.:
let usersJSON = '{"usuarios":[' +
        '{"nome":"Belchior","login":"PedrooBelchior","avatar":"https://avatars.githubusercontent.com/u/26142163?v=4","repositories":"23","seguidores":"10","localizacao":"C:","url":"https://github.com/PedrooBelchior"},' +
        '{"nome":"Orlando","login":"orlandol23","avatar":"https://avatars.githubusercontent.com/u/27815856?v=4","repositories":"6","seguidores":"1","localizacao":"-","url":"https://github.com/orlandol23"},' +
        '{"nome":"VitorRodrigues","login":"VitorRodrigues22","avatar":"https://avatars.githubusercontent.com/u/42284677?v=4","repositories":"13","seguidores":"-","localizacao":"-","url":"https://github.com/VitorRodrigues22"},' +
        '{"nome":"Francklin Medeiro Rodrigues","login":"francklin999","avatar":"https://avatars.githubusercontent.com/u/60611319?v=4","repositories":"20","seguidores":"4","localizacao":"-","url":"https://github.com/francklin999"}' +
        ']}'

// Declaração de variáveis.:
let users_OBJ = JSON.parse(usersJSON);
let btnBusca = document.getElementById('btnBusca');
let btnLimpar = document.getElementById('btnLimpar');
let avatar = document.getElementById("avatar");
let cardProfile = document.getElementById("cardProfile");
let errorMsg = document.getElementById("errorMsg");

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
        errorMsg.innerHTML = 'Usuário não encontrado, por favor tente novamente!';
}
function msgInputVazio() {
        errorMsg.innerHTML = 'Por favor, digite algum nome de usuário para pesquisar!';
}
//1.Funções Habilitadoras:
function habilitarCard() {
        avatar.style.display = "block";
        cardProfile.style.display = "block";
}
function habilitaBtnLimpar() {
        btnLimpar.style.display = "block";
}
function habilitaMsgErro() {
        errorMsg.style.display = "block";
}
//2.Funções Desabilitadoras:
function desabilitaCard() {
        avatar.style.display = "none";
        cardProfile.style.display = "none";
}
function desabilitaBtnLimpar() {
        btnLimpar.style.display = "none";
}
function desabilitarMsgErro() {
        errorMsg.style.display = "none";
}
function limparInput() {
        inputBusca.value = "";
}

//Função Principal.:
btnBusca.addEventListener('click', function buscarUsuarios() {

        // Declaração de variáveis.:
        let inputBusca = document.getElementById("inputBusca").value;
        let nome = document.getElementById("nome");
        let login = document.getElementById("login");
        let repositorios = document.getElementById("repositorios");
        let seguidores = document.getElementById("seguidores");
        let localizacao = document.getElementById("localizacao");
        let url = document.getElementById("url");

        if (inputBusca === "Belchior") {
                avatar.innerHTML = '<img src="' + (users_OBJ.usuarios[0].avatar) + '"></img>'
                nome.innerHTML = 'Nome: ' + (users_OBJ.usuarios[0].nome) + '';
                login.innerHTML = 'Login: ' + (users_OBJ.usuarios[0].login) + '';
                repositorios.innerHTML = 'Repositórios: ' + (users_OBJ.usuarios[0].repositories) + '';
                seguidores.innerHTML = 'Seguidores: ' + (users_OBJ.usuarios[0].seguidores) + '';
                localizacao.innerHTML = 'Localização: ' + (users_OBJ.usuarios[0].localizacao) + '';
                url.innerHTML = 'Url: <a href="' + (users_OBJ.usuarios[0].url) + ' "> ' + (users_OBJ.usuarios[0].url) + '</a>';

                auxResultBusca();

        } else if (inputBusca === "Orlando") {
                avatar.innerHTML = '<img src="' + (users_OBJ.usuarios[1].avatar) + '"></img>'
                nome.innerHTML = 'Nome: ' + (users_OBJ.usuarios[1].nome) + '';
                login.innerHTML = 'Login: ' + (users_OBJ.usuarios[1].login) + '';
                repositorios.innerHTML = 'Repositórios: ' + (users_OBJ.usuarios[1].repositories) + '';
                seguidores.innerHTML = 'Seguidores: ' + (users_OBJ.usuarios[1].seguidores) + '';
                localizacao.innerHTML = 'Localização: ' + (users_OBJ.usuarios[1].localizacao) + '';
                url.innerHTML = 'Url: <a href="' + (users_OBJ.usuarios[1].url) + ' "> ' + (users_OBJ.usuarios[1].url) + '</a>';

                auxResultBusca();

        } else if (inputBusca === "Vitor") {
                avatar.innerHTML = '<img style="height:auto;"   src="' + (users_OBJ.usuarios[2].avatar) + '"></img>'
                nome.innerHTML = 'Nome: ' + (users_OBJ.usuarios[2].nome) + '';
                login.innerHTML = 'Login: ' + (users_OBJ.usuarios[2].login) + '';
                repositorios.innerHTML = 'Repositórios: ' + (users_OBJ.usuarios[2].repositories) + '';
                seguidores.innerHTML = 'Seguidores: ' + (users_OBJ.usuarios[2].seguidores) + '';
                localizacao.innerHTML = 'Localização: ' + (users_OBJ.usuarios[2].localizacao) + '';
                url.innerHTML = 'Url: <a href="' + (users_OBJ.usuarios[2].url) + ' "> ' + (users_OBJ.usuarios[2].url) + '</a>';

                auxResultBusca();

        } else if (inputBusca === "Francklin") {
                avatar.innerHTML = '<img src="' + (users_OBJ.usuarios[3].avatar) + '"></img>'
                nome.innerHTML = 'Nome: ' + (users_OBJ.usuarios[3].nome) + '';
                login.innerHTML = 'Login: ' + (users_OBJ.usuarios[3].login) + '';
                repositorios.innerHTML = 'Repositórios: ' + (users_OBJ.usuarios[3].repositories) + '';
                seguidores.innerHTML = 'Seguidores: ' + (users_OBJ.usuarios[3].seguidores) + '';
                localizacao.innerHTML = 'Localização: ' + (users_OBJ.usuarios[3].localizacao) + '';
                url.innerHTML = 'Url: <a href="' + (users_OBJ.usuarios[3].url) + ' "> ' + (users_OBJ.usuarios[3].url) + '</a>';

                auxResultBusca();

        } else if (inputBusca === "") {
                auxMsgErro();
                msgInputVazio();
        }
        else {
                auxMsgErro();
                msgUserNaoEncontrado();
        }

});

