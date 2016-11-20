const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  output: process.stdout,
  input: process.stdin
});

var paises = [];

function leiaNome(count, pasta){
  rl.question('Digite o nome da pasta \n', (pasta) =>{
    leiaPais(count, pasta);
  });
}

function leiaPais(count, pasta){
  if (count--) {
    rl.question('Digite o nome de um país \n', (pais) =>{
      paises.push(pais);
      leiaPais(count, pasta);
    });
  }else{
    gravaArquivo(pasta);
  }
}

function gravaArquivo(pasta){
  var print = pasta + '.txt';
  for (var i in paises) {
    fs.appendFile(pasta + '.txt',paises[i]+"\n");
  }
  rl.close();
}

leiaNome(3);
