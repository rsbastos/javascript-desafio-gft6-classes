const read = require('readline-sync');

class heroi {
    constructor(nome, idade, tipo, ataque) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;
    }  
    
    atacar() {  
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${this.ataque}`);        
    }
}

let mago = new heroi("Gandalf", 220, "mago", "magia");
let guerreiro = new heroi("Conan", 31, "guerreiro", "espada");
let monge = new heroi("Xin Chung Liu", 93, "monge", "artes marciais"); 
let ninja = new heroi("Shinobi", 47, "ninja", "shuriken");

let op = '';

do {
    
    console.log("----------------------------");
    console.log("  *** LISTA DE HERÓIS ***");
    console.log("----------------------------");
    console.log(`1 - ${mago.nome}, de ${mago.idade} anos`);
    console.log(`2 - ${guerreiro.nome}, de ${guerreiro.idade} anos`);
    console.log(`3 - ${monge.nome}, de ${monge.idade} anos`);
    console.log(`4 - ${ninja.nome}, de ${ninja.idade} anos`);
    console.log(" ");
    console.log("0 - Sair");
    console.log(" ")
    op = read.question("Digite um numero de heroi: ");  // Normaliza a entrada  
    console.clear();
    switch (op) {
        case '1':
            mago.atacar();
            break;
        case '2':
            guerreiro.atacar();
            break;
        case '3':
            monge.atacar();
            break;
        case '4':
            ninja.atacar();
            break;
        case '0':
            console.log("Saindo...");
            break;
        default:
            console.log("Herói inexistente");
    }

    console.log(" ")
} while (op != '0');








    

    

   
      


