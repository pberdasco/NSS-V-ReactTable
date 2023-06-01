/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { useTableContext } from "../../contexts/tableContextHook.jsx";
import setEstadoCab from '../../../services/updateCasos.js';

export default function DetActionBtn({row, caso, actions, icon, tooltip}) {
    const {setListaCasosUpdated, modalOrdenIsOpen, setModalOrdenIsOpen, setCasoActual, setItemActual} = useTableContext();


    const handleClick = () => {
            setCasoActual(caso);
            setItemActual(row);
            actions.setEstadoCab && setEstadoCab(actions.setEstadoCabNumber, row, setListaCasosUpdated);
            if(actions.setOrdenTrabajo === "new" && !modalOrdenIsOpen){
                setModalOrdenIsOpen(true);
            }
        }

    return (
        <button onClick={handleClick} title={tooltip}>
            {icon}
        </button>
    )
}


DetActionBtn.propTypes = {
    row: PropTypes.object.isRequired,
    caso: PropTypes.object.isRequired,
    actions: PropTypes.object,
    icon: PropTypes.element,
    tooltip: PropTypes.string
};