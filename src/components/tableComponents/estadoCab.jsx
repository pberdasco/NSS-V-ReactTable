import PropTypes from 'prop-types';
import { getEstadoCab} from "../../estados.JS";
import "./colorEstado.css";

export default function EstadoCab({estado}) {
    return (
        <span className={getEstadoCab(estado).claseCSS}>{getEstadoCab(estado).nombre}</span>
    )
}

EstadoCab.propTypes = {
    estado: PropTypes.number.isRequired,
};