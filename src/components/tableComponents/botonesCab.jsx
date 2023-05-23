import PropTypes from 'prop-types';
import {FaBullhorn} from "react-icons/fa"
import { useTableContext } from "../contexts/tableContextHook.jsx";



export default function BotonesCab({row}) {
    const {listaCasos, setListaCasos} = useTableContext();
    const cantItems = row.original.items.length;
    
    return (
        <button onClick={() => setEstado(7, row)}>
            <FaBullhorn/>
            Items:{cantItems}
        </button>
    )

    // ==================================================
    //      Prueba cambio de un atributo en una fila
    function setEstado(estado, row) {
        
        console.log("entrando en setEstado: listaCasos[row.index]", listaCasos[row.index])
        const updateRecordInmutable = () => {
            const newRecord = { ...row.original, estadoID: estado };
            const newlistaCasos = [...listaCasos];
            newlistaCasos[row.index] = newRecord;   // en lugar de row.index quizas hay que hacer un findIndex del id en original
            return newlistaCasos
        };
        const newListaCasos = updateRecordInmutable();
        setListaCasos(newListaCasos);  
    }
}


 BotonesCab.propTypes = {
    row: PropTypes.object.isRequired
};