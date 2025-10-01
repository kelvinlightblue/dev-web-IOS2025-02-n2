// USUARIO possui
let login = prompt("Insira seu e-mail:")
let senha = prompt("Insira sua senha:")

let loginCerto = "kel@email.com"
let senhaCerta = "senha123"


// Validar se login é o login certo e se a senha também é
if (login == loginCerto && senha == senhaCerta) {
    alert("Credencial validada.")

    alert("Opção 1: Crédito \nOpção 2: Consignado \nOpção 3: Empréstimo \nOpção 4: Renegociar \nOpção 0: Falar com atendente")

    let opcao = Number(prompt("Escolha a opção"))
    switch (opcao) {
        case 1:
        alert("Você selecionou Crédito. Redirecionando para o setor responsavel!")
            break;
    
        case 2:
        alert("Você selecionou Consignado. Redirecionando para o setor responsavel!")
            frase()
            break;
    
        case 3:
        alert("Você selecionou Empréstimo. Redirecionando para o setor responsavel!")
            break;
    
        case 4:
        alert("Você selecionou Renegociar. Redirecionando para o setor responsavel!")
            break;
    
        case 0:
        alert("Aguarde enquanto localizamos um atendente. Redirecionando para o setor responsavel!")
            break;
    
        default:
        alert("O usuário não selecionou uma opção válida. Encerrando atendimento")
            break;
    }

// Se o login ou senha que o usuário inseriu não forem iguais a que temos, ela não pode fazer login no aplicativo
} else {
    alert("Login ou senha incorretos!")
}

alert("boa noite")

// function frase {
//     alert("Atendimento realizado.")
// }


