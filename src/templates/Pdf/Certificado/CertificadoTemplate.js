module.exports = (dataCertificadoPdf) => {
  console.log(dataCertificadoPdf);
  let datosTable = "";

  dataCertificadoPdf.map((item) => {
    datosTable += `
        <tr>
          <td  class="t-residuos__body" >${item.residue_physical_state}</td>
          <td  class="t-residuos__body" >${item.residue}</td>
          <td  class="t-residuos__body" >${item.confirmed_weight}</td>
        </tr>`;
  });

  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pruebas</title>
    <style>
      body {
  padding: 0;
  margin: 0;
}

.contenedor-pdf {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 2%;
  /* background-color: red; */
  height: 1100px;
}

.t-header {
  border-collapse: collapse;
  width: 90%;
  margin: 0 auto;
  text-align: center;
}

.t-header__image {
  width: 100px;
}

.t-header__title,
.t-header__subtitle {
  width: 90%;
  font-size: 8px;
}

.t-subtitle {
  border-collapse: collapse;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
  /* background-color: blue; */
}

.contenedor-paragraph {
  width: 90%;
  margin: 10px auto;
  /* background-color: red; */
}

.paragraph {
  font-size: 15px;
}

.t-residuos {
  border-collapse: collapse;
  width: 90%;
  height: 380px;
  margin: 0 auto;
  text-align: center;
}

.t-residuos__head{
  height: 10px;
  vertical-align: top;
}

.t-residuos__body{
  height: 30px;
  vertical-align: top;
}

.contenedor-subparagraph,
.contenedor-subparagraph-left {
  width: 90%;
  margin: 10px auto;
  font-size: 15px;
}

.contenedor-subparagraph-left {
  text-align: end;
}

.t-footer {
  text-align: center;
  width: 90%;
  margin: 0 auto;
  font-size: 13px;
}

.t-footer__images {
  float: right;
  width: 100px;
}

.t-footer__td {
  background-color: red;
}

    </style>
  </head>
  <body>
    <main class="contenedor-pdf">
      <table class="t-header" border="1" text-align="center">
        <tr>
          <th rowspan="2">
            <img
              class="t-header__image"
              src="https://firebasestorage.googleapis.com/v0/b/react-chat-930bc.appspot.com/o/Logo.png?alt=media&token=06a8dc4b-a0a8-4ca7-8eda-0470d2f9c5c4"
              alt="hello"
            />
          </th>
          <th class="t-header__title" colspan="3">
            <h1>Document</h1>
          </th>
        </tr>
        <tr>
          <th class="t-header__subtitle" colspan="3">
            <h1>CERTIFICACIÓN DE SERVICIO</h1>
          </th>
        </tr>
        <tr>
          <td>
            <span>Fecha de emisión: 27 de Marzo de 2015</span>
          </td>
          <td>
            <span>Versión : 1.0</span>
          </td>
          <td>
            <span>Proceso : Gestión Ambiental</span>
          </td>
          <td>
            <span>Página : 1:1</span>
          </td>
        </tr>
      </table>

      <table class="t-subtitle">
        <tr>
          <th>
            <span>B I O - R E S I D U O S S.A.S</span>
          </th>
        </tr>
        <tr>
          <td>
            <span>NIT. 900.808.189-7</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>CERTIFICA QUE:</span>
          </td>
        </tr>
      </table>

      <div class="contenedor-paragraph">
        <span class="paragraph">
          Que la entidad que lleva por razón social <b>${dataCertificadoPdf[0].nombreCompania}</b> con
          NIT No. <b>${dataCertificadoPdf[0].nit}</b>, ubicada en <b>${dataCertificadoPdf[0].company_address}</b> realizó la
          entrega de los siguientes residuos peligrosos durante el periodo
          transcurrido del <b>FALTA</b> al <b>FALTA</b> </span
        >
      </div>

      <table class="t-residuos">
        <tr class="t-residuos__head" >
          <th>Tipo de Residuo</th>
          <th>Descripcion</th>
          <th>Peso Kg</th>
        </tr>
        ${datosTable}
      </table>

      <hr />

      <div class="contenedor-subparagraph">
        <span>
          Los residuos aquí relacionados fueron sometidos a tratamiento
          (Incineración) en la Planta de Incineración de la empresa
          <b>BIO-RESIDUOS</b>, ubicada en la ciudad de Montería, departamento de
          Córdoba.
        </span>
      </div>

      <div class="contenedor-subparagraph">
        <span>
          Las cenizas provenientes del proceso de incineración son enviadas a la
          empresa <b> INGEAMBIENTE DEL CARIBE S.A E.S.P.</b> para una adecuada
          disposición final en Celdas de Seguridad.
        </span>
      </div>

      <div class="contenedor-subparagraph">
        <span >
          Este certificado se expide a solicitud del interesado a los días <b>${dataCertificadoPdf[0].fechaActual}</b>
        </span>
      </div>

      <div class="contenedor-subparagraph-left">
        <span >No. Certificado: <b>${dataCertificadoPdf[0].work_plan_no}</b></span>
      </div>

      <table class="t-footer">
        <tr>
          <td>
            <img
              class="t-footer__images"
              src="https://firebasestorage.googleapis.com/v0/b/react-chat-930bc.appspot.com/o/Logo.png?alt=media&token=06a8dc4b-a0a8-4ca7-8eda-0470d2f9c5c4"
              alt=""
            />
          </td>

          <td>
            <img
              class="t-footer__images"
              src="https://firebasestorage.googleapis.com/v0/b/react-chat-930bc.appspot.com/o/Logo.png?alt=media&token=06a8dc4b-a0a8-4ca7-8eda-0470d2f9c5c4"
              alt=""
            />
          </td>
        </tr>

        <tr>
          <td colspan="2">
            <span
              >Carrera 3 # 21-60, Oficina 201 Teléfonos 7827275 - 7811125 Fax:
              7815219.</span
            >
          </td>
        </tr>

        <tr>
          <td colspan="2">
            <span
              >E- mail: ventas@bio-residuos.com.co
              –calidad@bio-residuos.com.co</span
            >
          </td>
        </tr>

        <tr>
          <td colspan="2">
            <span>Celulares 3045666839-3015054585</span>
          </td>
        </tr>

        <tr>
          <td colspan="2">
            <span>Montería – Córdoba</span>
          </td>
        </tr>

        <tr>
          <td colspan="2">
            <span
              >“CONTRIBUIR CON EL CUIDADO DEL MEDIO AMBIENTE ESTA EN MANOS DE
              TODOS”</span
            >
          </td>
        </tr>
      </table>
    </main>
  </body>
</html>

    `;
};
