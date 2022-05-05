const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const minhaPrimeiraConstanteStr = 'Minha primeira constante';
console.log(minhaPrimeiraConstanteStr);

let leituraDeCampo;
readLine.question('Digite algo: ', input => {
    leituraDeCampo = input;
    console.log(`O usuário digitou: ${leituraDeCampo}`);
});