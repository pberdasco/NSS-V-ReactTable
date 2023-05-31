import {TableProvider} from "../contexts/tableContext.jsx";
import TableCasos from "../tableComponents/tableCaso.jsx";
import Mensajes from "../messages/mensajes.jsx";

export default function MainSTContent() {
  return (
    <TableProvider>
      <div className="espacioTrabajo">
        <section className="recuadros">Filtros</section>
        <section className="recuadros espacioTrabajo"><TableCasos/></section>
        <section className="recuadros"><Mensajes/></section>
      </div>
    </TableProvider>
  );
}

