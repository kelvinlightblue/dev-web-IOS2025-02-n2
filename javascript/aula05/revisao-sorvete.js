let dinheiro = 10
let precoSorvete = 2.50
let saborEscolhido = "chocolate"

if(dinheiro >= precoSorvete){
    // se o cliente tem dinheiro suficiente
    console.log("Temos os seguintes sabores: Chocolate, morango e céu-azul")
    if (saborEscolhido == "cnocolate" || saborEscolhido == "morango" || saborEscolhido == "céu-") {
        console.log("Aqui está seu sorvete de " + saborEscolhido);
    } else {
        console.log("")
    }
}



// 1. Array de tipos primitivos
// Contém valores como números, strings, booleanos, etc.
let numeros = [1, 2, 3, 4];
let frutas = ['maçã', 'banana', 'uva'];
let verdades = [true, false, true];


// 2. Array misto
// Pode conter diferentes tipos de dados.
let misto = [42, 'texto', true, null, undefined];



// 3. Array de objetos
// Cada elemento é um objeto.
let pessoas = [
    { nome: 'Ana', idade: 25 },
    { nome: 'Carlos', idade: 30 }
  ];
  


// 4. Array multidimensional (matriz)
// Um array dentro de outro array — útil para representar tabelas.
  let matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];
  


// 5. Array de funções
// Sim, você pode armazenar funções em arrays!
  let operacoes = [
    () => console.log('Olá'),
    () => 2 + 2
  ];
  


// 6. Array vazio
// Começa sem elementos, e você pode adicionar depois.
  let vazio = [];
  vazio.push('novo item');
  



