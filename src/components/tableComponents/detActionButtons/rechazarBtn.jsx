import PropTypes from 'prop-types';
import {GiCancel} from "react-icons/gi"
import ActionBtn from './genericDetActionButton.jsx';


export default function RechazarBtn({row, caso}) {  
    const actions = {
        setEstadoCab: true,
        setEstadoCabNumber: 1,
        setFalla: true,
    };
    
    return (
        <ActionBtn row={row} caso={caso} actions={actions} icon={<GiCancel/>} tooltip="Rechazar. El producto no cumple condiciones de garantía"/>
    )
}


RechazarBtn.propTypes = {
    row: PropTypes.object.isRequired,
    caso: PropTypes.object.isRequired
};