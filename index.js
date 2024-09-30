const express = require ('express')
const cors = require ('cors')
const bunyan = require ('bunyan')

require('dotenv').config()

const usuarios= require('./router/usuariosRouter')
const videojuegos= require ('./router/videoJuegosRouter')

const logger = bunyan.createLogger({name:'servidor'})

const app = express();

app.use(cors());

app.use(express.json())

app.use('/usuarios', usuarios)
app.use('/videojuegos', videojuegos)


app.listen(process.env.Puerto,()=>{

    logger.info('servidor levantado');
})