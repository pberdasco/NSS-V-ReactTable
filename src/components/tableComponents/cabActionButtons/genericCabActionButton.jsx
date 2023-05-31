import PropTypes from 'prop-types';
import { useTableContext } from "../../contexts/tableContextHook.jsx";
import setEstadoCab from '../updateCasos.js';

export default function CabActionBtn({row, actions, icon, tooltip}) {
    const {setListaCasosUpdated, modalIsOpen, setModalIsOpen} = useTableContext();
    
    
    return (
        <button onClick={
            () => {
                actions.setEstadoCab && setEstadoCab(actions.setEstadoCabNumber, row, setListaCasosUpdated);
                actions.setOrdenTrabajo === "new" && !modalIsOpen && setModalIsOpen(true);
                }
            }    
        title={tooltip}>
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