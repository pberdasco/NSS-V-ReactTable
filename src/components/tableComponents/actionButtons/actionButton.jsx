import PropTypes from 'prop-types';
import { useTableContext } from "../../contexts/tableContextHook.jsx";
import setEstadoCab from '../updateCasos.js';


export default function ActionBtn({row, actions, icon, tooltip}) {
    const {setListaCasosUpdated} = useTableContext();
    
    
    return (
        <button onClick={
            () => {
                if (actions.setEstadoCab)
                    setEstadoCab(actions.setEstadoCabNumber, row, setListaCasosUpdated)
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