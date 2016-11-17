const readline = require('readline');

const rl = readline.creatInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Digite um numero \n`, (numero) =>{
  if (isNan(numero)) {
    console.log(`$(numero) não é um numero`);
  }else {
    console.log(`$(numero) é um numero`);
    rl.close();
  }
});
