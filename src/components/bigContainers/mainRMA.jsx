import CasosTable from "../tableComponents/casosTable.jsx";

export default function MainRMAContent() {
  return (
    <div className="espacioTrabajo">
      <section className="recuadros">Filtros</section>
      <section className="recuadros espacioTrabajo"><CasosTable/></section>
      <section className="recuadros"><p>otros comentarios</p></section>
    </div>
  );
}