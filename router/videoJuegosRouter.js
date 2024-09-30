express = require('express')

const videoJuegosController = require('../controller/videoJuegosController')

const router = express.Router();

router.get('/', videoJuegosController.traerVideoJuegos)

router.get('/:usuario', videoJuegosController.traeMisVideoJuegos) // se le añade para darle la variable del usuario que sea 

router.post('/', videoJuegosController.crearVideoJuego)

router.get('/queVideoJuego/:id', videoJuegosController.buscarVideoJuegos)

router.get('/todas/todasResenas', videoJuegosController.traeteTodas) 

router.get('/filtrado/:puntuacion',videoJuegosController.filtrado)

router.put('/', videoJuegosController.editarVideoJuego)

router.delete('/:id',videoJuegosController.eliminarVideoJuegos)


module.exports = router; 