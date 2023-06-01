import PropTypes from 'prop-types';
import "./ingreso-form.css";

export function ShowCasoForm({ caso }){
    //const cliente = "Registro del cliente" // Traer al cliente del caso
    const c = caso.original;
    return (
      <>
        <h3>Caso: {c.id}</h3>
        <div className="messageBodyFlex">   
            <div>Fecha Alta: <strong>{c.fechaAlta}</strong></div>
            <div>Fecha Inicio: <strong>${c.fechaInicio}</strong></div>
            <div>Datos: <strong>{c.statusDatosID}</strong></div>
            <div>Estado: <strong>{c.estadoID}</strong></div>
            <div>Usuario: <strong>{c.cliente.mail}</strong></div>
        </div>
        <div className="messageBodyFlex">
            <div>Cliente: <strong>${c.cliente.documento} - {c.cliente.apellido}, {c.cliente.nombre}</strong></div>
            <div>Empresa: <strong>{c.cliente.empresa  || "Particular"}</strong></div>
        </div>
        <div className="messageBodyFlex">
            <div>Domicilio: <strong>{c.direccion.calle} {c.direccion.numero} - {c.direccion.provincia} ({c.direccion.codigoPostal}) {c.direccion.localidad}</strong></div>
            <div>Retiro <strong>{(c.retiro)?"Si":"No"}</strong></div>
            <div>Opción Retiro/Envio: <strong>{c.opcionRetiro}</strong></div>
        </div>
      </>
    );
  }

  ShowCasoForm.propTypes = {
    caso: PropTypes.object.isRequired,
  }