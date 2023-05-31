import PropTypes from 'prop-types';
import { useState } from 'react';
import "./ingreso-form.css";

export function FallaForm({ onSave, onCancel }){
    const [falla, setFalla] = useState({
        fallaCliente: '',
        fallaStd: '',
        aclaraFalla: '',
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFalla((prevState) => ({
          ...prevState,
          [id]: value,
        }));
      };
  
    const handleSave = () => {
        //TODO: Ver el proceso de grabacion    
        onSave(102, falla.fallaStd, falla.aclaraFalla);
        onCancel();
    };
  

    //TODO: cargar defaults
    //TODO: sacar los onChange en los campos readOnly
    //TODO: definir y agregar la grilla de insumos
    return (
      <>
        <h2>Revisión del Producto</h2>
        <div className="grillaInputStd">			
            <div className="stdBloqueCampo c-2 w-4">
                <label htmlFor="fallasCliente" className="stdLabelIngreso">Falla declarada:</label><br/>
                <input type="text" id="fallaCliente" className="stdInputIngreso"  readOnly/>
            </div>
        </div>
        <div className="grillaInputStd">
            <div className="stdBloqueCampo c-2 w-4">
                <label htmlFor="fallaStd" className="stdLabelIngreso">Falla detectada:</label><br/>
                <input type="text" list="fallasStd" id="fallaStd" className="stdInputIngreso" autoComplete="off" onChange={handleChange}/>
            </div>
        </div>
        <div className="grillaInputStd">
            <div className="stdBloqueCampo c-1 w-6">
                <label htmlFor="aclaraFalla" className="stdLabelIngreso">Aclaracion de la falla:</label><br/>
                <input type="text" id="aclaraFalla" className="stdInputIngreso" autoComplete="off" onChange={handleChange}/>
            </div>	
            <datalist id="fallasStd">
                    {/* Crear los:  <option value="Motor clavado"></option>  */}
            </datalist>	
        </div>

        <div className="grillaInputStd">
            <div className="stdIngresoButtons c-5 w-1">
                <button type="button" id="ingresaFallaGuardar" className="btnGeneral" onClick={handleSave}>Guardar</button>					
            </div>
            <div className="stdIngresoButtons c-6 w-1">
                <button type="button" id="ingresaFallaCancelar" className="btnGeneral">Cancelar</button>					
            </div>
        </div>
      </>
    );
  }

  FallaForm.propTypes = {
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
  }