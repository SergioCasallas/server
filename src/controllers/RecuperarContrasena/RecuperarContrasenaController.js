const mysql = require("../../db/db");
const RecuperarContrasenaQueries = require("../../queries/RecuperarContrasena/RecuperarContrasena_queries");
const sgMail = require("@sendgrid/mail");

exports.sendEmail = async (req, res) => {
  const { datos } = req.body;
  mysql.query(
    RecuperarContrasenaQueries.recuperarContrasena(datos),
    (err, response) => {
      if (err) {
        console.log(err);
      }

      if (response.length > 0) {
        const { Email, Contraseña, Cliente } = response[0];

        console.log(Email)

        sgMail.setApiKey(process.env.APY_KEY);

        const mensaje = {
          // to: Email,
          to:"sergio.casallas@iprocess.co",
          from: process.env.from,
          subject: "Contraseña de Recuperacion",
          html: `
              <div>
                <h1>Hola ${Cliente}</h1>
                <p>La contraseña de su correo es ${Contraseña}</p>
              </div>
          `,
        };

        sgMail
          .send(mensaje)
          .then(() =>
            res.json({
              mensaje: `Se envio la contraseña al siquiente correo: ${Email}`,
            })
          )
          .catch((err) => console.log(err));
      } else {
        res.json({ error: "Datos no encontrados" });
      }
    }
  );
};
