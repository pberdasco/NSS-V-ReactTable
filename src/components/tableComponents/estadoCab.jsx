import PropTypes from 'prop-types';

export default function EstadoCab({estado}) {
    let textoEstado = "Otros";
    let clName = "colorRechazado"

    if (estado == 1) {
        textoEstado = "Original" ;
        clName = "";
    } 
    return (
        <p className={clName}>{textoEstado}</p>
    )
}

EstadoCab.propTypes = {
    estado: PropTypes.string.isRequired,
};