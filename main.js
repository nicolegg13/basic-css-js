// const firstname = 'Nicole'
// const lastname = 'Silva'
// const fullName = `${firstname} ${lastname}`
// console.log('nome: firstname, lastname') //saída: nome: firstname, lastname
// console.log(`nome: ${firstname.toLowerCase()} ${lastname.toUpperCase()}`) //saída: nome: nicole SILVA

// const names = "Alice,Bob,Charlie"
// console.log(names.split(',')) //saída: [ 'Alice', 'Bob', 'Charlie' ]

// //names.reverse() //erro ?
// names[1] = 'alterei'
// console.log(names) //saída: Alice,alterei,Charlie
// names.indexOf('Bob') //saída: -1 (porque 'Bob' foi alterado para 'alterei')
// console.log(names.includes('Charlie')) //saída: true
// names.length //saída: 3

// const number = 5
// console.log(typeof number) //saída: 'number'
// console.log(number.toString()) //saída: '5'
// console.log(typeof number.toString()) //saída: 'string'

// console.log(2 == 3) //saída: false

// const x = null;
// const y = undefined;
// console.log(x == y) //saída: true

// //MAP
//  const numbers = [1, 2, 3, 4, 5]
//  //multiplicar cada um por 2 e joga em uma nova lista
//  // a função vai ser executada para cada elemento (recebe item atual)
//  const doubled = numbers.map(function(n) {
//      return n * 2;
//  })
//  // ou map(num => num * 2)
//  console.log(doubled) //saída: [2, 4, 6, 8, 10]  
// // com array de objetos
// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
// ];
// const ageBy2 = users.map((user) => {
//     return { ...user, age: user.age * 2 }; //spread operator - copia as propriedades do objeto e altera a idade
// });
// console.log(ageBy2); //saída: [{ name: 'Alice', age: 50 }, { name: 'Bob', age: 60 }, { name: 'Charlie', age: 70 }]

// //FILTER
// const ages = [15, 22, 18, 30, 25]
// //colocar idades pares em nova lista
// /* const evenAges = ages.filter(function(n) {
//      return n % 2 === 0; //retorna se for true
//  }) */
// const even = ages.filter((number) => number % 2 === 0);
// console.log(evenAges) //saída: 22, 18, 30
// //com array de objetos
// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
// ];
// const ageAbove30 = users.filter((user) => user.age >= 30); 
// console.log(ageAbove30) //saída: [{ name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]

// //REDUCE - reduzir todos os valores da lista a um só
// //soma das idades: recebe atual e soma acumulada
// const ageSum = ages.reduce(function(n, accumulator) {
//     return accumulator + n;
// }, 0) //inicializa accumulator como 0
// console.log(ageSum) //saída: 110


// //OBJETO
// const person = {
//     fiName: "Ana",
//     laName: "Silva",
//     age: "10",
//     hobbies: ['filme', 'livro', 'jogo'],
//     dog: {
//         name: "luna",
//         age: 2,
//     },
// };
// // //acessar propriedades
// // const finame = person.fiName; ...
// const {fiName: priNome /*renomeia*/, laName, age, hobbies, dog} = person; //desestruturação - acessa as propriedades diretamente

// console.log(`nome: ${priNome} ${laName} \nidade: ${age} \nhobbies: ${hobbies} \nfavorito: ${hobbies[0]}`)

// //add propriedade
// person.email = "ana@email.com"
// console.log(person) //saída: age : "10" dog : {name: 'luna', age: 2} email : "ana@email.com" fiName : "Ana" hobbies : (3) ['filme', 'livro', 'jogo'] laName : "Silva" [[Prototype]] : Object
// console.log(person.dog.name) //saída: luna

// //LISTA COM OBJETO
// const todo = [
//     {
//         id: 1,
//         title: 'Estudar JavaScript',
//         completed: false
//     },
//     {
//         id: 2,
//         title: 'Fazer exercícios',
//         completed: true
//     },
//     {
//         id: 3,
//         title: 'Ler um livro',
//         completed: false
//     }
// ]
// //acessar propriedades do objeto dentro da lista
// console.log(todo[0].title) //saída: Estudar JavaScript
// todo.forEach(function(item) {
//     console.log(`id: ${item.id} - título: ${item.title} - concluído: ${item.completed}`)
// })


