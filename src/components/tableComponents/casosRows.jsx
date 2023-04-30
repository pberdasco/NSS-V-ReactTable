import PropTypes from 'prop-types';
import { getEstadoCab, getEstadoDatos} from "../../estados.js";
import EntregarBtn from "./buttonComponents/entregar.jsx";
import PedirBtn from "./buttonComponents/pedir.jsx";
import ItemsTable from "./itemsTable.jsx"

export default function CasosRows(props){
    
    const casos = props.casos;

    return <>
        {casos.map((caso) => {
            const botones = determinarBotones(caso.id);
            return (
            <>            
                <tr key={caso.id}>
                    <td>-det-</td> 
                    <td>{caso.id}</td>
                    <td>{caso.fechaAlta}</td>
                    <td>{1}</td>
                    <td className={getEstadoDatos(caso.statusDatosID).claseCSS}>
                        {getEstadoDatos(caso.statusDatosID).nombre}</td>
                    <td>{caso.fechaInicio}</td>
                    <td className={getEstadoCab(caso.estadoID).claseCSS}>
                        {getEstadoCab(caso.estadoID).nombre}</td>
                    <td>{caso.retiro}</td>
                    <td>{`${caso.cliente.id} ${caso.cliente.mail} (${caso.cliente.empresa || caso.cliente.apellido})`}</td>
                    <td>{botones.map((Boton, index) => (
                            <Boton key={index} fCambio={changeEstados} />
                        ))}
                    </td>     
                </tr>
                <ItemsTable caso={caso}/>
            </>
            );
        })}
      </>
}

CasosRows.propTypes = {
    casos: PropTypes.array.isRequired,
};

function changeEstados(nuevoEstado){
    console.log("changeEstados", nuevoEstado)
    return nuevoEstado;    
}

function determinarBotones(casoId) {
    const botones = [];
  
    switch (casoId) {
      case 1:
        botones.push(EntregarBtn, PedirBtn);
        break;
      case 2:
        botones.push(EntregarBtn);
        break;
      default:
        botones.push(PedirBtn);
        break;
    }
  
    return botones;
  }

/*
function ejemploChangeCasos(casoId, nuevoEstado) {
    setCasos(casos.map(caso => {
                    if (caso.id === casoId) {
                        return {...caso, estado: nuevoEstado}
                    } else {
                        return caso;
                    }
    }))

    // o en 1 linea:
    //setCasos(casos.map(caso => caso.id === casoId ? { ...caso, estado: nuevoEstado } : caso));
}
*/
  