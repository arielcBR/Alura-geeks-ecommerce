import { produtoServices } from "../services/produto-servicos.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = document.querySelector('[data-name]').value;
    const urlImage = document.querySelector('[data-image]').value;
    const categoria = document.querySelector('[data-category]').value;
    const preco = document.querySelector('[data-price]').value;

    produtoServices.criaProdutos(nome, urlImage, categoria, preco)
        .then(resposta => {
            window.location.pathname = "/index.html"
            console.log(resposta);
        }).catch(erro => {
            console.log(erro);
        });
})