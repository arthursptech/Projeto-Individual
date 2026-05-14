var rankingModel = require("../models/rankingModel");

function buscarTopUsuario(req, res) {
    rankingModel.buscarTopUsuario().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o top usuário: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarRanking(req, res) {
    rankingModel.buscarRanking().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados do ranking: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function calcularMedia(req, res) {
    rankingModel.calcularMedia().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados do ranking: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarQuiz(req, res) {
    rankingModel.buscarQuiz().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados do quiz: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
module.exports = {
    buscarTopUsuario,
    buscarRanking,
    calcularMedia,
    buscarQuiz
}