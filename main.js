const firstname = 'Nicole'
const lastname = 'Silva'
const fullName = `${firstname} ${lastname}`
console.log('nome: firstname, lastname') //saída: nome: firstname, lastname
console.log(`nome: ${firstname.toLowerCase()} ${lastname.toUpperCase()}`) //saída: nome: nicole SILVA

const names = "Alice,Bob,Charlie"
console.log(names.split(',')) //saída: [ 'Alice', 'Bob', 'Charlie' ]

const number = 5
console.log(typeof number) //saída: 'number'
console.log(number.toString()) //saída: '5'
console.log(typeof number.toString()) //saída: 'string'

console.log(2 == 3) //saída: false

const x = null;
const y = undefined;
console.log(x == y) //saída: true