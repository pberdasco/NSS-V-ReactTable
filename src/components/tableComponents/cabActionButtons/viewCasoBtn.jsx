import PropTypes from 'prop-types';
import {FaSearch} from "react-icons/fa"
import CabActionBtn from './genericCabActionButton.jsx';


export default function ViewCasoBtn({row}) {  
    const actions = {
        //setEstadoCab: true,
        //setEstadoCabNumber: 3,
        //setOrdenTrabajo: "new"
        viewCaso: true
    };

    return (
        <CabActionBtn row={row} actions={actions} icon={<FaSearch/>} tooltip="Ver detalles del caso"/>
    )
}


ViewCasoBtn.propTypes = {
    row: PropTypes.object.isRequired
};