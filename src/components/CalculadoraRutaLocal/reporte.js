import jsPDF from "jspdf";
import moment from "moment";
import numeral from "numeral";

const guidGenerator = () => {
  var S4 = function() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+"-"+S4());
}

export const makePdf = (Cliente, FechaServicio, Descripcion, Vehiculo, sumaTodo, sumaIva, sumaTotal ) => {
  console.log("sumaTodo-------",sumaTodo)
  console.log("sumaIva-------",sumaIva)
  console.log("sumaTotal-------",sumaTotal)
  let doc = new jsPDF();
  doc.setFontSize(22);
  doc.text("Acroride Cotizacion ", 10, 20);
  doc.setFontSize(16);
  doc.text(`Fecha: ${moment(Date.now()).format("YYYY-MM-DD")}`, 10, 30);
  doc.text(`Cotizacion para  ${Cliente}`, 10, 50);
  doc.text(`Fecha Servicio: ${FechaServicio}`, 10, 60);
  doc.text(
    `Descripcion del servicio: ${Descripcion} en el vehiculo: ${Vehiculo}`,
    10,
    75
  );
  doc.text(`Servicio`, 10, 160);
  doc.text(`-- ${numeral(sumaTodo).format("$0,0.00")}`, 150, 160);
  doc.text(`IVA`, 10, 170);
  doc.text(`--${numeral(sumaIva).format("$0,0.00")}`, 150, 170);
  doc.text(
    `________________________________________________________`,
    10,
    180
  );
  doc.text(`Total`, 10, 190);
  doc.text(`-- ${numeral(sumaTotal).format("$0,0.00")}`, 150, 190);

  doc.save(`${guidGenerator()}.pdf`);
};