// ! Informe de Recolecciones

module.exports = (datosReciboPagosPdf) => {
  console.log(datosReciboPagosPdf.fechaInicial);
  let count = 0;
  let tableID = "";

  datosReciboPagosPdf.pago[0].length > 1
    ? datosReciboPagosPdf.pago[0].map(
        (item) => (count += item.Valor - item.Saldo)
      )
    : datosReciboPagosPdf.pago.map(
        (item) => (count += item.Valor - item.Saldo)
      );

  const separadorMiles = (numero, separador = ".") => {
    if (typeof numero !== "number" || !Number.isInteger(numero)) {
      return null;
    }
    numero = String(numero);
    return numero.replace(/\B(?=(\d{3})+(?!\d))/g, separador);
  };

  datosReciboPagosPdf.pago[0].length > 1
    ? datosReciboPagosPdf.pago[0].map(
        (item) =>
          (tableID += ` 
          <tr class="table-head-tr-items">

                  <td class="table-body-td">${
                    item.Metodo_Pago !== null ? item.Metodo_Pago : ""
                  }</td>
                  <td class="table-body-td">${
                    item.Cuenta !== null ? item.Cuenta : ""
                  }</td>
                  <td class="table-body-td">${
                    item.Recibo !== null ? item.Recibo : ""
                  }</td>
                  <td class="table-body-td">${
                    item.Fecha_Pago !== null
                      ? item.Fecha_Pago.substr(0, 10)
                      : ""
                  }</td>
                  <td class="table-body-td">${
                    item.Numero !== null ? item.Numero : ""
                  }</td>
                  <td class="table-body-td">${
                    item.Fecha !== null ? item.Fecha.substr(0, 10) : ""
                  }</td>
                  <td class="table-body-td">${
                    item.Valor !== null ? separadorMiles(item.Valor) : ""
                  }</td>
                  <td class="table-body-td">${separadorMiles(
                    item.Valor - item.Saldo
                  )}</td>

          </tr>`)
      )
    : datosReciboPagosPdf.pago.map(
        (item) =>
          (tableID += `
         <tr class="table-head-tr-items">
                <td class="table-body-td">${
                  item.Metodo_Pago !== null ? item.Metodo_Pago : ""
                }</td>
                <td class="table-body-td">${
                  item.Cuenta !== null ? item.Cuenta : ""
                }</td>
                <td class="table-body-td">${
                  item.Recibo !== null ? item.Recibo : ""
                }</td>
                <td class="table-body-td">${
                  item.Fecha_Pago !== null ? item.Fecha_Pago.substr(0, 10) : ""
                }</td>
                <td class="table-body-td">${
                  item.Numero !== null ? item.Numero : ""
                }</td>
                <td class="table-body-td">${
                  item.Fecha !== null ? item.Fecha.substr(0, 10) : ""
                }</td>
              <td class="table-body-td">${
                item.Valor !== null ? separadorMiles(item.Valor) : ""
              }</td>
                <td class="table-body-td">${separadorMiles(
                  item.Valor - item.Saldo
                )}</td>
          </tr>`)
      );

  return `

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
    @page {
  size: A4;
}

html,
body {
  margin: 0;
}

.contenedor-pdf {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 2%;
  height: 793px;
}

/* !Table Header */
.table-header {
  width: 95%;
  margin: 0 auto;
}

.table-header__titles {
  font-size: 15px;
}

.table-header__th-titles {
  width: 70%;
}

.table-header__tr {
}

.header__image-logo {
  width: 100%;
}

.span--title {
  font-size: 10px;
  text-align: center;
  display: block;
  width: 100%;
}
/* !Table Fechas */

.table-fechas {
  width: 95%;
  margin: 0 auto;
}

/* !Table Info */

.table-info {
  border-collapse: collapse;
  border: 1px solid black;
  width: 95%;
  margin: 0 auto;
}

.table-info__head {
  width: 100%;
}

.table-head-tr-superiores {
}

.table-info__head-th-superiores {
}

.table-head-tr {  NNf
}

.table-head-tr-items{
  border: 1px solid black;
  border-top: transparent;
  border-right: transparent;
}

.table-head-th {
  font-size: 14px;
}

.table-body-td {
  text-align: center;
}

/* !Table  */

.table-subtitle {
  position: absolute;
  bottom: 5%;
  right: 5%;
  width: 90%;
}

.table-subtitle__td {
}

.table-body-td-vacio {
  width: 50%;
}

    </style>
  </head>
  <body>
    <main class="contenedor-pdf">
      <table class="table-header">
        <thead class="table-header__thead">
          <tr class="table-header__tr">
            <th class="table-header__th-image">
              <img
                class="header__image-logo"
                src="https://firebasestorage.googleapis.com/v0/b/react-chat-930bc.appspot.com/o/Logo.png?alt=media&token=06a8dc4b-a0a8-4ca7-8eda-0470d2f9c5c4"
                alt="logo"
              />
            </th>
            <th class="table-header__th-titles">
              <h1 class="table-header__titles">
                BIO-RESIDUOS S.A.S
                <br />
                900808189-7
                <br />
                RECOLECCIONES Y DISPOSICIÓN FINAL DE RESIDUOS BIOLOGICOS,
                SIMILARES E INDUSTRIALES
                <br />
                Cra. 3ª No. 21-60 Of 201- Tel. 7827275-7811125 - Telefax 7815219
              </h1>
            </th>
            <th class="table-header__th-image">
              <img
                class="header__image-logo"
                src="https://firebasestorage.googleapis.com/v0/b/react-chat-930bc.appspot.com/o/Logo.png?alt=media&token=06a8dc4b-a0a8-4ca7-8eda-0470d2f9c5c4"
                alt="logo"
              />
            </th>
          </tr>
        </thead>
      </table>
      <hr />
      <span class="span--title">Listado de Clientes(Filtrado por Fechas)</span>
      <table class="table-fechas">
        <thead class="table-fechas__head">
          <tr class="table-fechas__head-tr">
            <th class="table-fechas__head-th">Desde:${
              datosReciboPagosPdf.fechaInicial
                ? datosReciboPagosPdf.fechaInicial
                : ""
            }</th>
            <th class="table-fechas__head-th">HASTA:${
              datosReciboPagosPdf.fechaFinal
                ? datosReciboPagosPdf.fechaFinal
                : ""
            }</th>
            <th class="table-fechas__head-th">
              <i>Impreso: ${datosReciboPagosPdf.fechaActual}</i> 
             </th>
          </tr>
        </thead>
      </table>
      <table class="table-info" border="1">
        <thead class="table-info__head">
          <tr class="table-head-tr-superiores">
            <th colspan="3" class='table-info__head-th-superiores'>${
              datosReciboPagosPdf.nombreCompania
            }</thr>
            <th colspan="3" class='table-info__head-th-superiores'>NIT:${
              datosReciboPagosPdf.nit
            }</th>
            <th colspan="2" class='table-info__head-th-superiores'>TEL:</th>
          </tr>
          <tr class="table-head-tr">
            <th class="table-head-th">FORMA DE PAGO</th>
            <th class="table-head-th">No PAGO</th>
            <th class="table-head-th">RC. AUXILIAR</th>
            <th class="table-head-th">FECHA PG.</th>
            <th class="table-head-th">No FACT.</th>
            <th class="table-head-th">FECHA FACT.</th>
            <th class="table-head-th">VR. FACTURA</th>
            <th class="table-head-th">VR. RECAUDO</th>
          </tr>
        </thead>
        <tbody>

         ${tableID}

        </tbody>
      </table>

      <table class='table-subtitle'>
          <tbody class='table-subtitle__body'>
              <tr >
                  <td class='table-body-td-vacio'></td>
                  <td class='table-subtitle__td'>Total Pagos: <b>${
                    datosReciboPagosPdf.pago[0].length > 1
                      ? datosReciboPagosPdf.pago[0].length
                      : datosReciboPagosPdf.pago.length
                  }</b></td>
                  <td class='table-subtitle__td'>Total Recaudado:<b>
                   ${separadorMiles(count)}
                  </b></td>
              </tr>
          </tbody>
      </table>
    </main>
  </body>
</html>

`;
};