// //JSON
// //lista para JSON
// const todoJSON = JSON.stringify(todo)

// //JSON para lista
// const todoLista = JSON.parse(todoJSON)


// //LOOP
//  const cars = ['Audi', 'BMW', 'Lamborghini', 'Aston Martin']
//     //for
// for (let i = 0; i < cars.length; i++) {
//     console.log(`nome: ${cars[i]}`)
// }
// for (const car of cars) {
//     console.log(car) //saída: Audi, BMW, Lamborghini, Aston Martin
// }

//     //forEach
// cars.forEach(function(car, index) { 
//     console.log(`índice: ${index} - nome: ${car}`) //saída: índice: 0 - nome: Audi, índice: 1 - nome: BMW, ...
//     console.log(car) 
// })

//     //for in
// for (property in person) {
//     //console.log(property)
//     console.log(person[property])
// }

// //     //for of
// const iterable = [10, 20, 23];
// for (let value of iterable) {
//     console.log(value); //saída: 10, 20, 23
// }
// //objetos
// const people = [
//     { name: "Ana", age: 12 },
//     { name: "Bia", age: 72 },
// ];

// for (let person of people) {
//     console.log(person);
// } //saída: { name: "Ana", age: 12 }, { name: "Bia", age: 72 }

    //while
// let i = 0;
// while (i < cars.length) {
//     console.log(`índice: ${i} - nome: ${cars[i]}`) //saída: índice: 0 - nome: Audi, índice: 1 - nome: BMW, ...
//     i++;

//     if (i === 3) {
//         console.log('Chegou no índice 3, saindo do loop.');
//         break; //quebra loop
//     }
// }
// const i = 0;
// const n = 0;
// while (i < 5) {
//     i++;
//     if (i === 3) {
//         continue; //pula para a próxima iteração
//     }
//     n += i;
// }
// console.log(n); //saída: 10 (1 + 2 + 4 + 5)


// //CONDICIONAIS
//     //if
// const sum = 1 + 1
// if (sum == 2) console.log('sum == 2') // true
// if (sum == "2") console.log('sum == "2"') // true
// if (sum === 2) console.log('sum === 2') // true
// if (sum === "2") console.log('sum === "2"') // false

// let a;
// if (sum === 3) {
//     a = 10;
// } else {
//     a = 20;
// }
// console.log(a) //saída: 20

// //operador ternário
// const b = (sum === 2) ? 10 : 20;
// console.log(b) //saída: 10

// //switch
// const day = 3;
// switch (day) {
//     case 2:
//         console.log('Segunda-feira');
//         break;
//     case 3:
//         console.log('Terça-feira'); //saída: Terça-feira
//         break;
//     case 4:
//         console.log('Quarta-feira');
//         break;
//     case 5:
//         console.log('Quinta-feira');
//         break;
//     case 6:
//         console.log('Sexta-feira');
//         break;
//     default:
//         console.log('Dia inválido');
// }

// //TRUTHY E FALSY
// const value = 0;
// // Valores falsy: false, 0, "", null, undefined, NaN
// if (value) console.log('value é truthy');
// else if (!value) console.log('value é falsy'); //saída: falsy
// // Valores truthy: "0", "false", [], {}, function() {}, etc

// //checar lista
// const list = [1, 2, 3]; //true
// if (list) console.log('true') //sempre true
// if (list.lenght > 0) console.log('lista não está vazia'); //false, porque length é 0


// //FUNÇÕES E ARROW FUNCTIONS
//    function sumFunction(a, b) {
//      return a + b;
//    }

// // Arrow function – função de 1 linha
//    const arrowSumFunction = (a, b = 10) => a + b;

// sumFunction(5); //saída: 15


// //POO
// class Pessoa {
//     constructor(name1, name2, age) {
//         //atributos
//         this.name1 = name1;
//         this.name2 = name2;
//         this.age = age;
//     }

