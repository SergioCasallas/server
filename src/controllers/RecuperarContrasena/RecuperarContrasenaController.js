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

        sgMail.setApiKey(process.env.APY_KEY);

        const mensaje = {
          to: "sergio.casallas@iprocess.co",
          from: "rbiorutas@bio-residuos.com.co",
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
          .then((respuesta) => console.log(respuesta))
          .catch((err) => console.log(err));

        res.json({ mensaje: "Correo Enviado" });
      } else {
        res.json({ error: "Datos no encontrados" });
      }
    }
  );
};
