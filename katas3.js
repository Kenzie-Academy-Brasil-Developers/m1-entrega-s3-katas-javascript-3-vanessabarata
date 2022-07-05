const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1(n) {
let meuRetorno = []

    for (let i = 1; i <= n; i++) {
        meuRetorno.push(i)
    }
return meuRetorno
}
console.log(kata1(25))

function kata2(n) {
let meuRetorno = []

    for (let i = 25; i >= n; i--) {
        meuRetorno.push(i)
    }
return meuRetorno
}
console.log(kata2(1))

function kata3(n) {
let meuRetorno = []

    for (let i = -1; i >= n; i--) {
        meuRetorno.push(i)
    }
return meuRetorno
}
console.log(kata3(-25))

function kata4(n) {
let meuRetorno = []

    for (let i = -25; i <= n; i++) {
        meuRetorno.push(i)
    }
return meuRetorno
}
console.log(kata4(-1))

function kata5(n) {
let meuRetorno = []

    for (let i = 25; i >= n; i--) {

        if (i % 2 != 0) { 
        meuRetorno.push(i)
        }
    }
return meuRetorno
}
console.log(kata5(-25))

function kata6(n) {
let meuRetorno = []

    for (let i = 1; i <= n; i++) {

        if (i % 3 == 0) { 
        meuRetorno.push(i)
        }
    }
return meuRetorno
}
console.log(kata6(100))

function kata7(n) {
let meuRetorno = []

    for (let i = 1; i <= n; i++) {

        if (i % 7 == 0) { 
        meuRetorno.push(i)
        }
    }
return meuRetorno
}
console.log(kata7(100))

function kata8(n) {
let meuRetorno = []

    for (let i = 100; i >= n; i--) {

        if (i % 3 == 0 || i % 7 == 0) { 
        meuRetorno.push(i)
        }
    }
return meuRetorno
}
console.log(kata8(1))

function kata9(n) {
let meuRetorno = []

    for (let i = 1; i <= n; i++) {

        if (i % 2 != 0 && i % 5 == 0) { 
        meuRetorno.push(i)
        }
    }
return meuRetorno
}
console.log(kata9(100))

function kata10(array) {
    return array
}
console.log(kata10(sampleArray))

function kata11(array) {
let meuRetorno = []

    for (let i = 0; i < array.length; i++) {

        if(array[i] % 2 == 0) {
            meuRetorno.push(i)
        }
    }
return meuRetorno  
}
console.log(kata11(sampleArray))

function kata12(array) {
let meuRetorno = []

    for (let i = 0; i < array.length; i++) {

        if(array[i] % 2 != 0) {
            meuRetorno.push(array[i])
        }
    }
return meuRetorno
}
console.log(kata12(sampleArray))

function kata13(array) {
let meuRetorno = []

    for (let i = 0; i < array.length; i++) {

        if(array[i] % 8 == 0) {
            meuRetorno.push(array[i])
        }
    }
return meuRetorno
}
console.log(kata13(sampleArray))

function kata14(array) {
    let meuRetorno = []
    let quadrado = 0

    for (let i = 0; i < array.length; i++) {
        quadrado = array[i] * array[i]
        meuRetorno.push(quadrado)
    }
return meuRetorno
}
console.log(kata14(sampleArray))

function kata15(n) {
let soma = 0

    for (let i = 1; i <= n; i++) {
        soma  += i
    }
return soma
}
console.log(kata15(20))

function kata16(array) {
let soma = 0

    for (let i = 0; i < array.length; i++) {
    soma = soma + array[i]
    }
return soma   
}
console.log(kata16(sampleArray))

function kata17(array) {

let min = Math.min(...array)
   return min 
}
console.log(kata17(sampleArray))

function kata18(array) {
    let max = Math.max(...array)
    return max 
 }
 console.log(kata18(sampleArray))