import { produtoServices } from "../services/produto-servicos.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = document.querySelector("#nome").value;
    console.log(nome);

    const imageUrl = document.querySelector("#imageUrl").value;
    console.log(imageUrl);

    const categoria = document.querySelector("#categoria").value;
    console.log(categoria);

    const preco = document.querySelector("#preco").value;
    console.log(preco);

    produtoServices.criaProdutos(nome, imageUrl, categoria, preco)
        .then(resposta => {
            window.location.pathname = "/index.html"
            console.log(resposta);
        }).catch(erro => {
            console.log(erro);
        });
})