import PropTypes from 'prop-types';
import {FaSearch} from "react-icons/fa"
import ActionBtn from './genericDetActionButton.jsx';


export default function ViewItemBtn({row, caso}) {  
    const actions = {
        setEstadoCab: true,
        setEstadoCabNumber: 3,
        setOrdenTrabajo: "new"
    };
    
    return (
        <ActionBtn row={row} caso={caso} actions={actions} icon={<FaSearch/>} tooltip="Presione aqui para cambiar el estado a 3"/>
    )
}


ViewItemBtn.propTypes = {
    row: PropTypes.object.isRequired,
    caso: PropTypes.object.isRequired
};