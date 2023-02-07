// a)
const soma = (num1, num2) => {
    const somaNum = num1 + num2
    console.log(`A soma dos números ${num1} + ${num2} é: ${somaNum}`)
}
soma(2, 2)

// b)
const maiorOuMenor = (num3, num4) => {
    const maiorQue = num3 > num4
    console.log(`O número ${num3} é maior que o número ${num4}? ${maiorQue}`)
}
maiorOuMenor(3, 5)

// c)
const parOuImpar = (num5) => {
    const ePar = num5 % 2 === 0
    console.log(`O número ${num5} é par? ${ePar}`)
}
parOuImpar(4)

// d)
const desc10Por100 = (num6) => {
    const descInss = num6 - num6 * (10 / 100)
    return descInss
}
console.log(desc10Por100(1000))