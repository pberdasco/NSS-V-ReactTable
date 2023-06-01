/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { useTableContext } from "../../contexts/tableContextHook.jsx";
import setEstadoCab from '../../../services/updateCasos.js';

export default function CabActionBtn({row, actions, icon, tooltip}) {
    const {setListaCasosUpdated, modalOrdenIsOpen, setModalOrdenIsOpen, modalViewCasoIsOpen, setModalViewCasoIsOpen, setCasoActual} = useTableContext();

    const handleClick = () => {
        setCasoActual(row);
        actions.viewCaso && !modalViewCasoIsOpen && setModalViewCasoIsOpen(true);
        actions.setEstadoCab && setEstadoCab(actions.setEstadoCabNumber, row, setListaCasosUpdated);
        actions.setOrdenTrabajo === "new" && !modalOrdenIsOpen && setModalOrdenIsOpen(true);
        }

    return (
        <button onClick={handleClick} title={tooltip}>
            {icon}
        </button>
    )
}


CabActionBtn.propTypes = {
    row: PropTypes.object.isRequired,
    actions: PropTypes.object,
    icon: PropTypes.element,
    tooltip: PropTypes.string
};