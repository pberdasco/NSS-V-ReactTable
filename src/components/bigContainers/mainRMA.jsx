import ProductList from "../productList.jsx";

export default function MainRMAContent() {
  return (
    <div className="espacioTrabajo">
      <section className="recuadros">Filtros</section>
      <section className="recuadros espacioTrabajo"><ProductList/></section>
      <section className="recuadros"><p>otros comentarios</p></section>
    </div>
  );
}