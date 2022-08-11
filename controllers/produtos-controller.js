import { produtoServices } from "../services/produto-servicos.js";

const novoProduto = (name, price, imageUrl, alt) => {
    const card = document.createElement("div");
    card.className = "produto";

    const conteudo = `
        <img class="produto__imagem" src="${imageUrl}" alt="${alt}">
        <p class="produto__descricao">${name}</p>
        <p class="produto__preco">R$ ${Number(price).toFixed(2)}</p>
        <a class="produto__link" href="#">Ver produto</a>
    `; 
    card.innerHTML = conteudo;
    return card;
}

const produtos = document.querySelector("[data-productIndex]");
const render = async () => {
    try {
        const listaProdutos = await produtoServices.listaProdutos();
        console.log(listaProdutos);
        listaProdutos.forEach(elemento => {
            produtos.appendChild(novoProduto(elemento.name, elemento.price, elemento.imageUrl, elemento.alt));
        });
        
    } catch (erro) {
       console.error(erro); 
    }
}

render();