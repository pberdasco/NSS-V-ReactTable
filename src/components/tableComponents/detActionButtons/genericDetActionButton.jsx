import PropTypes from 'prop-types';
import { useTableContext } from "../../contexts/tableContextHook.jsx";
import setEstadoCab from '../../../services/updateCasos.js';

export default function DetActionBtn({row, actions, icon, tooltip}) {
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


DetActionBtn.propTypes = {
    row: PropTypes.object.isRequired,
    actions: PropTypes.object,
    icon: PropTypes.element,
    tooltip: PropTypes.string
};