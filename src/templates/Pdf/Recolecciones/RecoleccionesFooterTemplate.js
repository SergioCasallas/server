// !Recolecciones y Disponibilidad Final de Residuos// Saldos

const e = require("express");

module.exports = (datos) => {
  let cantidadBiologicos = 0;
  let cantidadQuimicos = 0;
  let cantidadIndustriales = 0;
  let cantidadNoPeligrosos = 0;
  let cantidadOtros = 0;
  let cantidadRaees = 0;

  let totalKg;

  // const biologicos = [
  //   "Biosanitarios",
  //   "Cortopunzantes",
  //   "Anatomopatologicos",
  //   "Animales",
  //   "COLCHON O COLCHONETA",
  //   "Biosanitarios VacCovid19",
  //   "Cortopunzantes VacCovid19",
  //   "BIOSANITARIOS COVID19",
  // ];

  // const quimicos = [
  //   "Medicamentos o Fármacos",
  //   "Reactivos",
  //   "Metales Pesados (Luminarías,Baterías,Amalgamas)",
  //   "LIQUIDOS REVELADORES O FIJADORES",
  //   "METALES PESADOS (PLOMO)",
  //   "FARMACOS",
  //   "LAMPARAS O LUMINARIAS",
  //   "CITOTOXICO",
  //   "Medicamentos VacCovid19",
  //   "Farmacos VacCovid19",
  // ];
  // const industriales = [
  //   "Aceites usados, Lodos Aceitodos,borras,pinturas,estopa,Mezcla de hidrocarburos y/o aceites",
  //   "Mezclas y emulsiones de desechos de aceite y agua o derhidrocarburos y agua",
  //   "LODOS, BORAS O ESTOPAS",
  // ];

  // const industriales = ["Residuos Industriales"];

  // const noPeligrosos = ["Ordinarios, reciclables"];
  // // const raees = ["", "", "", "", "", "", "", ""];
  // const otros = [
  //   "RES. HOSP PELIGROSO Q",
  //   "RES. HOSP PELIGROSO L",
  //   "RES. HOSP PELIGROSO R",
  //   "RES. HOSP PELIGROSO I",
  // ];

  datos.data.map((tipoderesiduo) => {
    if (isNaN) {
      console.log(tipoderesiduo.confirmed_weight);

      tipoderesiduo.residue_physical_state === "Biologicos y/o Infecciosos"
        ? (cantidadBiologicos += parseFloat(tipoderesiduo.confirmed_weight))
        : null;

      tipoderesiduo.residue_physical_state === "Quimicos"
        ? (cantidadQuimicos += parseFloat(tipoderesiduo.confirmed_weight))
        : null;

      tipoderesiduo.residue_physical_state ===
      "Residuos Electricos o Electronicos"
        ? (cantidadRaees += parseFloat(tipoderesiduo.confirmed_weight))
        : null;

      tipoderesiduo.residue_physical_state === "Residuos no Peligrosos"
        ? (cantidadNoPeligrosos += parseFloat(tipoderesiduo.confirmed_weight))
        : null;

      tipoderesiduo.residue_physical_state === "Residuos Industriales"
        ? (cantidadIndustriales += parseFloat(tipoderesiduo.confirmed_weight))
        : null;

      tipoderesiduo.residue_physical_state === "Otros"
        ? (cantidadOtros += parseFloat(tipoderesiduo.confirmed_weight))
        : null;
    }

    // biologicos.map((item) =>
    //   item === tipoderesiduo.residue
    //     ? (cantidadBiologicos += parseFloat(tipoderesiduo.confirmed_weight))
    //     : null
    // );

    // quimicos.map((item) =>
    //   item === tipoderesiduo.residue
    //     ? (cantidadQuimicos += parseFloat(tipoderesiduo.confirmed_weight))
    //     : null
    // );

    // tipoderesiduo.residue_physical_state === "Quimicos"
    //   ? console.log(tipoderesiduo)
    //   : null;

    // industriales.map((item) =>
    //   item === tipoderesiduo.residue_physical_state
    //     ? (cantidadIndustriales += parseFloat(tipoderesiduo.confirmed_weight))
    //     : null
    // );

    // industriales.map((item) =>
    //   item == tipoderesiduo.residue_physical_state
    //     ? (cantidadIndustriales += parseFloat(tipoderesiduo.confirmed_weight))
    //     : null
    // );

    // noPeligrosos.map((item) =>
    //   item === tipoderesiduo.residue
    //     ? (cantidadNoPeligrosos += parseFloat(tipoderesiduo.confirmed_weight))
    //     : null
    // );

    // otros.map((item) =>
    //   item === tipoderesiduo.residue
    //     ? (cantidadOtros += parseFloat(tipoderesiduo.confirmed_weight))
    //     : null
    // );

    // totalKg =
    //   cantidadQuimicos +
    //   cantidadBiologicos +
    //   cantidadIndustriales +
    //   cantidadNoPeligrosos +
    //   cantidadRaees +
    //   cantidadOtros;

    totalKg =
      cantidadQuimicos +
      cantidadBiologicos +
      cantidadIndustriales +
      cantidadNoPeligrosos +
      cantidadRaees +
      cantidadOtros;
  });

  return `

        <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Recolecciones</title>
    <style>

      .main-footer{
        width: 100%;
        height:120px;
        padding:10px 50px ;
        font-size: 8px;
        font-family:Arial, "Helvetica Neue", Helvetica, sans-serif;

      }

      .table-secondary {
        border-collapse: collapse;
           width:70%;
          }

          .table-secondary__head-tr{
          }


          .table-secondary__th {
            height:6px;
            word-wrap: break-word;
            overflow: hidden;
            font-weight:100; 
      }


      .table__secondary-th{
        min-width: 3px;
        width: 3px;
        max-width: 20px;
      }



      .table-secondary__th-total{
           height:10%;
           background-color: #8c8c8c;
      }
    </style>
  </head>
  <body>
    <main class="main-footer">

      <table class="table-secondary" border="1">
        <thead>
          <tr class="table-secondary__head-tr">
            <th class="table-secondary__th" rowspan="7" colspan="2" width="0%">
              Subtotales
            </th>
          </tr>
          <tr class="table-secondary__head-tr">
            <th class="table-secondary__th" width="0%">RESIDUOS QUIMICOS</th>
            <th class="table-secondary__th" width="0%">${cantidadQuimicos}</th>
          </tr>
          <tr class="table-secondary__head-tr">
            <th class="table-secondary__th" width="0%">RESIDUOS BIOLOGICOS</th>
            <th class="table-secondary__th" width="0%">${cantidadBiologicos}</th>
          </tr>
          <tr class="table-secondary__head-tr">
            <th class="table-secondary__th" width="0%">RESIDUOS INDUSTRIALES</th>
            <th class="table-secondary__th" width="0%">${cantidadIndustriales}</th>
          </tr>
          <tr class="table-secondary__head-tr">
            <th class="table-secondary__th" width="0%">RESIDUOS NO PELIGROSOS</th>
            <th class="table-secondary__th" width="0%">${cantidadNoPeligrosos}</th>
          </tr>
          <tr class="table-secondary__head-tr">
            <th class="table-secondary__th" width="0%">RAEES</th>
            <th class="table-secondary__th" width="0%">${cantidadRaees}</th>
          </tr>
          <tr class="table-secondary__head-tr">
            <th class="table-secondary__th" width="0%">OTROS</th>
            <th class="table-secondary__th" width="0%">${cantidadOtros}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="table-secondary__th table-secondary__th-total" colspan="3" width="90%">TOTAL KG</th>
            <th class="table-secondary__th" width="0%">${parseFloat(
              totalKg
            ).toFixed(2)}</th>
          </tr>
        </tbody>
      </table>
    </main>
  </body>
</html>


  `;
};
