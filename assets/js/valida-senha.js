var nomeUser;
var senhaUser;

var nome = document.querySelector(".login__entrada__nome");

nome.addEventListener("input", function () {
  nomeUser = this.value;
});

var senha = document.querySelector(".login__entrada__senha");

senha.addEventListener("input", function () {
  senhaUser = this.value;
});

var botao = document.querySelector(".botao__entrada");

botao.addEventListener("click", function (event) {
  event.preventDefault();

  var deuCerto = validaSenha(nomeUser, senhaUser);
  if (deuCerto == true) {
    location.href = "inicio.html";
  } else {
    var campoNomeErro = document.querySelector(".login__entrada__nome");
    var CampoSenhaErro = document.querySelector(".login__entrada__senha");
    var mensagemErro = document.querySelector(".mensagem__erro");
    campoNomeErro.classList.add("login__erro");
    CampoSenhaErro.classList.add("login__erro");
    mensagemErro.textContent = "Usuário ou Senha estão errados";
  }
});

function validaSenha(nomes, senhas) {
  var senhaCerta = "dfuse";
  var nomeCerto = "demetrio";

  if (nomeCerto == nomes && senhaCerta == senhas) {
    return true;
  }
}
