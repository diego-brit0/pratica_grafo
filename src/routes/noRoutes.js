const { Router } = require('express');
const NoController = require('../controllers/NoController.js');
const PonteController = require('../controllers/PonteController.js');

const noController = new NoController();
const ponteController = new PonteController();

const router = Router();

router.get('/nos', (req, res) => noController.pegaTodos(req, res) );
router.get('/nos/:id', (req, res) => noController.pegaUmPorId(req, res) );
router.post('/nos', (req, res) => noController.criarRegistro(req, res) );
router.put('/nos/:id', (req, res) => noController.atualiza(req, res) );
router.delete('/nos/:id', (req, res) => noController.deleta(req, res) );

router.get('/nos/:noId/pontes', (req, res) => noController.pegaPontes(req, res));
router.post('/nos/:noId/pontes', (req, res) => ponteController.criarRegistro(req, res));

module.exports = router;
