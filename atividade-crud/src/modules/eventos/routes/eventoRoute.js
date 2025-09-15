const express = require('express');
const EventoController = require('../controller/eventoController');

const router = express.Router();

// rota para agendar evento
router.post('/criar', EventoController.criar);
// rota para listar todos os eventos
router.get('/listar', EventoController.listarTodos);
// rota para listar eventos por ID
router.get('/listar/:id', EventoController.listarPorId);
//rota para editar evento por ID
router.put('editar/:id', EventoController.editar);
// rota para excluir evento por ID
router.delete('/deletar/:id', EventoController.exluirPorId);

module.exports = router;