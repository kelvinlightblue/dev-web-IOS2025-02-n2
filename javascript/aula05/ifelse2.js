
// > maior que
// >= maior ou igual a
// < menor que
// <= menor ou igual a


let idade = 18



let temDinheiro = false
let temCadUnico = true

if (idade >= 18) {
    if (temDinheiro == true) {
        console.log("Vamos pagar o quebra");
    } 
    else {
        if (temCadUnico == true) {
            console.log("CNH de graça");
        } 
        else {
            console.log("Pobrinho e sem cadastro");
        }
        // console.log("Pobre demais para dirigir");
    }
} 
else {
    console.log("Muito novo para pilotar");
}

