// !Recolecciones y Disponibilidad Final de Residuos// Saldos

module.exports = (datos) => {
  let datosTabla = "";

  datos.data.map(
    (item, index) =>
      (datosTabla += `
     <tr>
            <td class="table__datos-body table__datos-body-no">${index}</td>
            <td class="table__datos-body table__datos-body-">${item.client_signature_timestamp!==null?item.client_signature_timestamp.substring(
              0,
              10
            ):""}</td>
            <td class="table__datos-body table__datos-body-">${
              item.work_plan_detail_id !== null ? item.work_plan_detail_id : ""
            }</td>
            <td class="table__datos-body table__datos-body-">${
              item.company_name !== null ? item.company_name : ""
            }</td>
            <td class="table__datos-body table__datos-body-">${
              item.residue_physical_state !== null
                ? item.residue_physical_state
                : ""
            }</td>
            <td class="table__datos-body table__datos-body-">${
              item.residue !== null ? item.residue : ""
            }</td>
            <td class="table__datos-body table__datos-body-">${
              item.confirmed_weight !== null ? item.confirmed_weight : ""
            }</td>
            <td class="table__datos-body table__datos-body-">${
              item.confirmed_quantity !== null ? item.confirmed_quantity : ""
            }</td>
            <td class="table__datos-body table__datos-body-">${
              item.contact_name !== null ? item.contact_name : ""
            }</td>
            <td class="table__datos-body table__datos-body-">${
              item.contact_cc !== null ? item.contact_cc : ""
            }</td>
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
      <style>
      body{
        font-family:Arial, "Helvetica Neue", Helvetica, sans-serif;
        padding: 0;
        margin: 0;
        border:0;
      }


  table, tbody, tr, td {
    margin: 0;
    padding: 0;
    border-spacing: 0;
  }

  table{
    border-collapse: collapse;
    margin:0 auto;
    width: 90%;
  }

  .table__datos{
    position: relative;
    top:-21px;
    border-color: transparent;
  }

  .table__datos-thead{
    visibility:hidden;
  }

  .table__datos-body{
    font-size: 8px;
    padding:0.3rem 0;
    text-align:center;
    word-wrap: break-word;
  }

   .table__datos-body-no{
    min-width: 3px;
    width: 3px;
    max-width: 20px;
  }


    </style>
  </head>
  <body>
 <main>
  <table class="table__datos" border="1">
    <thead class="table__datos-thead" >
          <tr>
            <th class="table__datos--head-subtitle" width="4.6%">No</th>
            <th class="table__datos--head-subtitle" width="14.9%">Fecha</th>
            <th class="table__datos--head-subtitle" width="11%">NoRecibo</th>
            <th class="table__datos--head-subtitle" width="14.9%">Sede</th>
            <th class="table__datos--head-subtitle" width="10.1%">Tipo</th>
            <th class="table__datos--head-subtitle" width="10.1%">Residuo</th>
            <th class="table__datos--head-subtitle" width="5.7%">kg</th>
            <th class="table__datos--head-subtitle" width="5%">bolsas</th>
            <th class="table__datos--head-subtitle" width="12%">Name</th>
            <th class="table__datos--head-subtitle" width="0%">C.C.</th>
          </tr>
        </thead>
        <tbody>
          ${datosTabla}
        </tbody>
  </table>
  </main>
  </body>
</html>



  `;
};
