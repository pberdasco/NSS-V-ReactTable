import PropTypes from 'prop-types';
import {FaBullhorn} from "react-icons/fa"


export default function EntregarBtn(props) {
    const chgEstado = props.fCambio;
    return (
        <button onClick={() => chgEstado(7)}><FaBullhorn/></button>
    )
}

EntregarBtn.propTypes = {
    fCambio: PropTypes.func.isRequired,
};