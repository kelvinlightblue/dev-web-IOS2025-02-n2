


let doce = "Brigadeiro"
let usuario = "Kaik"
let precoDoce = 3.40


console.log(doce)
console.log(usuario)
console.log("Compre 10 brigadeiros e ganhe PIX de 5 reais")
console.log(doce + usuario);

console.log("Boa noite, "+usuario+"! Compre um(a) "+doce+" ou morra!")
// quando quero conectar duas frases/strings, posso usar o sinal de + dentro de um log

// O ato de conectar ou colar dados se chama concatenação
console.log(usuario +": Quero 3 "+doce+"s, por favor")
console.log(usuario+" valor total da venda ficou: R$ "+(precoDoce*10).toFixed(2))




let mostrar = jsonObject
var tela:String = ""

for item in jsonObject{
    var it = item["codigo"] as? String


    print("Codigo: \(it!)")
    tela.append(it!)
    tela.append("\n")
    
}

DispatchQueue.main.async {
    let alertController = UIAlertController(title: "Produto Cadastrados", message:
        ("Codigo: \(tela)\n"), preferredStyle: .alert)
    alertController.addAction(UIAlertAction(title: "OK", style: .default))
    self.present(alertController, animated: true, completion: nil)
    
}
