var database = require("../database/config")

function buscarTopUsuario() {
    console.log("Buscando o usuário que mais acertou perguntas no quiz");
    
    var instrucaoSql = `
        SELECT fkUsuario, nome FROM ranking JOIN usuario ON fkUsuario = usuario.id ORDER BY qtd_acertos DESC LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);   
}

function buscarRanking () {
    var instrucaoSql = `
    SELECT nome, fkUsuario, qtd_acertos FROM ranking JOIN usuario ON fkUsuario = usuario.id ORDER BY qtd_acertos DESC`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarTopUsuario,
    buscarRanking
};