//     //metodo para juntar name1 e name2
//     getFullName() {
//         console.log(`${this.name1} ${this.name2}`);
//     }

//     static hello() {
//         console.log('Hello!');
//     }

//     speak() {
//         console.log(`Olá, meu nome é ${this.name1} ${this.name2} e tenho ${this.age} anos.`);
//     }
// }

// const p1 = new Pessoa('João', 'Silva', 30);
// console.log(p1)
// //p1.getFullName(); //saída: João Silva
// Pessoa.hello(); //saída: Hello!
// p1.speak(); //saída: Olá, meu nome é João Silva e tenho 30 anos.

// //herança
// class Aluno extends Pessoa {
//     constructor(name1, name2, age, course) {
//         super(name1, name2, age); //chama o construtor da classe pai
//         this.course = course;
//     }
    
//     speak() {
//         console.log(`Olá, eu sou um aluno de ${this.course}!`);
//     }

// }
// const a1 = new Aluno('Maria', 'Oliveira', 22, 'Engenharia');
// Aluno.hello(); //saída: Hello!
// a1.speak(); //saída: Olá, eu sou um aluno de Engenharia!


// DESESTRUTURAÇÃO - extrair valores de arrays ou propriedades de objetos e passá-los para variáveis
    //array
// errado
// const n = [1, 2, 3];
// const first = n[0];
// const second = n[1];
// const third = n[2];
// console.log(first, second, third); //saída: 1 2 3

// //desestruturar array
// const [first, second, third] = n; //desestruturação do array

// //atribuição de variáveis por desestruturação
// const [a, b, ...rest] = [1, 2, 3, 4, 5, 6]
// console.log(a, b, rest); //saída: 1 2 [3, 4, 5, 6]

// //novo array a partir (incluindo) array existente
// const n2 = [1, 2, 3];
// const moren2 = [...n2, 4, 5, 6]

// console.log(n2) //saída: [1, 2, 3]
// console.log(moren2) //saída: [1, 2, 3, 4, 5, 6]

// //inverter valores de variáveis (não precisa de aux)
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a) //saída: 2
// console.log(b) //saída: 1

//     //objeto
// const user = {
//     name: 'John',
//     age: 20,
//     email: 'john@email.com',
// };
// const { name: fullName, age, email } = user; //desestruturação do objeto
// console.log(fullName);
// console.log(age);
// console.log(email);

// const { a, b, ...rest} = { a: 1, b: 2, c: 3, d: 4 }; //rest operator - pega o resto das propriedades
// console.log(a); // 1
// console.log(b); // 2
// console.log(rest); // { c: 3, d: 4 }

// const { a = 10, b = 5} = { a: 3};
// //atribui valor padrão se a propriedade não existir
// console.log(a); // 3
// console.log(b); // 5

// //acessar propriedades de objetos aninhados
// const user = {
//     name: {
//         fName = 'John',
//         lName = 'Doe',
//     };
// };
// const { name: fName, lName } = user;
// console.log(fName); //John
// console.log(lName); //Doe



//PROMISES -- promise: envia função que não congela o call stack
// const returnName = (name) => {
//     //retornar nova promise, recebe 2 parâmetros
//     //resolve: quando a promise é cumprida OU reject: deu erro
//     return new Promise((resolve, reject) => {
//         try {
//             setTimeout(() => {
//                 resolve(name);
//             }, 5000); //resolve após 5s
//         } catch (error) {
//             reject(error);
//         }
//     });
// };
// const printAge = (age) => {
//     console.log(age);
// };

// //returnName é deixada de lado e as próximas funções são executadas (printAge)
// //ela promete que vai retornar algo - call stack pega a próxima função
// //.then -- passa uma função que vai ser executada quando a promise for cumprida (resolve)
// //recebe como parâmetro o valor que foi passado no resolve
// returnName("Ana B").then((name) => console.log(name)); //saída: "Ana B" após 5s
// printAge("21");
// /*saída:
//   21
//   //espera 5s
//     Ana B
// */

