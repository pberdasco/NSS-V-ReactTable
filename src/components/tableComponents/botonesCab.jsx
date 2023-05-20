import PropTypes from 'prop-types';
import {FaBullhorn} from "react-icons/fa"

export default function BotonesCab({row, setEstado}) {
    const cantItems = row.original.items.length;
    
    return (
        <button onClick={() => setEstado(7, row)}>
            <FaBullhorn/>
            Items:{cantItems}
        </button>
    )
}

BotonesCab.propTypes = {
    row: PropTypes.object.isRequired,
    setEstado: PropTypes.func.isRequired
};