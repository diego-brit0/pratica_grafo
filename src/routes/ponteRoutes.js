const { Router } = require('express');
const PonteController = require('../controllers/PonteController.js');

const ponteController = new PonteController();

const router = Router();

router.get('/pontes', (req, res) => ponteController.pegaTodos(req, res) );
router.get('/pontes/:id', (req, res) => ponteController.pegaUmPorId(req, res));
router.post('/pontes', (req, res) => ponteController.criarRegistro(req, res));
router.put('/pontes/:id', (req, res) => ponteController.atualiza(req, res) );
router.delete('/pontes/:id', (req, res) => ponteController.deleta(req, res) );

module.exports = router;
