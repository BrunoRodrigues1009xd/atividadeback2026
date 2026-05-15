const botao = document.getElementById("carregar");
const tabelaProdutos = document.getElementById("tabela_produtos");

botao.addEventListener('click', async () => {
    try {
        const resposta = await fetch('/api/produtos');
        const produtos = resposta.json();
        produtos.forEach(produtos => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${produtos.nome}</td>
                <td>R$ ${produtos.preco.toFixed (2)}</td>
                <td>${produtos.estoque}</td>
                `;
            tabelaProdutos.appendChild(tr);
        });
        tabelaProdutos.appendChild(`
            <tr>
                <td colspan=3>
                    Quantidade de Produtos: ${produtos.length}
                </td>
            </tr>
        `);
    } catch(erro) {
        tabelaProdutos.appendChild(`
            <tr>d
                <td colspan="3" style="color: red"; text-align: center;>
                    Não foi possível carregar os produtos, tente novamente mais tarde...
                </td>
            </tr>
        `);
        console.log("Deu ruim!")
    }
});