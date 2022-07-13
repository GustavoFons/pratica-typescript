const pessoa = {
    nome: 'Gustavo',
    idade: 20,
    profissao: 'desenvolvedor'
}

pessoa.idade = 22;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 27,
    profissao: 'Desenvolvedora'
}    

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoradeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[],

}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 30,
    profissao: Profissao.Desenvolvedora
} 

const Maria: Pessoa = {
    nome: 'Maria',
    idade: 20,
    profissao: Profissao.Desenvolvedora
} 

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 24,
    profissao: Profissao.JogadoradeFutebol,
    materias: ['Matemática', 'Programação']
}

const monica: Estudante = {
    nome: 'monica',
    idade: 24,
    materias: ['Matemática', 'Programação']
}