// a)
const soma = (num1, num2) => {
    console.log(`A soma dos números ${num1} + ${num2} é: ${num1 + num2}`)
}
soma(2, 2)

// b)
const maioOuMenor = (num3, num4) => {
    console.log(`O número ${num3} é maior que o número ${num4}? ${num3 > num4}`)
}
maioOuMenor(3, 5)

// c)
const parOuImpar = (num5) => {
    console.log(`O número ${num5} é par? ${num5 % 2 === 0}`)
}
parOuImpar(4)

// d)
const descInss = (num6) => {
    return num6 - num6 * (10 /100)
}
console.log(descInss(1000))