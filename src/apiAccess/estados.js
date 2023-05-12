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