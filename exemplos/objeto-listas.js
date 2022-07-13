"use strict";
const pessoa = {
    nome: 'Gustavo',
    idade: 20,
    profissao: 'desenvolvedor'
};
pessoa.idade = 22;
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
};
const paula = {
    nome: 'Paula',
    idade: 27,
    profissao: 'Desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoradeFutebol"] = 3] = "JogadoradeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 30,
    profissao: Profissao.Desenvolvedora
};
const Maria = {
    nome: 'Maria',
    idade: 20,
    profissao: Profissao.Desenvolvedora
};
const jessica = {
    nome: 'Jessica',
    idade: 24,
    profissao: Profissao.JogadoradeFutebol,
    materias: ['Matemática', 'Programação']
};
const monica = {
    nome: 'monica',
    idade: 24,
    materias: ['Matemática', 'Programação']
};
