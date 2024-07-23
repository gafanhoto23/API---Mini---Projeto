import livros from "../models/livrosModel.js";

function buscalivro(id) {
    return livros.findIndex(livro => livro.id === Number(id));
}

export { buscalivro };