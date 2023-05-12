import PropTypes from 'prop-types';

export default function BotonesCab({row, setEstado}) {
    const cantItems = row.original.items.length;
    
    return (
        <button onClick={() => setEstado(7, row)}>Items:{cantItems}</button>
    )
}

BotonesCab.propTypes = {
    row: PropTypes.object.isRequired,
    setEstado: PropTypes.func.isRequired
};