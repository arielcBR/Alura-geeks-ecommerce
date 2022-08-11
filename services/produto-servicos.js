// GET - Leitura da database
const listaProdutos = () =>
    fetch("http://localhost:3000/produto")
    .then(resposta => resposta.json());

// POST - Escrita na database

const criaProdutos = (name, imageUrl, price, category) => {
    return fetch("http://localhost:3000/produto", { 
        method: "POST",
        headers: {
            "Content-Type": "aplication/json"
        },
        body: JSON.stringify({
            name,
            imageUrl,
            price,
            category
        })
    })
    .then(resposta => {
        if (resposta.ok) return resposta.body;
        throw new Error("Não foi possível criar o produto")
    })
}

export const produtoServices = {
    listaProdutos,
    criaProdutos
}