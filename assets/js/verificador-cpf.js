var botao = document.querySelector("#botao");
var somma = 0;
botao.addEventListener("click", function (event) {
  event.preventDefault();

  var cpf = document.querySelector("#cpf");

  var array = cpf.value.split("");

  for (var i = 0; i < 9; i++) {
    somma = array[i];
  }
  console.log(somma);
});

/*https://www.macoratti.net/alg_cpf.htm */
