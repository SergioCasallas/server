module.exports = (datosReciboSaldosPdf) => {
  let datosTable = "";

  const separadorMiles = (numero, separador = ".") => {
    if (typeof numero !== "number" || !Number.isInteger(numero)) {
      return null;
    }
    numero = String(numero);
    return numero.replace(/\B(?=(\d{3})+(?!\d))/g, separador);
  };

  const eliminadorSeparadores = (string) => {
    return string.replace(/_/g, " ");
  };

  datosReciboSaldosPdf.saldos[0].length > 1
    ? datosReciboSaldosPdf.saldos[0].map(
        (item) =>
          (datosTable += `
            <tr class="table-info__body-tr">
            <td class="table-info__body-th" width="12%">${eliminadorSeparadores(
              item.Numero
            )}</td>
            <td class="table-info__body-th" width="13%">
            ${item.Fecha.substring(0, 10)}
            </td>
            <td class="table-info__body-th" width="20%">${
              datosReciboSaldosPdf.nombreCliente
            }</td>
            <td class="table-info__body-th" width="20%">${item.Limite_Pago.substring(
              0,
              10
            )}</td>
            <td class="table-info__body-th" width="16%">$ ${separadorMiles(
              item.Valor
            )}</td>
            <td class="table-info__body-th" width="16%">$ ${separadorMiles(
              item.Saldo
            )}</td>
          </tr>
          `)
      )
    : datosReciboSaldosPdf.saldos.map(
        (item) =>
          (datosTable += `
          <tr class="table-info__body-tr">
            <td class="table-info__body-th" width="12%">${eliminadorSeparadores(
              item.numeroFactura
            )}</td>
            <td class="table-info__body-th" width="13%">${item.limitePago.substring(
              0,
              10
            )}</td>
            <td class="table-info__body-th" width="20%">${
              datosReciboSaldosPdf.nombreCliente
            }</td>
            <td class="table-info__body-th" width="20%">${item.fecha.substring(
              0,
              10
            )}</td>
            <td class="table-info__body-th" width="16%">$ ${separadorMiles(
              item.valor
            )}</td>
            <td class="table-info__body-th" width="16%">$ ${separadorMiles(
              item.saldo
            )}</td>
          </tr>

          `)
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
             font-family:Arial, "Helvetica Neue", Helvetica, sans-serif;
  margin: 0;
}

.contenedor-pdf {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding:0 2%;
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
  border-color:white;
  border-top: 1px solid black;
  text-align: center;
  padding:8px 0;
  font-size: 14px;
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
      <table class="table-info" border='1'>
        <thead class="table-info__head">
        </thead>
        <tbody class="table-info__body">

      ${datosTable}

        </tbody>
      </table>
    </main>
  </body>
</html>

  `;
};
