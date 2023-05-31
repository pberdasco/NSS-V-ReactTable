import PropTypes from 'prop-types';
import {FaSearch} from "react-icons/fa"
import ActionBtn from './genericDetActionButton.jsx';


export default function ViewItemBtn({row}) {  
    const actions = {
        setEstadoCab: true,
        setEstadoCabNumber: 3,
        setOrdenTrabajo: "new"
    };
    
    return (
        <ActionBtn row={row} actions={actions} icon={<FaSearch/>} tooltip="Presione aqui para cambiar el estado a 3"/>
    )
}


ViewItemBtn.propTypes = {
    row: PropTypes.object.isRequired
};