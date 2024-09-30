const express = require ('express')

const usuariosController = require ('../controller/usuariosController')

const router = express.Router();

router.post('/', usuariosController.comprobarUsuarios);

module.exports = router;