import PropTypes from 'prop-types';
import {FaBuffer} from "react-icons/fa"


export default function PedirBtn(props) {
    const chgEstado = props.fCambio;
    return (
        <button onClick={() => chgEstado(7)}><FaBuffer/></button>
    )
}

PedirBtn.propTypes = {
    fCambio: PropTypes.func.isRequired,
};