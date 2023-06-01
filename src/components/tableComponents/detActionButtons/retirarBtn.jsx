import PropTypes from 'prop-types';
import {FaTruck} from "react-icons/fa"
import ActionBtn from './genericDetActionButton.jsx';


export default function RetirarBtn({row, caso}) {  
    const actions = {
        setEstadoCab: true,
        setEstadoCabNumber: 1,
        setFalla: true,
    };
    
    return (
        <ActionBtn row={row} caso={caso} actions={actions} icon={<FaTruck/>} tooltip="Solicitar Retiro"/>
    )
}


RetirarBtn.propTypes = {
    row: PropTypes.object.isRequired,
    caso: PropTypes.object.isRequired
};