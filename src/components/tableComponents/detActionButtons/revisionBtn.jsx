import PropTypes from 'prop-types';
import {FaRegThumbsUp} from "react-icons/fa"
import ActionBtn from './genericDetActionButton.jsx';


export default function RevisionBtn({row, caso}) {  
    const actions = {
        setEstadoCab: true,
        setEstadoCabNumber: 1,
        setFalla: true,
    };
    
    return (
        <ActionBtn row={row} casp={caso} actions={actions} icon={<FaRegThumbsUp/>} tooltip="Pasar a Revisado, indicando la falla."/>
    )
}


RevisionBtn.propTypes = {
    row: PropTypes.object.isRequired,
    caso: PropTypes.object.isRequired
};