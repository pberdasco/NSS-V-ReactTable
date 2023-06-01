import { ModalForm } from "./modalForm.jsx";
import { OrdenForm } from "./ordenForm.jsx";
import { useTableContext } from "../contexts/tableContextHook.jsx";

export function OrdenModal(){
    const {modalOrdenIsOpen, setModalOrdenIsOpen} = useTableContext();
    
    const handleSave = (nroOrden, tecnico, problema) => {
      console.log("Guardando: ", nroOrden, tecnico, problema);
      setModalOrdenIsOpen(false);
    };
  
    return (
      <ModalForm isOpen={modalOrdenIsOpen} closeModal={() => setModalOrdenIsOpen(false)} 
                 contentClassName="ingresaStdWindow-md" modalOverlayClass="ingresaStdWindowOverlay">
        <OrdenForm onSave={handleSave} onCancel={() => console.log("Cancelando orden...")} />
      </ModalForm>
    );
  }