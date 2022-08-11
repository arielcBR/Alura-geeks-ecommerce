// GET - Leitura da database
const listaProdutos = () =>
    fetch("http://localhost:3000/produto")
    .then(resposta => resposta.json());

// POST - Escrita na database

const criaProdutos = (nome, imageUrl, categoria, preco) => {
    return fetch("http://localhost:3000/produto", { 
        method: "POST",
        headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
        body: JSON.stringify({
            name: nome,
            imageUrl: imageUrl,
            price: preco,
            category: categoria
        })
    })
    .then(resposta => {
        if (resposta.ok)
            return resposta.body;
        throw new Error("Não foi possível criar o produto")
    })
}

export const produtoServices = {
    listaProdutos,
    criaProdutos
}