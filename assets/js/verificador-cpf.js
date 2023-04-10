let somma = 0;
const numerosPrimeiroDigito = [10, 9, 8, 7, 6, 5, 4, 3, 2];
const numerosSegundoDigito = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

let botao = document.querySelector("#botao");

botao.addEventListener("click", function (event) {
  event.preventDefault();
 
  let cpf = document.querySelector("#cpf");
  let erro = document.querySelector(".cpf__erro");
  let cpfOk = document.querySelector(".cpf__ok");

  let array = cpf.value.split("");
 

  if( array.length == 0){
    erro.classList.add("cpf__mensagem__erro");
    erro.textContent = menssageErro(2)
    return;
  }

  for (let i = 0; i < 9; i++) {
    somma += parseInt(array[i]) * numerosPrimeiroDigito[i];
  }

  if (encontraDigito(somma % 11) != parseInt(array[9])) {
    erro.classList.add("cpf__mensagem__erro");
    erro.textContent = menssageErro(1)
    return;
  }

  somma = 0;
  for (let j = 0; j < 10; j++) {
    somma += parseInt(array[j]) * numerosSegundoDigito[j];
  }

  console.log(somma);
  if (encontraDigito(somma % 11) != parseInt(array[10])) {
    erro.classList.add("cpf__mensagem__erro");
    erro.textContent = menssageErro(1)
    return;
  }

  cpfOk.classList.add("cpf__ok");   
  cpfOk.textContent = "CPF ok" 
  
});



const menssageErro = (error) =>{
  if(error == 1){
    return "CPF incorreto";
  }
  if(error == 2){
    return "Informe o CPF";
  }
}

function encontraDigito(numero) {
  if (numero < 2) {
    return 0;
  } else {
    return 11 - numero;
  }
}

/*https://www.macoratti.net/alg_cpf.htm */
