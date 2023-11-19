const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Calculo de rank baseado na quantidade de vitórias - quantidade de derrotas

function calcularRank(vitorias, derrotas) {
    const saldo = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldo, nivel };
}

//Adicionado sistema para solicitar que a pessoa adicione a quantidade de vitorias e derrotas que o player teve 

rl.question('Digite o número de vitórias: ', (vitorias) => {
    rl.question('Digite o número de derrotas: ', (derrotas) => {
        const { saldo, nivel } = calcularRank(parseInt(vitorias), parseInt(derrotas));
        console.log(`O Herói tem saldo de ${saldo} e está no nível de ${nivel}`);
        rl.close();
    });
});
