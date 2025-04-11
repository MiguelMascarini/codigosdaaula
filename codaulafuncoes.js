//função sem retorno
function mensagem () {
    console.log('Olá, mundo')
}
mensagem()

// funcao com retorno
function soma (a, b) {
  return a + b
}
let resultado = soma(5, 6)
console.log(resultado)

console.log(soma(5, 5))

// função sem parâmetro
function mostrarHoraLocal () {
    let hora = new Date()
    console.log(`Hora atual: ${hora.toLocaleTimeString()}`)
}
mostrarHoraLocal()

// função com parâmetro
function cumprimentar(nome, idade){
  console.log(`Olá, ${nome}, sua idade é ${idade}`)
}

cumprimentar('Ana', 20)
cumprimentar('Pedro', 16)
cumprimentar('João', 17)

// funcao declarativa
mensagem()

function mensagem () {
    console.log('Olá, mundo')
}

// funcao de expressão
const mensagem1 = function(){
  console.log('Olá, mundo')
}
mensagem1()

//funcao de seta sem parâmetro ARROW FUNCTION
const saudacao = () => 'Olá, turma'
saudacao()

//funcao de seta com parâmetro
const saudacao1 = (nome) => `Olá, ${nome}`
saudacao1('Laís')


function testeVar () {
    if (true){
      var x = 10 //dentro do bloco
    }
    console.log(x)
  }
  testeVar() // 10
 
  function testeLet () {
    if (true){
      let y = 20
    }
    console.log(y)
  }
  testeLet() // y is not defined




//Exercício
//1
let str = 'Miguel'
let num = 2
let bool = true

console.log(typeof(str))
console.log(typeof(num))
console.log(typeof(bool))

//2
let n1 = 10
let n2 = 5
let n3 = 7
let media = (n1+n2+n3)/3
if (media>6) {
    console.log('Aprovado')
} else {
    console.log('Reprovado')
}

//3
chuva = true
if (chuva = true) {
    console.log("É preciso levar um guarda-chuva")
} else {
    console.log("Não é preciso levar um guarda-chuva")
}
//4
let numero = 4
console.log(numero*2)
//5
let idade = 19
if (idade>17) {
    console.log('Maior de idade')
} else {
    console.log('Menor de idade')
}
//6
function ola(nome) {
    console.log('Olá', nome)
}
ola('Miguel')