//chamar API -- then e catch
function fetchUsers() { //fetch - função nativa do JS para buscar dados em uma API / URL
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json()) //response: converte para JSON
        .then((jsonResponse) => console.log(jsonResponse));
}
fetchUsers(); //chama função

//async / await
async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); //await espera a promise ser resolvida
        const jsonResponse = await response.json(); //await espera a conversão para JSON ser concluída
        console.log(jsonResponse);
    } catch (error) {
        console.log('Erro!');
    }
    
}
fetchUsers(); //chama função


//selecionar elementos do DOM -- index2.html

//selecionar add-user
// const addUserText = document.getElementById("add-user");
// //const myForm = document.querySelector(".container #my-form"); 

// console.log(addUserText); //saída: <button id="add-user">Adicionar usuário</button>
// //addUserText.innerText = "alterado"; //altera o texto para "alterado" - getElementById
// addUserText.textContent = "alterado"; //altera por querySelector
// //console.log(myForm);

// //selecionar varios elementos
// const allItems = document.querySelectorAll(".item"); //OU .items .item
// console.log(allItems); //saída: NodeList(3) [div.item, div.item, div.item]
// console.log(allItems[0]); //saída: <div class="item">Item 1</div>

// //transforma em array
// const allItemsArray = Array.from(allItems); 
// console.log(allItemsArray); //saída: [div.item, div.item, div.item

// const allItemsbyClass = document.getElementsByClassName("item");
// const allItensTag = document.getElementsByTagName("li"); //seleciona todas as tags <li>
// console.log(allItemsbyClass); //saída: HTMLCollection(3) [div.item, div.item, div.item]



//EVENTOS - mdn events
// const submitButton = document.querySelector('#submit-button');
// const myForm = document.querySelector("#my-form"); 
// const body = document.querySelector("body");

// const items = document.querySelector(".items"); //seleciona lista de itens
// //ver valor dos inputs
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');

//                         //evento de clicar, chama função event
// submitButton.addEventListener('click', function(event) {
// //previne o comportamento padrão do botão submit (tentar enviar ao ser clicado e recarregar a página)
//     event.preventDefault(); 
//     console.log('Botão clicado!'); //ao clicar no botão: Botão clicado!
//     const nameValue = nameInput.value; //pega o valor do input name
//     const emailValue = emailInput.value; //pega o valor do input email

//     if (nameValue === '' || emailValue === '') {
//         alert('Por favor, preencha todos os campos.'); //alerta se algum campo estiver vazio
//         return; //sai da função se algum campo estiver vazio
//     }

//     //mudar background do form e do body ao enviar
//     myForm.style.background = "blue";
//     body.style.background = "lightblue";

//     //alterar valor dos items para os valores dos inputs
//     items.firstElementChild.textContent = nameValue; //altera o primeiro item para o nome
//     items.children[1].textContent = emailValue;

//     //console.log(`Nome: ${nameValue}`); //saída: Nome: valor do input name
//     //console.log(`Nome: ${nameInput.value}`); //saída: Nome: valor do input name
// });

// // //ao mudar valor do input name
// // nameInput.addEventListener('change', function(event) {
// //     console.log(event.target.value); //acessar valor do input quando escuta mudança
// // })


//VALIDAR FORM
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('#submit-button');
const msg = document.querySelector('.msg');
const items = document.querySelector(".items"); //seleciona lista (vazia) de itens

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue === '' || emailValue === '') {
        //preenche classe msg acima do form
        msg.textContent = 'preencha tudo';
        msg.classList = "error"; //adiciona classe a msg

        //apos o tempo); a função abaixo vai ser executada
        setTimeout(() => {
            msg.textContent = ''; //limpa a msg
            msg.classList = ""; //remove a classe error
        }, 3000); //3s
        return;
    }

    //imprimir valores abaixo (adicionar li)
    const li = document.createElement('li');
    li.classList = "item"; //adiciona classe item
    li.innerHTML = `Nome: ${nameValue} <br /> Email: ${emailValue}`; //adiciona texto
    //adicionar li na ul
    items.appendChild(li); //adiciona li na lista de itens

    //limpar campos após submit
    nameInput.value = '';
    emailInput.value = '';
})