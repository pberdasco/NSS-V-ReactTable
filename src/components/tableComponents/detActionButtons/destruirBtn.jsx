import PropTypes from 'prop-types';
import {FaTrashAlt} from "react-icons/fa"
import ActionBtn from './genericDetActionButton.jsx';


export default function DestruirBtn({row, caso}) {  
    const actions = {
        setEstadoCab: true,
        setEstadoCabNumber: 1,
        setFalla: true,
    };
    
    return (
        <ActionBtn row={row} caso={caso} actions={actions} icon={<FaTrashAlt/>} tooltip="Solicitar Destrucción"/>
    )
}


DestruirBtn.propTypes = {
    row: PropTypes.object.isRequired,
    caso: PropTypes.object.isRequired
};