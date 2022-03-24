module.exports = (datosReciboSaldosPdf) => {
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

  // datosReciboSaldosPdf.saldos[0].length > 1
  //   ? datosReciboSaldosPdf.saldos[0].map(
  //       (item) =>
  //         (datosTable += `<tr class="table-info__body-tr">
  //           <td class="table-info__body-th">${item.Numero}</td>
  //           <td class="table-info__body-th">${item.Fecha.substring(0, 10)}</td>
  //           <td class="table-info__body-th">${
  //             datosReciboSaldosPdf.nombreCliente
  //           }</td>
  //           <td class="table-info__body-th">${item.Limite_Pago.substring(
  //             0,
  //             10
  //           )}</td>
  //           <td class="table-info__body-th">${separadorMiles(item.Valor)}</td>
  //           <td class="table-info__body-th">${separadorMiles(item.Saldo)}</td>
  //         </tr>`)
  //     )
  //   : datosReciboSaldosPdf.saldos.map(
  //       (item) =>
  //         (datosTable += `<tr class="table-info__body-tr">
  //           <td class="table-info__body-th">${item.numeroFactura}</td>
  //           <td class="table-info__body-th">${item.limitePago.substring(
  //             0,
  //             10
  //           )}</td>
  //           <td class="table-info__body-th">${
  //             datosReciboSaldosPdf.nombreCliente
  //           }</td>
  //           <td class="table-info__body-th">${item.fecha.substring(0, 10)}</td>
  //           <td class="table-info__body-th">${separadorMiles(item.valor)}</td>
  //           <td class="table-info__body-th">${separadorMiles(item.saldo)}</td>
  //         </tr>`)
  //     );

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
  padding: 2%;
}

/* !Table  Price Total */

.table-subtitle {
  font-size: 10px;
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
              <b>
              ${
                datosReciboSaldosPdf.saldos[0].length ||
                datosReciboSaldosPdf.saldos.length
              }
              </b>
            </td>
            <td class="table-subtitle__td">
              <b>$ ${separadorMiles(numeroSaldoFacturas)}</b>
            </td>
            <td class="table-subtitle__td">
              <b>$ ${separadorMiles(numeroTotalSaldos)}</b>

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
