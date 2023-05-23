import {TableProvider} from "../contexts/tableContext.jsx";
import TableCasos from "../tableComponents/tableCaso.jsx";

export default function MainSTContent() {
  return (
    <TableProvider>
      <div className="espacioTrabajo">
        <section className="recuadros">Filtros</section>
        <section className="recuadros espacioTrabajo"><TableCasos/></section>
        <section className="recuadros"><p>otros comentarios</p></section>
      </div>
    </TableProvider>
  );
}

