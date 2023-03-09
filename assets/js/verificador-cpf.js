var botao = document.querySelector("#botao");
var somma = 0;
var numerosPrimeiroDigito = [10, 9, 8, 7, 6, 5, 4, 3, 2];
var numerosSegundoDigito = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
botao.addEventListener("click", function (event) {
  event.preventDefault();

  var cpf = document.querySelector("#cpf");

  var array = cpf.value.split("");

  for (var i = 0; i < 9; i++) {
    somma += parseInt(array[i]) * numerosPrimeiroDigito[i];
  }

  if (encontraDigito(somma % 11) == parseInt(array[9])) {
    console.log("Meus filhos são vitoriosos");
  } else {
    console.log("CPF errado");
  }

  somma = 0;
  for (var j = 0; j < 10; j++) {
    console.log(array[j], numerosSegundoDigito[j]);
    somma += parseInt(array[j]) * numerosSegundoDigito[j];
  }

  console.log(somma);
  if (encontraDigito(somma % 11) == parseInt(array[10])) {
    console.log("Meus filhos são vitoriosos2");
  } else {
    console.log("CPF errado 2");
  }
});

function encontraDigito(numero) {
  if (numero < 2) {
    return 0;
  } else {
    return 11 - numero;
  }
}

/*https://www.macoratti.net/alg_cpf.htm */
