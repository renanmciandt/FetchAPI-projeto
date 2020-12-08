const removeCliente = id => {
    if(confirm("Deseja deletar o cliente ?")) {
        deletaCliente(id)
    }
}

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

const exibeCliente = (cpf, nome, id) => {
    const linha = document.createElement("tr");
    const conteudoLinha = `
        <td>${cpf}</td>
        <td>${nome}</td>
        <button type="button" class="btn btn-danger" onclick="removeCliente(${id})">Excluir</button>
`;
    linha.innerHTML = conteudoLinha;
    return linha;
}

listarClientes().then( exibe => {
    exibe.forEach(indice => {
        corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id))
    })
})