// a)
const funSoma = (num1, num2) => {
    const soma = num1 + num2
    return soma
}
console.log(funSoma(5, 5))
console.log('------------------------------')

const funSubtrair = (num1, num2) => {
    const subtrair = num1 - num2
    return subtrair
}
console.log(funSubtrair(5, 5))
console.log('------------------------------')

const funMultiplica = (num1, num2) => {
    const multiplica = num1 * num2
    return multiplica
}
console.log(funMultiplica(5, 5))
console.log('------------------------------')

const funDividi = (num1, num2) => {
    const dividir = num1 / num2
    return dividir
}
console.log(funDividi(5, 5))
console.log('------------------------------')

// b)
const num3 = parseInt(prompt(`Digite o primeiro número: `))
const num4 = parseInt(prompt(`Digite o segundo número: `))

// c)
console.log(funSoma(num3, num4))
console.log(funSubtrair(num3, num4))
console.log(funMultiplica(num3, num4))
console.log(funDividi(num3, num4))
console.log('------------------------------')

// d)
const a = funSoma(5, 5)
const b = funSubtrair(5, 5)
const c = funMultiplica(5, 5)
const d = funDividi(5, 5)
console.log(`Resultado Função Soma: ${a}
Resultado Função Subtrair: ${b}
Resultado Função Multiplicar: ${c}
Resultado Função Dividir: ${d}`)
