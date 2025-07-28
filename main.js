const firstname = 'Nicole'
const lastname = 'Silva'
const fullName = `${firstname} ${lastname}`
console.log('nome: firstname, lastname') //saída: nome: firstname, lastname
console.log(`nome: ${firstname.toLowerCase()} ${lastname.toUpperCase()}`) //saída: nome: nicole SILVA

const names = "Alice,Bob,Charlie"
console.log(names.split(',')) //saída: [ 'Alice', 'Bob', 'Charlie' ]

//names.reverse() //erro ?
names[1] = 'alterei'
console.log(names) //saída: Alice,alterei,Charlie
names.indexOf('Bob') //saída: -1 (porque 'Bob' foi alterado para 'alterei')
console.log(names.includes('Charlie')) //saída: true
names.length //saída: 3

const number = 5
console.log(typeof number) //saída: 'number'
console.log(number.toString()) //saída: '5'
console.log(typeof number.toString()) //saída: 'string'

console.log(2 == 3) //saída: false

const x = null;
const y = undefined;
console.log(x == y) //saída: true

//MAP
const numbers = [1, 2, 3, 4, 5]
//multiplicar cada um por 2 e joga em uma nova lista
// a função vai ser executada para cada elemento (recebe item atual)
const doubled = numbers.map(function(n) {
    return n * 2;
})
// ou map(num => num * 2)
console.log(doubled) //saída: [2, 4, 6, 8, 10]  

//FILTER
const ages = [15, 22, 18, 30, 25]
//colocar idades pares em nova lista
const evenAges = ages.filter(function(n) {
    return n % 2 === 0; //retorna se for true
})
console.log(evenAges) //saída: 22, 18, 30

//REDUCE - reduzir todos os valores da lista a um só
//soma das idades: recebe atual e soma acumulada
const ageSum = ages.reduce(function(n, accumulator) {
    return accumulator + n;
}, 0) //inicializa accumulator como 0
console.log(ageSum) //saída: 110


//OBJETO
const person = {
    fiName: "Ana",
    laName: "Silva",
    age: "10",
    hobbies: ['filme', 'livro', 'jogo'],
    dog: {
        name: "luna",
        age: 2,
    },
};
// //acessar propriedades
// const finame = person.fiName; ...
const {fiName: priNome /*renomeia*/, laName, age, hobbies, dog} = person; //desestruturação - acessa as propriedades diretamente

console.log(`nome: ${priNome} ${laName} \nidade: ${age} \nhobbies: ${hobbies} \nfavorito: ${hobbies[0]}`)

//add propriedade
person.email = "ana@email.com"
console.log(person) //saída: age : "10" dog : {name: 'luna', age: 2} email : "ana@email.com" fiName : "Ana" hobbies : (3) ['filme', 'livro', 'jogo'] laName : "Silva" [[Prototype]] : Object
console.log(person.dog.name) //saída: luna

//LISTA COM OBJETO
const todo = [
    {
        id: 1,
        title: 'Estudar JavaScript',
        completed: false
    },
    {
        id: 2,
        title: 'Fazer exercícios',
        completed: true
    },
    {
        id: 3,
        title: 'Ler um livro',
        completed: false
    }
]
//acessar propriedades do objeto dentro da lista
console.log(todo[0].title) //saída: Estudar JavaScript
todo.forEach(function(item) {
    console.log(`id: ${item.id} - título: ${item.title} - concluído: ${item.completed}`)
})


//JSON
//lista para JSON
const todoJSON = JSON.stringify(todo)

//JSON para lista
const todoLista = JSON.parse(todoJSON)

//LOOP
const cars = ['Audi', 'BMW', 'Lamborghini', 'Aston Martin']
for (let i = 0; i < cars.length; i++) {
    console.log(`nome: ${cars[i]}`)
}
for (const car of cars) {
    console.log(car) //saída: Audi, BMW, Lamborghini, Aston Martin
}
cars.forEach(function(car) { 
    console.log(car) 
})
