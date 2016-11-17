const fs = require("fs");
const readline = require("readline");

const rl = readline.creatInterface({
  output: process.output,
  input: process.input
});

var paises = [];

function leiaNome(count){
  for (var variable in count) {
    rl.question(`Digite o nome de um país /n`, (pais) => {
        paises.push(pais);
    });
  }
  rl.question(`Digite o nome da pasta /n`, (pasta) => {
      paises.push(pasta);
  });
}

function gravaArquivo(pasta){
  for (var variable in object) {
    fs.appendFile("\.txt",nomes[i]+"\n");
  }
}
