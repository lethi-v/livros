const livros = [
    { titulo: "O Alquimista", autor: "Paulo Coelho", preco: "R$ 29,90" },
    { titulo: "1984", autor: "George Orwell", preco: "R$ 39,90" },
    { titulo: "Dom Casmurro", autor: "Machado de Assis", preco: "R$ 19,90" },
    { titulo: "A Moreninha", autor: "Joaquim Manuel de Macedo", preco: "R$ 24,90" },
];

function exibirLivros() {
    const livrosContainer = document.getElementById("livros");
    livros.forEach(livro => {
        const livroDiv = document.createElement("div");
        livroDiv.className = "livro";
        livroDiv.innerHTML = `
            <h2>${livro.titulo}</h2>
            <p>Autor: ${livro.autor}</p>
            <p>Preço: ${livro.preco}</p>
        `;
        livrosContainer.appendChild(livroDiv);
    });
}

window.onload = exibirLivros;
