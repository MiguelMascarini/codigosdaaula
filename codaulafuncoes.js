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
