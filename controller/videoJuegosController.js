const bd = require("../conexion/db");

const videoJuegosController = {
  traerVideoJuegos(req, res) {
    bd.query(
      "SELECT * FROM videojuegos ORDER BY id_videojuegos DESC LIMIT 3",
      (err, results) => {
        if (err) {
          console.log(err);
        }

        res.json(results).status(200);
      }
    );
  },

  traeMisVideoJuegos(req, res) {
    let usuario = req.params.usuario; //

    bd.query(
      "SELECT * FROM videojuegos WHERE usuario_escritor = ?",
      [usuario],
      (err, resultados) => {
        if (err) {
          res.json({ error: "error en la consulta" }).status(500);
        }
        res.json(resultados).status(200);
      }
    );
  },
  crearVideoJuego(req, res) {
    let usuario = req.body.usuario_escritor;
 
    let review = req.body.review;

    let nombre = req.body.nombre;

    let puntuacion = req.body.puntuacion; // se puede usar desestructuración de objetos para simplificar la sintaxis del código
    
    
    // let {usuario_escritor,review,nombre,puntuacion} = req.body; // para dejarlo más legible

    bd.query(
      "INSERT INTO videojuegos (nombre,review,puntuacion,usuario_escritor) VALUES (?,?,?,?)",
      [nombre, review, puntuacion, usuario],
      (err, resultados) => {
        // para insertar valores en la base de datos

        if (err) {
          res.json({ error: "Error en la insercion" }).status(500);
        }

        res.json({ insercion: "okay" }).status(200);

        // console.log(resultados);
      }
    );
  },

  buscarVideoJuegos(req, res) {
    let { id } = req.params;

    bd.query(
      "SELECT * FROM videojuegos WHERE id_videojuegos =?",
      [id],
      (err, resultados) => {
        if (err) {
          res.json({ error: "Error en la consulta" }).status(500);
        }

        res.json(resultados[0]).status(200);

        // console.log(resultados);
      }
    );
  },

  editarVideoJuego(req, res) {

    // console.log(req.body);
let id= req.body.id_videojuegos;
let {nombre, review, puntuacion} = req.body; // se puede usar desestructuración de objetos para simplificar la sintaxis del código  
bd.query('UPDATE videojuegos SET nombre=?, puntuacion=?, review=? WHERE id_videojuegos=?', 
[nombre, puntuacion, review, id], (err, resultado) => {
if (err) {
  res.json({ error: "Error en la consulta" }).status(500);
}

// console.log(resultado)

res.json({ mensaje: "Okay" }).status(200);

})

  },

  eliminarVideoJuegos(req,res){
    // console.log(req.params);

    let id = req.params.id;

    bd.query('DELETE FROM videojuegos WHERE id_videojuegos=?', [id], (err, resultados) => {
     
     res.json({borrada: 'Okay' }).status(200);
      

    })
    
  },
  traeteTodas(req, res) {

    bd.query("SELECT * FROM videojuegos", (err, resultados) => {
     
      res.json(resultados).status(200);
      

      })
  },

  filtrado(req, res){

    let valor = req.params.puntuacion;

    bd.query('SELECT * FROM videojuegos WHERE puntuacion >=?', [valor], (err, resultados) => {
    
    console.log(resultados);
    // console.log(req.params); // para verificar que el valor se está enviando bien
    res.json(resultados).status(200); // para que la respuesta sea en json y el status sea 200 (ok)

    
    })

    
  }
}

module.exports = videoJuegosController;
