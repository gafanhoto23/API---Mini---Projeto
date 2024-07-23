import express from 'express';
import { getAllLivros, getLivroById, createLivro, updateLivro, deleteLivro } from '../controllers/livrosController';

const router = express.Router();

router.get('/', getAllLivros);
router.get('/:id', getLivroById);
router.post('/', createLivro);
router.put('/:id', updateLivro);
router.delete('/:id', deleteLivro);

export default router;


