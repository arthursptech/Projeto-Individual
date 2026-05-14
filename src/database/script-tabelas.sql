-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE ost;

USE ost;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(60),
	senha VARCHAR(50)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);

CREATE TABLE ranking (
	id INT PRIMARY KEY AUTO_INCREMENT,
	qtd_acertos INT,
	dtHrRegistro DATETIME DEFAULT NOW(),
	fkUsuario INT,
	CONSTRAINT cFkUsuario FOREIGN KEY (fkUsuario)
	REFERENCES usuario(id)
);

CREATE TABLE perguntas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    questao VARCHAR(3)
);

CREATE TABLE alternativas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(60),
    origem VARCHAR(60),
    tipo TINYINT,
    fkPergunta INT REFERENCES perguntas (id)
);


CREATE TABLE respostasUser (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fkQuestao INT REFERENCES perguntas (id),
    fkAlternativa INT REFERENCES alternativas (id),
    fkUsuario INT REFERENCES usuario (id)
);

INSERT INTO alternativas (titulo, origem, tipo, fkPergunta) VALUES
('Test Drive', 'Como Treinar seu Dragão', 1, 1),
(null, 'Robot Trains', 0, 1),
(null, 'Kung Fu Panda', 0, 1),
(null, 'O Rei Leão', 0, 1);


INSERT INTO perguntas (questao) VALUES
('Q1'),
('Q2'),
('Q3'),
('Q4'),
('Q5'),
('Q6'),
('Q7'),
('Q8'),
('Q9'),
('Q10');

select questao, alternativas.* from alternativas JOIN perguntas on fkPergunta = perguntas.id WHERE questao = 'Q1';

select * from usuario;

select quiz.*, a.* from quiz join alternativas a on alternativa1 = a.id;

-- Buscar top usuário
SELECT fkUsuario, nome FROM ranking JOIN usuario ON fkUsuario = usuario.id ORDER BY qtd_acertos DESC LIMIT 1;

-- Gráfico
SELECT nome, fkUsuario, qtd_acertos FROM ranking JOIN usuario ON fkUsuario = usuario.id ORDER BY qtd_acertos DESC;

-- Buscar a média de acertos do quiz
SELECT ROUND(AVG(qtd_acertos),0) media FROM ranking;