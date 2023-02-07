// a)
const imprimirNome = (nome) => {
    console.log(`Olá, ${nome}`)
}
imprimirNome('Eric')

// b)
const tabuada = (num) => {
    const mult1 = num * 1
    const mult2 = num * 2
    const mult3 = num * 3
    const mult4 = num * 4
    const mult5 = num * 5
    const mult6 = num * 6
    const mult7 = num * 7
    const mult8 = num * 8
    const mult9 = num * 9
    const mult10 = num * 10
    console.log(`
    ${num} x 1 = ${mult1}
    ${num} x 2 = ${mult2}
    ${num} x 3 = ${mult3}
    ${num} x 4 = ${mult4}
    ${num} x 5 = ${mult5}
    ${num} x 6 = ${mult6}
    ${num} x 7 = ${mult7}
    ${num} x 8 = ${mult8}
    ${num} x 9 = ${mult9}
    ${num} x 10 = ${mult10}`)
}
tabuada(3)
tabuada(5)
tabuada(7)
