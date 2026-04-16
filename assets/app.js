function criar_cartao(categoria, pergunta, resposta){
    let container = document.getElementById("container")
    let cartao = document.createElement("article")
    cartao.className = 'cartao'

    cartao.innerHTML = `
        <div class="conteudo">
                <h3>${categoria}</h3>
                <div class="pergunta">
                    ${pergunta}
                </div>
                <div class="resposta">
                    ${resposta}
                </div>
            </div>
    `

    container.appendChild(cartao)
}
function adicionarNovoCartao() {
    let categoria = prompt("Coloque a categoria (ex: Programa):")
    let pergunta = prompt("Digite a sua pergunta:")
    let resposta = prompt("Digite a sua resposta:")

    if (categoria && pergunta && resposta) {
        criar_cartao(categoria, pergunta, resposta)
    }

    else {
        alert("Preencha todos os campos para criar o cartao!")
    }
}