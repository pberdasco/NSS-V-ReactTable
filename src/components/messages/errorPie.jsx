import PropTypes from 'prop-types';
import "./mensajes.css";

export default function ErrorPie({status, message, setError}){
    return  <>
                <p className="error">
                    Error: {status} - {message}
                </p>
                <button onClick={()=>setError({status: 0, message:""})}>Cerrar</button>
            </>
}

ErrorPie.propTypes = {
    status: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    setError: PropTypes.func.isRequired
}