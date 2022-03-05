// ! Manifiesto

module.exports = (datosManifiestoPdf) => {
  console.log(datosManifiestoPdf);
  const {
    UUID_Sede,
    client_signature,
    company_address,
    number_plate,
    company_name,
    confirmed_quantity,
    confirmed_weight,
    contact_cc,
    contact_name,
    driver_id,
    driver_name,
    driver_signature_path,
    observations,
    // package,
    client_signature_timestamp,
    destroy_buckets,
    photo_1_path,
    photo_2_path,
    photo_3_path,
    photo_4_path,
    primary_secondary,
    residue,
    residue_type,
    work_plan_detail_id,
  } = datosManifiestoPdf[0];

  const date = new Date();

  let countWeight = 0;
  let countQuantity = 0;

  datosManifiestoPdf.map((item) => {
    countWeight += parseFloat(item.confirmed_weight);
    countQuantity += parseFloat(item.confirmed_quantity);
  });

  let datosTable="";

  datosManifiestoPdf.map(
    (item) =>
      (datosTable += `
            <tr class="table-info__body-tr-item">
            <td>${
              item.residue_physical_state ? item.residue_physical_state : ""
            }</td>
            <td>${item.residue ? item.residue : ""}</td>
            <td>${item.confirmed_weight ? item.confirmed_weight : ""}</td>
            <td>${item.confirmed_quantity ? item.confirmed_quantity : ""}</td>
            <td>${item.destroy_buckets ? item.destroy_buckets : ""}</td>
          </tr>

          `)
  );

  console.error(datosManifiestoPdf[0].residue_physical_state);

  return `

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body,
      html {
        padding: 0;
        margin: 0;
      }

      .contenedor-pdf {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        padding: 2%;
        height: 1100px;
      }

      .table-header-secondario {
        width: 95%;
        margin: 0 auto;
        /* background-color: red; */
      }

      .table-header-secondario__image {
        width: 20%;
        padding: 0;
        margin: 0;
      }

      .table-header-secondario__th {
        width: 30%;
      }

      /* !Table Primary */

      .table-header-primario {
        border-collapse: collapse;
        text-align: center;
        width: 95%;
        margin: 0 auto;
      }

      /* !Table Info */

      .table-info {
        position: relative;
        text-align: center;
        width: 95%;
        height: 35%;
        margin: 0 auto;
        border-collapse: collapse;
      }

      .table-info__thead {
        border-collapse: collapse;
      }

      .table-info__thead-th,
      .table-info__thead-td {
        background-color: #8c8c8c;
      }

      .table-info__body-tr {
        height: 10%;
      }

      .table-info__body-tr-item {
        vertical-align: top;
      }

      /* !table Registo */

      .table-registro-fotografico {
        text-align: center;
        width: 95%;
        margin: 0 auto;
      }

      .table-registro-fotografico__td-vacio,
      .table-registro-fotografico__th-vacio {
        width: 50%;
      }

      .table-registro-fotografico__image {
        width: 30%;
      }

      /* ! Table Observaciones*/

      .table-entrega-info {
        width: 100%;
        text-align: center;
        border-collapse: collapse;
        position: absolute;
        bottom: 2%;
        margin: 0 auto;
      }

      .table-entrega-info__observaciones {
        text-align: left;
      }

      .table-entrega-info__entregado {
        width: 20%;
      }

      .table-entrega-info__imagen-firma {
        margin: 0 auto;
        padding: 0;
        width: 50px;
        height: 50px;
      }

      .table-entrega-info__td {
        width: calc(100% / 4);
      }

      .table-entrega-info__td-footer {
        text-align: center;
        font-size: 10px;
      }
    </style>
  </head>
  <body>
    <main class="contenedor-pdf">
      <table class="table-header-secondario">
        <tr>
          <th class="table-header-secondario__th">
            <img
              class="table-header-secondario__image"
              src="https://firebasestorage.googleapis.com/v0/b/react-chat-930bc.appspot.com/o/Logo.png?alt=media&token=06a8dc4b-a0a8-4ca7-8eda-0470d2f9c5c4"
              alt=""
              width="100%"
            />
          </th>
          <th>
            <span>RECIBO DE RECOLECCION Y TRANSPORTE DE RESIDUOS</span>
          </th>
        </tr>
        <tr>
          <th>Nit: 900.808.189-7</th>
        </tr>
      </table>

      <table class="table-header-primario" border="1">
        <tbody>
          <tr>
            <td>
              <span
                >Fecha de emisión: ${`${date.getDay()}/${
                  date.getHours() + 1
                }/${date.getFullYear()}`}</span
              >
            </td>
            <td>
              <span>Versión. 037</span>
            </td>
            <td>
              <span>Proceso: Recolección y Transporte</span>
            </td>
            <td>
              <span>Pag. 1:1</span>
            </td>
          </tr>

          <tr>
            <td>
              <span
                >No de Recibo:${
                  work_plan_detail_id ? work_plan_detail_id : ""
                }</span
              >
            </td>
            <td colspan="2" class="sergio">
              <span
                >Fecha y Hora de Recoleccion: ${
                  client_signature_timestamp
                    ? client_signature_timestamp.substr(0, 10)
                    : ""
                }</span
              >
            </td>
            <td>
              <span
                >Placa Vehiculo:${number_plate ? number_plate : ""}</span
              >
            </td>
          </tr>

          <tr>
            <td>
              <span>Entidad</span>
            </td>
            <td colspan="3">
              <span>${company_name ? company_name : ""}</span>
            </td>
          </tr>

          <tr>
            <td>
              <span>Direccion</span>
            </td>
            <td colspan="3">
              <span>${company_address ? company_address : ""}</span>
            </td>
          </tr>
        </tbody>
      </table>

      <table class="table-info">
        <thead class="table-info__thead">
          <tr>
            <th class="table-info__thead-th" colspan="5">Descripcion</th>
          </tr>
          <tr>
            <th class="table-info__thead-th">Tipo de Residuo</th>
            <th class="table-info__thead-th">Residuo</th>
            <th class="table-info__thead-th">Peso(KG)</th>
            <th class="table-info__thead-th">No de Bolsas</th>
            <th class="table-info__thead-th">Embalaje y Etiquetado</th>
          </tr>
        </thead>
        <tbody>
        ${datosTable}
          <tr class="table-info__body-tr">
            <td colspan="2" class="table-info__thead-td">Total</td>
            <td>${countWeight}</td>
            <td>${countQuantity}</td>
          </tr>
        </tbody>
      </table>

        <table class="table-registro-fotografico">
        <tr>
          <th>
            <span>Registo Fotografico</span>
          </th>
          <th class="table-registro-fotografico__td-vacio"></th>
        </tr>
        <tr>
          <td>
            ${
              photo_1_path
                ? `<img
              class="table-registro-fotografico__image"
              src="data:image/png;base64,${photo_1_path}"
              alt=""
              width="100%"
            />`
                : ""
            }
          </td>
          <td class="table-registro-fotografico__td-vacio"></td>
        </tr>
        <tr>
          <td>
            ${
              photo_2_path
                ? `<img
              class="table-registro-fotografico__image"
              src="data:image/png;base64,${photo_2_path}"
              alt=""
              width="100%"
            />`
                : ""
            }
          </td>
          <td class="table-registro-fotografico__td-vacio"></td>
        </tr>
        <tr>
          <td>
            ${
              photo_3_path
                ? `<img
              class="table-registro-fotografico__image"
              src="data:image/png;base64,${photo_3_path}"
              alt=""
              width="100%"
            />`
                : ""
            }
          </td>
          <td class="table-registro-fotografico__td-vacio"></td>
        </tr>
        <tr>
          <td>
            ${
              photo_4_path
                ? `<img
              class="table-registro-fotografico__image"
              src="data:image/png;base64,${photo_4_path}"
              alt=""
              width="100%"
            />`
                : ""
            }
          </td>
          <td class="table-registro-fotografico__td-vacio"></td>
        </tr>
      </table>

      <table class="table-entrega-info" border="1">
        <tr>
          <th class="table-entrega-info__observaciones" colspan="4">
            Observaciones: ${observations ? observations : ""}
          </th>
        </tr>
        <tr>
          <th class="table-entrega-info__entregado" rowspan="2">
            Entregado por:
          </th>
          <td class="table-entrega-info__td">
            ${driver_name ? driver_name : ""}
          </td>
          <td class="table-entrega-info__td">${driver_id ? driver_id : ""}</td>
          <td class="table-entrega-info__td">
            <img class="table-entrega-info__imagen-firma"
            src="data:image/png;base64,${
              driver_signature_path ? driver_signature_path : ""
            }" alt=""  />
          </td>
        </tr>
        <tr>
          <td>Nombre</td>
          <td>Cedula</td>
          <td>Firma</td>
        </tr>

        <tr>
          <th class="table-entrega-info__entregado" rowspan="2">
            Recibido por:
          </th>
          <td class="table-entrega-info__td">
            ${contact_name ? contact_name : ""}
          </td>
          <td class="table-entrega-info__td">
            ${contact_cc ? contact_cc : ""}
          </td>
          <td class="table-entrega-info__td">
            <img class="table-entrega-info__imagen-firma"
            src="data:image/png;base64,${
              client_signature ? client_signature : ""
            }" alt="" />
          </td>
        </tr>
        <tr>
          <td>Nombre</td>
          <td>Cedula</td>
          <td>Firma</td>
        </tr>
        <tr>
          <td class="table-entrega-info__td-footer" colspan="4">
            <span>
              Cra. 3 No. 21-60 Ofic. 201 Edificio Jabib Elías
              <br />
              Teléfonos: (4) 781 5219 - (4) 782 7275- (4) 781 1125 - Celular:
              304 566 6839
              <br />

              wwww.bio-residuos.com.co- E-mail: ventas@bio-residuos.com.co
              <br />

              Planta de Incineración: Corregimiento Los Garzones-Montería
              <br />
              "Contribuir con el cuidado del ambiente está en manos de todos"
            </span>
          </td>
        </tr>
      </table>
    </main>
  </body>
</html>



  `;
};
