import livros from "../models/livrosModel.js";
import { buscalivro } from "../helpers/helpers.js";

const getAllLivros = (req, res) => {
    res.status(200).json(livros);
};

const getLivroById = (req, res) => {
    const index = buscalivro(req.params.id);
    res.status(200).json(livros[index]);
};

const createLivro = (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
};

const updateLivro = (req, res) => {
    const index = buscalivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
};

const deleteLivro = (req, res) => {
    const index = buscalivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso");
};

export { getAllLivros, getLivroById, createLivro, updateLivro, deleteLivro };