import PropTypes from 'prop-types';
import {FaRegThumbsUp} from "react-icons/fa"
import ActionBtn from './genericDetActionButton.jsx';


export default function RevisionBtn({row}) {  
    const actions = {
        setEstadoCab: true,
        setEstadoCabNumber: 1,
        setFalla: true,
    };
    
    return (
        <ActionBtn row={row} actions={actions} icon={<FaRegThumbsUp/>} tooltip="Presione aqui para cambiar el estado a 1 y pedir la falla"/>
    )
}


RevisionBtn.propTypes = {
    row: PropTypes.object.isRequired
};