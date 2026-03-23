import { Router } from 'express';
import { getLivros } from '../controllers/livroController.js';

const router = Router();

router.get('/', getLivros);

router.post('/', (req, res) => {
  res.send('Adicionar um novo livro');
});

router.patch('/', (req, res) => {
  res.send('Atualizar um livro existente');
});

router.delete('/', (req, res) => {
  res.send('Remover um livro');
});




export default router;