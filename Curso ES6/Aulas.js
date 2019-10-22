

/*------------ CONCEITO DE CLASSES --------------------*/
class List {
    constructor(){
        this.data = [];     
    }
 
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List { 
    constructor (){
        super();

        this.usuario = "Matheus";
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

const minhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    minhaLista.add('Novo Todo');
}

minhaLista.mostraUsuario();

/*------------------ CONST & LET --------------------*/

const a = 3;
console.log(a);


const usuario = {
    nome: "Matheus"
};

usuario.nome = "Diego";

console.log(usuario);


function teste(x){
    let y = 2;

    if(x > 5){
        console.log(x,y);
    }
}

teste(10);


/*------------------ Array --------------------*/

const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item){

    return item + 2;
});

console.log(newArr);

const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log(sum);

const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item){
    return item === 4;
})

console.log(find);

/*------------------ Arrows --------------------*/

const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(item => item * 2 );

console.log(newArr);


const teste = () => 'teste';

console.log(teste());


const nome = () => ({ nome: 'Diego' });

console.log(nome());

/*------------------ Valor Padrao --------------------*/

const soma = (a = 3, b = 6) => a + b;

console.log(soma(1));

console.log(soma());

/*------------------ Desestruturação --------------------*/

const usuario = {
    nome: 'Matheus',
    idade: 21,
    endereco: {
        cidade: 'Pirassununga',
        estado: 'SP',
    },
};

const { nome, idade, endereco: {cidade, estado} } = usuario;

console.log(usuario);
console.log(nome);
console.log(idade);
console.log(cidade);
console.log(estado);


function mostraNome({  nome, idade }){
    console.log(nome, idade);
}

mostraNome(usuario);

/*------------------ Operadores rest/spread --------------------*/

// REST

const usuario = {
    nome: "Diego",
    idade: 23,
    empresa: "Rocketseat"
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4];

const [ a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

function soma(a, b, ...params){
    return params;
}

console.log(soma(1, 3, 4, 5, 6, 7));

// SPREAD

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario1 = {
    nome: "Matheus",
    idade: 23,
    empresa: "Rocketseat",
};

const usuario2 = {...usuario1, nome: "Gabriel"};

console.log(usuario2);

/*------------------ Exercício 1 --------------------*/

class Usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }

    isAdmin(){
        return this.admin === true;
    }
}


class Admin extends Usuario{
    constructor(email, senha){
        super(email,senha);

        this.admin = true;
    }
}

const User1 = new Usuario("email@teste.com", "senha123");
const Adm1 = new Admin("email@teste.com", "senha123");

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());

/*------------------ Exercício 2 --------------------*/

const usuarios = [
    {nome:"Matheus", idade: 25, empresa:"Rede Use"},
    {nome:"Murilo", idade: 15, empresa:"Rede Use"},
    {nome:"Diego", idade: 23, empresa:"Rocketseat"}
]; 

const idades = usuarios.map(usuario => usuario.idade);

console.log(idades);    

const trab = usuarios.filter(usuario => usuario.empresa === "Rede Use" && usuario.idade >= 18);

console.log(trab);

const goog = usuarios.find(usuario => usuario.empresa === "Google");

console.log(goog);

const calculo = usuarios
    .map(usuario => ({ ...usuario, idade: usuario.idade * 2}))
    .filter(usuario => usuario.idade <= 50);

console.log(calculo);

/*------------------  --------------------*/