import PropTypes from 'prop-types';
import {FaBullhorn} from "react-icons/fa"
import { useTableContext } from "../../contexts/tableContextHook.jsx";
import setEstadoCab from '../updateCasos.js';


export default function TglRetiroBtn({row}) {
    const {setListaCasosUpdated} = useTableContext();
    //const cantItems = row.original.items.length;
    return (
        <button onClick={() => setEstadoCab(7, row, setListaCasosUpdated)}>
            <FaBullhorn/>
        </button>
    )
}


TglRetiroBtn.propTypes = {
    row: PropTypes.object.isRequired
};