// ! Informe de Recolecciones

module.exports = (datosReciboPagosPdf) => {
  let count = 0;

  datosReciboPagosPdf.pago[0].length > 1
    ? datosReciboPagosPdf.pago[0].map((item) => (count += item.Neto))
    : datosReciboPagosPdf.pago.map((item) => (count += item.Neto));


     datosReciboPagosPdf.pago[0].length > 1
       ? datosReciboPagosPdf.pago[0].map((item) => console.log(item))
       : datosReciboPagosPdf.pago.map((item) => console.log(item));

  const separadorMiles = (numero, separador = ".") => {
    if (typeof numero !== "number" || !Number.isInteger(numero)) {
      return null;
    }
    numero = String(numero);
    return numero.replace(/\B(?=(\d{3})+(?!\d))/g, separador);
  };

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
        font-family:Arial, "Helvetica Neue", Helvetica, sans-serif;

  margin: 0;
}

.contenedor-pdf {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 2%;
  height: 793px;
}


/* !Table  */

.table-subtitle {
  font-size:12px;
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
      <table class='table-subtitle'>
          <tbody class='table-subtitle__body'>
              <tr >
                  <td class='table-body-td-vacio'></td>
                  <td class='table-subtitle__td'>Total Pagos: <b>
                  ${
                    datosReciboPagosPdf.pago[0].length > 1
                      ? datosReciboPagosPdf.pago[0].length
                      : datosReciboPagosPdf.pago.length
                  }</b></td>
                  <td class='table-subtitle__td'>Total Recaudado:<b>
                 $  ${separadorMiles(count)}
                  </b></td>
              </tr>
          </tbody>
      </table>
    </main>
  </body>
</html>

`;
};
