import PropTypes from 'prop-types';
import { useTableContext } from "../../contexts/tableContextHook.jsx";
import setEstadoCab from '../updateCasos.js';

export default function ActionBtn({row, actions, icon, tooltip}) {
    const {setListaCasosUpdated, modalIsOpen, setModalIsOpen} = useTableContext();
    
    
    return (
        <button onClick={
            () => {
                if (actions.setEstadoCab)
                    setEstadoCab(actions.setEstadoCabNumber, row, setListaCasosUpdated);
                if (actions.setOrdenTrabajo === "new"){
                    if (!modalIsOpen)
                        setModalIsOpen(true);
                }
            }}    
        title={tooltip}>
            {icon}
        </button>
    )
}


ActionBtn.propTypes = {
    row: PropTypes.object.isRequired,
    actions: PropTypes.object,
    icon: PropTypes.element,
    tooltip: PropTypes.string
};