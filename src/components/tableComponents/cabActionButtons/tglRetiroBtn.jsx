import PropTypes from 'prop-types';
import {FaBullhorn} from "react-icons/fa"

import CabActionBtn from './genericCabActionButton.jsx';


export default function TglRetiroBtn({row}) {  
    //const cantItems = row.original.items.length;
    const actions = {
        setEstadoCab: true,
        setEstadoCabNumber: 7,
    };
    
    return (
        <CabActionBtn row={row} actions={actions} icon={<FaBullhorn/>} tooltip="Presione aqui para cambiar el estado a 7"/>
    )
}



TglRetiroBtn.propTypes = {
    row: PropTypes.object.isRequired
};