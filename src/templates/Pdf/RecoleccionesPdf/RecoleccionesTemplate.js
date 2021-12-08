// !Recolecciones y Disponibilidad Final de Residuos// Saldos

module.exports = (datos) => {
  console.log(datos.dataPdf);

  let datosTabla = "";

  datos.dataPdf.map(
    (item) =>
      (datosTabla += `
      <tr>
         <td class="table__datos--head-subtitle-items">${
           item.work_plan_no === null ? "" : item.work_plan_no
         }</td>
          <td class="table__datos--head-subtitle-items">
            ${
              datos.dataPdf[0].client_signature_timestamp ===
              (undefined || null)
                ? ""
                : datos.dataPdf[0].client_signature_timestamp.substr(0, 10)
            }
          </td>
          <td class="table__datos--head-subtitle-items">${
            item.work_plan_detail_id === null ? "" : item.work_plan_detail_id
          }</td>
          <td class="table__datos--head-subtitle-items">${
            datos.dataPdf[0].sedeName === null ? "" : datos.dataPdf[0].sedeName
          }</td>
          <td class="table__datos--head-subtitle-items">${
            item.residue_physical_state === null
              ? ""
              : item.residue_physical_state
          }</td>
          <td class="table__datos--head-subtitle-items">${
            item.residue === null ? "" : item.residue
          }</td>
          <td class="table__datos--head-subtitle-items">${
            item.confirmed_weight === null ? "" : item.confirmed_weight
          }</td>
          <td class="table__datos--head-subtitle-items">${
            item.confirmed_quantity === null ? "" : item.confirmed_quantity
          }</td>
          <td class="table__datos--head-subtitle-items" colspan="1">
            ${
              datos.dataPdf[0].contact_name === null
                ? ""
                : datos.dataPdf[0].contact_name
            }
          </td>
          <td class="table__datos--head-subtitle-items" colspan="1">
            ${
              datos.dataPdf[0].contact_cc === null
                ? ""
                : datos.dataPdf[0].contact_cc
            }
          </td>
      </tr>
      `)
  );

  let cantidadBiologicos = 0;
  let cantidadQuimicos = 0;
  let cantidadIndustriales = 0;
  let cantidadNoPeligrosos = 0;
  let cantidadOtros = 0;
  let cantidadRaees = 0;

  const biologicos = [
    "Biosanitarios",
    "Cortopunzantes",
    "Anatomopatologicos",
    "Animales",
    "COLCHON O COLCHONETA",
    "Biosanitarios VacCovid19",
    "Cortopunzantes VacCovid19",
    "BIOSANITARIOS COVID19",
  ];

  const quimicos = [
    "Medicamentos o Fármacos",
    "Reactivos",
    "Metales Pesados (Luminarías,Baterías,Amalgamas)",
    "LIQUIDOS REVELADORES O FIJADORES",
    "METALES PESADOS (PLOMO)",
    "FARMACOS",
    "LAMPARAS O LUMINARIAS",
    "CITOTOXICO",
    "Medicamentos VacCovid19",
    "Farmacos VacCovid19",
  ];
  const industriales = [
    "Aceites usados, Lodos Aceitodos,borras,pinturas,estopa,Mezcla de hidrocarburos y/o aceites",
    "Mezclas y emulsiones de desechos de aceite y agua o derhidrocarburos y agua",
    "LODOS, BORAS O ESTOPAS",
  ];
  const noPeligrosos = ["Ordinarios, reciclables"];
  // const raees = ["", "", "", "", "", "", "", ""];
  const otros = [
    "RES. HOSP PELIGROSO Q",
    "RES. HOSP PELIGROSO L",
    "RES. HOSP PELIGROSO R",
    "RES. HOSP PELIGROSO I",
  ];

  datos.dataPdf.map((tipoderesiduo) => {
    console.log(tipoderesiduo.confirmed_weight);
    biologicos.map((item) =>
      item === tipoderesiduo.residue
        ? (cantidadBiologicos += parseFloat(tipoderesiduo.confirmed_weight))
        : null
    );

    quimicos.map((item) =>
      item === tipoderesiduo.residue
        ? (cantidadQuimicos += parseFloat(tipoderesiduo.confirmed_weight))
        : null
    );

    industriales.map((item) =>
      item === tipoderesiduo.residue
        ? (cantidadIndustriales += parseFloat(tipoderesiduo.confirmed_weight))
        : null
    );

    noPeligrosos.map((item) =>
      item === tipoderesiduo.residue
        ? (cantidadNoPeligrosos += parseFloat(tipoderesiduo.confirmed_weight))
        : null
    );

    otros.map((item) =>
      item === tipoderesiduo.residue
        ? (cantidadOtros += parseFloat(tipoderesiduo.confirmed_weight))
        : null
    );
  });

  // biologicos.map((item) =>
  //   item === residuo ? (cantidadBiologicos = cantidadKg) : null
  // );

  // quimicos.map((item) =>
  //   item === residuo ? (cantidadQuimicos = cantidadKg) : null
  // );
  // industriales.map((item) =>
  //   item === residuo ? (cantidadIndustriales = cantidadKg) : null
  // );
  // noPeligrosos.map((item) =>
  //   item === residuo ? (cantidadNoPeligrosos = cantidadKg) : null
  // );
  // otros.map((item) => (item === residuo ? (cantidadOtros = cantidadKg) : null));
  // raees.map((item) => item === residuo?cantidadRaees:null);

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Recolecciones</title>
    <style>
      @page {
        size: A4;
      }

      html,
      body {
        margin: 0;
      }

      .table-head,
      .table__datos {
        border-collapse: collapse;
        margin: 0 auto;
        width: 100%;
        border-color: black;
      }

      .table__datos--head-subtitle {
        font-size: 12px;
        text-align: center;
           background-color: #8c8c8c;
      }

      .table__datos--head-subtitle-items {
        font-size: 10px;
        text-align: center;
      }

      .table-secondary {
        position: absolute;
        left: 0%;
        bottom: 0%;

        height: 20px;
        width: 65%;
      }

      .table-secondary__th {
        border-collapse: collapse;
        height: 5px;
        font-size: 14px;
      }

      .table-secondary__th-total{
           background-color: #8c8c8c;
      }

      @media print {

        .contenedor-pdf{
position:relative;
box-sizing: border-box;
width: 100%;
padding:2%;
height: 793px;
        }
         @page {
        size: A4;
      }

      html,
      body {
        margin: 0;
      }

      .table-header__td,
      .table-datos__td{
        text-align:center;
      }

      .table-header__contenedor-imagen{
        padding:5px 5px;
      }

      .table-header__image{
        width: 90%;
      }

      .table-header,
      .table__datos {
        border-collapse: collapse;
        margin: 0 auto;
        width: 100%;
      }

      .table__datos--head-subtitle {
        background-color:#8c8c8c;
        font-size: 12px;
        text-align: center;
      }

      .table__datos--head-subtitle-items {
        font-size: 10px;
        text-align: center;
      }

      .table-secondary {
        position: absolute;
        left: 0%;
        bottom: 0%;
        margin:2%;
        border-collapse: collapse;
        height: 20px;
        width: 65%;
      }

      .table-secondary__th {
        height: 5px;
        font-size: 14px;
      }
      }
    </style>
  </head>
  <body>
    <main class="contenedor-pdf">
      <table class="table-header" border="1">
        <thead>
          <tr>
            <th rowspan="2" class='table-header__contenedor-imagen'>
              <img
              class='table-header__image'
                src="https://firebasestorage.googleapis.com/v0/b/react-chat-930bc.appspot.com/o/Logo.png?alt=media&token=06a8dc4b-a0a8-4ca7-8eda-0470d2f9c5c4"
                alt=""
              />
            </th>
            <th colspan="12" width="84%">Document</th>
          </tr>
          <tr align="center">
            <th colspan="12">INFORME DE RECOLECCIONES</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="table-header__td">Fecha de emision:
            <br>
            ${datos.dataPdf[0].fechaActual}
            </td>
            <td class="table-header__td">Version : 1.0</td>
            <td class="table-header__td">Proceso: Gestion Ambiental</td>
            <td class="table-header__td">Pagina: 1 de 1</td>
          </tr>
        </tbody>
      </table>
      <br />
      <table class="table__datos" border="1">
        <thead>
          <tr>
            <th class="table__datos--head-subtitle" colspan="5">Cliente</th>
            <td class="table-datos__td"  colspan="7">${
              datos.dataPdf[0].nombreCompania === null
                ? ""
                : datos.dataPdf[0].nombreCompania
            }</td>
          </tr>
          <tr>
            <th class="table__datos--head-subtitle" colspan="5">NIT</th>
            <td class="table-datos__td" colspan="7">${
              datos.dataPdf[0].nit === null ? "" : datos.dataPdf[0].nit
            }</td>
          </tr>
          <tr>
            <th class="table__datos--head-subtitle" colspan="8">DETALLADO DE RECOLECCIONES</th>
            <th class="table__datos--head-subtitle" colspan="2">RESPONSABLE ENTREGA CLIENTE</th>
          </tr>
          <tr>
            <th class="table__datos--head-subtitle" colspan="1">No</th>
            <th class="table__datos--head-subtitle" colspan="1" width="10%">
              FECHA Y HORA RECOLECCION
            </th>
            <th class="table__datos--head-subtitle" colspan="1" width="8%">
              No RECIBO
            </th>
            <th class="table__datos--head-subtitle" colspan="1" width="15%">
              SEDE
            </th>
            <th class="table__datos--head-subtitle" colspan="1" width="15%">
              TIPO DE RESIDUO RECOLECTADO
            </th>
            <th class="table__datos--head-subtitle" colspan="1" width="10%">
              RESIDUO
            </th>
            <th class="table__datos--head-subtitle" colspan="1" width="3%">
              CANTIDAD KG
            </th>
            <th class="table__datos--head-subtitle" colspan="1" width="3%">
              No DE BOLSAS
            </th>
            <th class="table__datos--head-subtitle" colspan="1" width="15%">
              NOMBRE COMPLETO
            </th>
            <th class="table__datos--head-subtitle" colspan="1" width="15%">
              IDENTIFICACION
            </th>
          </tr>
        </thead>
        <tbody>
     ${datosTabla}
        </tbody>
      </table>

      <table class="table-secondary" border="1">
        <thead>
          <tr>
            <th class="table-secondary__th" rowspan="7" colspan="2">
              Subtotales
            </th>
          </tr>
          <tr>
            <th class="table-secondary__th">RESIDUOS QUIMICOS</th>
            <th class="table-secondary__th">${cantidadQuimicos}</th>
          </tr>
          <tr>
            <th class="table-secondary__th">RESIDUOS BIOLOGICOS</th>
            <th class="table-secondary__th">${cantidadBiologicos}</th>
          </tr>
          <tr>
            <th class="table-secondary__th">RESIDUOS INDUSTRIALES</th>
            <th class="table-secondary__th">${cantidadIndustriales}</th>
          </tr>
          <tr>
            <th class="table-secondary__th">RESIDUOS NO PELIGROSOS</th>
            <th class="table-secondary__th">${cantidadNoPeligrosos}</th>
          </tr>
          <tr>
            <th class="table-secondary__th">RAEES</th>
            <th class="table-secondary__th">${cantidadRaees}</th>
          </tr>
          <tr>
            <th class="table-secondary__th">OTROS</th>
            <th class="table-secondary__th">${cantidadOtros}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="table-secondary__th table-secondary__th-total" colspan="3">TOTAL KG</th>
            <th class="table-secondary__th">${
              parseInt(cantidadQuimicos) +
              parseInt(cantidadBiologicos) +
              parseInt(cantidadIndustriales) +
              parseInt(cantidadNoPeligrosos) +
              parseInt(cantidadRaees) +
              parseInt(cantidadOtros)
            }</th>
          </tr>
        </tbody>
      </table>
    </main>
  </body>
</html>

`;
};
