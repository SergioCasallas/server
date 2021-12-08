// ?#################################################################################################################
// ! Saldos

module.exports = (datosReciboSaldosPdf) => {
  console.log(datosReciboSaldosPdf.fechaInicial);

  let datosTable = "";

  let numeroSaldoFacturas = 0;
  let numeroTotalSaldos = 0;

  datosReciboSaldosPdf.saldos[0].length > 1
    ? datosReciboSaldosPdf.saldos[0].map(
        (item) => (
          (numeroSaldoFacturas += item.Valor), (numeroTotalSaldos += item.Saldo)
        )
      )
    : datosReciboSaldosPdf.saldos.map(
        (item) => (
          (numeroSaldoFacturas += item.valor), (numeroTotalSaldos += item.saldo)
        )
      );

  const separadorMiles = (numero, separador = ".") => {
    if (typeof numero !== "number" || !Number.isInteger(numero)) {
      return null;
    }
    numero = String(numero);
    return numero.replace(/\B(?=(\d{3})+(?!\d))/g, separador);
  };

  datosReciboSaldosPdf.saldos[0].length > 1
    ? datosReciboSaldosPdf.saldos[0].map(
        (item) =>
          (datosTable += `<tr class="table-info__body-tr">
            <td class="table-info__body-th">${item.Numero}</td>
            <td class="table-info__body-th">${item.Fecha.substring(0, 10)}</td>
            <td class="table-info__body-th">${
              datosReciboSaldosPdf.nombreCliente
            }</td>
            <td class="table-info__body-th">${item.Limite_Pago.substring(
              0,
              10
            )}</td>
            <td class="table-info__body-th">${separadorMiles(item.Valor)}</td>
            <td class="table-info__body-th">${separadorMiles(item.Saldo)}</td>
          </tr>`)
      )
    : datosReciboSaldosPdf.saldos.map(
        (item) =>
          (datosTable += `<tr class="table-info__body-tr">
            <td class="table-info__body-th">${item.numeroFactura}</td>
            <td class="table-info__body-th">${item.limitePago.substring(
              0,
              10
            )}</td>
            <td class="table-info__body-th">${
              datosReciboSaldosPdf.nombreCliente
            }</td>
            <td class="table-info__body-th">${item.fecha.substring(0, 10)}</td>
            <td class="table-info__body-th">${separadorMiles(item.valor)}</td>
            <td class="table-info__body-th">${separadorMiles(item.saldo)}</td>
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
    <link rel="stylesheet" href="Saldos.css" />
    <style>
    /* !Proyecto Principal */
@page {
   size: A4 landscape;
}

@media print {
  @page {
    size: A4 landscape;
  }
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
  width: 50%;
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
  margin: 0 auto;
  width: 95%;
}

.table-info__head {
}

.table-info__head-tr {
}

.table-info__head-th {
}

.table-info__body {
}

.table-info__body-tr {
}

.table-info__body-th {
  text-align: center;
}

/* !Table  Price Total */

.table-subtitle {
  position: absolute;
  bottom: 5%;
  right: 5%;
  width: 90%;
}

.table-subtitle__td {
  text-align: center;
}

.table-body-td-vacio,
.table-head-th-vacio {
  width: 30%;
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
              datosReciboSaldosPdf.fechaInicial
                ? datosReciboSaldosPdf.fechaInicial
                : ""
            }</th>
            <th class="table-fechas__head-th">HASTA:${
              datosReciboSaldosPdf.fechaFinal
                ? datosReciboSaldosPdf.fechaFinal
                : ""
            }</th>
            <th class="table-fechas__head-th">
   <i>Impreso:</i> ${datosReciboSaldosPdf.fechaActual}

            </th>
          </tr>
        </thead>
      </table>

      <table class="table-info" border='1'>
        <thead class="table-info__head">
          <tr class="table-info__head-tr">
            <th class="table-info__head-th">No. FACT</th>
            <th class="table-info__head-th">Fecha FACT.</th>
            <th class="table-info__head-th">CLIENTE</th>
            <th class="table-info__head-th">FECHA VENCIMIENTO</th>
            <th class="table-info__head-th">VR. TOTAL FACTURA</th>
            <th class="table-info__head-th">SALDO</th>
          </tr>
        </thead>
        <tbody class="table-info__body">

          ${datosTable}

        </tbody>
      </table>

<div id="pageFooter-last">
      <table class="table-subtitle" >
        <thead>
          <tr>
            <th class="table-head-th-vacio"></th>
            <th>Total Numero Facturas</th>
            <th>Total Facturas</th>
            <th>Total Saldos</th>
          </tr>
        </thead>
        <tbody class="table-subtitle__body">
          <tr>
            <td class="table-body-td-vacio"></td>
            <td class="table-subtitle__td">
              <b>${
                datosReciboSaldosPdf.saldos[0].length ||
                datosReciboSaldosPdf.saldos.length
              }</b>
            </td>
            <td class="table-subtitle__td">
              <b>${separadorMiles(numeroSaldoFacturas)}</b>
            </td>
            <td class="table-subtitle__td">
              <b>${separadorMiles(numeroTotalSaldos)}</b>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    </main>
  </body>
</html>

  `;
};
