const gerarNumeroAleatorio = (numero => +Math.ceil(Math.random() * numero));

const exemplosFuncoes = () => {
    const numeroEscolhido = +prompt("Digite um numero:");
    const numeroGerado = gerarNumeroAleatorio(numeroEscolhido);
    console.log(numeroGerado);
};

export default exemplosFuncoes;