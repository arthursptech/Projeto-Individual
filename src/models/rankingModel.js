var database = require("../database/config")

function buscarTopUsuario() {
    console.log("Buscando o usuário que mais acertou perguntas no quiz");

    var instrucaoSql = `
        SELECT fkUsuario, nome FROM ranking JOIN usuario ON fkUsuario = usuario.id ORDER BY qtd_acertos DESC LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarRanking() {
    var instrucaoSql = `
    SELECT nome, fkUsuario, qtd_acertos FROM ranking JOIN usuario ON fkUsuario = usuario.id ORDER BY qtd_acertos DESC;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function calcularMedia() {
    var instrucaoSql = `
    SELECT ROUND(AVG(qtd_acertos),0) media FROM ranking;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarQuiz() {
    var instrucaoSql = `
    select questao, alternativas.* from alternativas JOIN perguntas on fkPergunta = perguntas.id WHERE questao = 'Q1';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarTopUsuario,
    buscarRanking,
    calcularMedia,
    buscarQuiz
};