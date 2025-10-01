alert("Ola boa noite");


let login = prompt("Insira seu e-mail:")
let senha = prompt("Insira sua senha:")

let loginCerto //= "gmail123"
let senhaCerta //= "senha123"

// Enquanto a senha que o usuário inserir for diferente da senha certa continuaremos pedindo para que ele insira a senha novamente.

// Do = Faça e while = enquanto, O que dá nome a estrutura dowhile, ou seja, faça enquanto.
// Dowhile executa o código uma vez antes de fazer a comparaçao.
do {
    loginCerto = prompt("Insira seu e-mail")
} while (login != loginCerto);



do {
    senhaCerta = prompt("Insira sua senha: ")
} while (senha != senhaCerta);














