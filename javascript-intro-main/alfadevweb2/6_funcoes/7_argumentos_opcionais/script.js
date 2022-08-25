function cadastro(nome,idade) {
    if(nome == undefined|| idade == undefined) {
        console.log("Preencha o nome e a idade.");
    } else {
        console.log("Ola, bem vindo " + nome)
    }
}

cadastro("Teste", 5);
cadastro("",7);