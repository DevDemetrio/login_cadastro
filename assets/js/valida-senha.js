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
    console.log("meus filhos são vitoriosos");
  } else {
    console.log("nao deu certo");
  }
});

function validaSenha(nomes, senhas) {
  var senhaCerta = "dfuse";
  var nomeCerto = "demetrio";

  if (nomeCerto == nomes && senhaCerta == senhas) {
    return true;
  } else {
    return false;
  }
}

function menErro(erros) {
  var erro = [];

  if (erros == 1) {
    erro.push("Nome de usuário errado");
    return erro;
  }
  if (erros == 2) {
    erro.push("senha errada");
    return erro;
  }
}
