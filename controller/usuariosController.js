const bd = require("../conexion/db");

const usuariosController = {
  comprobarUsuarios(req, res) {
    let usuario = req.body.usuario; //el ultimo usuario es prescindible si metemos dentro de una llave el primer usuario

    let contra = req.body.contrasena;

    console.log(usuario);
    console.log(contra);

    bd.query(
      "SELECT * FROM usuarios WHERE nombre = ? AND contrasena= ?",
      [usuario, contra],
      (err, results) => {
        if (err) {
          console.log(err);
        }

        if (results.length == 0) {
          res.json({ mensajeError: "Usuario no eoncontrado" }).status(401);
        } else {
          res.json(results[0]).status(200);
        }

        console.log(results);
      }
    );
  },
};

module.exports = usuariosController;
