import { Estados } from "./estadosApi";

const ESTADOS_CAB = await Estados.estadoCabGetAll();
const ESTADOS_ITEM = await Estados.estadoItemGetAll();
const ESTADOS_DATOS = await Estados.statusDatosGetAll();

export function getEstadoCab(id){
    return ESTADOS_CAB.find((x) => x.id === id);
}

export function getEstadoItem(id){
    return ESTADOS_ITEM.find((x) => x.id === id);
}

export function getEstadoDatos(id){
    return ESTADOS_DATOS.find((x) => x.id === id);
}

export const estadosItem = ESTADOS_ITEM.reduce((acc, { nombre, id }) => {
    const clave = nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "");
    acc[clave] = id;
    return acc;
  }, {});

  // OJO: si se cambia la tabla en la BD puede ser necesario modificar donde se use estadosItem y estadoCab como enums...
  // accesorio: 12, cambio: 10, destruccionpendiente: 3, destruido: 8, devolucion$: 9, enrevision: 5, noprocesado: 1, norecibido: 7,
  // otabierta: 13, otcerrada: 14, rechazado: 2, reparacion: 11, retiropendiente: 4, revisado: 6

export const estadosCab = ESTADOS_CAB.reduce((acc, { nombre, id }) => {
    const clave = nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "");
    acc[clave] = id;
    return acc;
  }, {});
