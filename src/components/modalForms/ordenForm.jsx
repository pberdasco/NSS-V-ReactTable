import PropTypes from 'prop-types';
import { useState } from 'react';
import "./ingreso-form.css";

export function OrdenForm({ onSave, onCancel }){
    const [ordenTrabajo, setOrdenTrabajo] = useState({
        otNro: '',
        otTecnico: '',
        otProducto: '',
        fallasClienteOT: '',
        fallaStdOT: '',
        aclaraFallaOT: ''
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setOrdenTrabajo((prevState) => ({
          ...prevState,
          [id]: value,
        }));
      };
  
    const handleSave = () => {
      onSave(101, ordenTrabajo.otTecnico, ordenTrabajo.aclaraFallaOT);
      onCancel();
    };
  
    return (
      <>
        <h2>Orden de Trabajo</h2>
        <div className="grillaInputStd">			
            <div className="stdBloqueCampo c-1 w-1">
                <label htmlFor="otNro" className="stdLabelIngreso">Número Orden:</label><br/>
                <input type="text" id="otNro" className="stdInputIngreso" onChange={handleChange} readOnly/>
            </div>
            <div className="stdBloqueCampo c-2 w-2">
                <label htmlFor="otTecnico" className="stdLabelIngreso">Técnico:</label><br/>
                <input type="text" id="otTecnico" className="stdInputIngreso" onChange={handleChange}/>
            </div>
            <div className="stdBloqueCampo c-4 w-3">
                <label htmlFor="otProducto" className="stdLabelIngreso">Producto:</label><br/>
                <input type="text" id="otProducto" className="stdInputIngreso"  onChange={handleChange} readOnly/>
            </div>
        </div>
        <div className="grillaInputStd">			
            <div className="stdBloqueCampo c-1 w-3">
                <label htmlFor="fallasClienteOT" className="stdLabelIngreso">Falla declarada:</label><br/>
                <input type="text" id="fallaClienteOT" className="stdInputIngreso" onChange={handleChange} readOnly/>
            </div>
            <div className="stdBloqueCampo c-4 w-3">
                <label htmlFor="fallaStdOT" className="stdLabelIngreso">Falla detectada:</label><br/>
                <input type="text" list="fallasStd" id="fallaStdOT" className="stdInputIngreso" onChange={handleChange} readOnly/>
            </div>
        </div>
        <div className="grillaInputStd">
            <div className="stdBloqueCampo c-1 w-6">
                <label htmlFor="aclaraFallaOT" className="stdLabelIngreso">Aclaracion de la falla:</label><br/>
                <input type="text" id="aclaraFallaOT" className="stdInputIngreso" onChange={handleChange} />
            </div>	
        </div>
        <div className="grilla">
            <div className="grillaInputStd">
                <div className="c-1 w-1">
                    <h3>Insumos</h3>
                </div>
                <div className=" c-2 w-1">
                    <button type="button" id="otMasInsumo" className="btnMedio"><i className="fa-regular fa-square-plus" title="Agregar Insummo"></i></button>
                </div>
            </div>
            <div className="grillaInputStd">
                <div className="stdBloqueCampo c-1 w-6">
                    <table id="grilla-otInsumos" className="gillasStd">
                        <thead>
                            <tr className="titulos-cabecera">
                                <th data-column="1">Clase</th>
                                <th data-column="2">Insumo</th>
                                <th data-column="3">Observaciones</th>
                            </tr>
                        </thead>
                        <tbody id="otInsumos-body">
                            {/* Aqui el script crea la primer fila en blanco cuando se presiona Agregar */}
                        </tbody>	
                    </table>
                    <datalist id="claseInsumos">
                        <option value="Repuesto"></option>
                        <option value="Accesorio"></option>
                        <option value="Mano de Obra"></option>
                    </datalist>

                    <datalist id="insumos">
                        {/* Crear los:  <option value="MO1123 - Tecnico"></option> */}
                    </datalist>
                </div>
            </div>
        </div>
        <div className="grillaInputStd">
            <div className="stdIngresoButtons c-4 w-1">
                <button type="button" id="otAbierta" className="btnGeneral" onClick={handleSave}>Abierta</button>					
            </div>
            <div className="stdIngresoButtons c-5 w-1">
                <button type="button" id="otCerrada" className="btnGeneral" onClick={handleSave}>Cerrada</button>					
            </div>
            <div className="stdIngresoButtons c-6 w-1">
                <button type="button" id="otCancelar" className="btnGeneral">Cancelar</button>					
            </div>
        </div>
      </>
    );
  }

  OrdenForm.propTypes = {
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
  }