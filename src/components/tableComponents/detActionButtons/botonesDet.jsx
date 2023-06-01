import PropTypes from 'prop-types';

import {estadosItem, estadosCab} from "../../../apiAccess/estados.js";
import { useTableContext } from "../../contexts/tableContextHook.jsx";
import ViewItemBtn from './viewItemBtn.jsx';
import RevisionBtn from './revisionBtn.jsx';
import RetirarBtn from './retirarBtn.jsx';
import DestruirBtn from './destruirBtn.jsx';
import RechazarBtn from './rechazarBtn.jsx';


export default function BotonesDet({row}) {
    const item = row.original;
//console.log(item );
    const {listaCasos} = useTableContext();
    const casoIndex = listaCasos.findIndex((x) => x.id === item.casoId);
    const caso = listaCasos[casoIndex];
    let botones = [];

    botones.push(<ViewItemBtn key="viewItemBtn" row={row} caso={caso}/>);

    if (caso.estadoID === estadosCab.enproceso && item.estadoID === estadosItem.noprocesado){
        caso.retiro ? botones.push(<RetirarBtn key="retirarBtn" row={row} caso={caso}/>) : botones.push(<DestruirBtn key="destruirBtn" row={row} caso={caso}/>);
        botones.push(<RechazarBtn key="rechazarBtn" row={row} caso={caso}/>)

    }
    else if (caso.estadoID === estadosCab.enproceso && item.estadoID === estadosItem.rechazado){
        caso.retiro ? botones.push(<RetirarBtn key="retirarBtn" row={row} caso={caso}/>) : botones.push(<DestruirBtn key="destruirBtn" row={row} caso={caso}/>);
    } else if(caso.estadoID === estadosCab.recibido && item.estadoID === estadosItem.enrevision){
        botones.push(<RevisionBtn key="rechazarBtn" row={row} caso={caso}/>)
    }  
    // Revisar



    return (
        <>
            {botones}
        </>
    )
}


 BotonesDet.propTypes = {
    row: PropTypes.object.isRequired
};

    //Siempre: <Ver>
    //Caso: En Proceso y Estado: No Procesado y Retiro =>
    //        <Rechazar> / <Retirar>
    //Caso: En Proceso y Estado: No Procesado y NO Retiro =>
    //        <Rechazar> / <Destruir>
    //Caso: En Proceso y Estado: Rechazado y NO Retiro =>
    //        <Destruir>

    //Caso: Recibido y Estado: En Revision y Retiro =>
    //        <Revisado Ok> / <Rechazar> / <No recibido>
    //Caso: Recibido y Estado: Revisado y Retiro =>  
    //        <Devolver Dinero> / <Cambio> / <Reparar>
    //Caso: Destruido y Estado: Destruido y NO Retiro =>
    //        <Devolver Dinero> / <Cambio> / <Accesorio>
    
    //TODO: que hay que hacer cuando se recibe y se rechaza ???

    // accesorio: 12, cambio: 10, destruccionpendiente: 3, destruido: 8, devolucion$: 9, enrevision: 5, noprocesado: 1, norecibido: 7,
    // otabierta: 13, otcerrada: 14, rechazado: 2, reparacion: 11, retiropendiente: 4, revisado: 6

    // cancelado: 9, completado: 8, destruccionsolicitada: 4, destruido: 6, enproceso: 2, inicial: 1, recibido: 5, retirosolicitado: 3, revisado: 7