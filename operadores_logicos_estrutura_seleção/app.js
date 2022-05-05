const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log('Este programa vai checar se você é maior de 18 anos e tem habilitação para poder entrar no kart');
console.log('Além da sua idade, precisamos verificar se você está na lista de presença do horário.');

readLine.question('Qual o ano do seu nascimento? ', ano => {
    if(ano > 2004){
        console.log('Você não tem 18 anos, não é possível entrar no Kart.');
    }else{
        readLine.question('Você possui habilitação? (Sim/Nao) ', temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() === 'SIM')){
                console.log('Você não possui habilitação e por isso não pode entrar no Kart');
            }else{
                readLine.question('Qual é o seu nome? ', nomeLista => {
                    switch(nomeLista){
                        case 'Douglas' :
                            console.log('Bem vindo ao Kart Douglas');
                            break;
                        case 'Rafael' :
                            console.log('Bem vindo ao kart Rafael');
                            break;
                        default :
                            console.log('Você não faz parte da lista de presença')
                    }
                })
            }
        })
    }
})