import { ModalForm } from "./modalForm.jsx";
import { OrdenForm } from "./ordenForm.jsx";
import { useTableContext } from "../contexts/tableContextHook.jsx";

export function OrdenModal(){
    const {modalIsOpen, setModalIsOpen} = useTableContext();
    
    const handleSave = (nroOrden, tecnico, problema) => {
      console.log("Guardando: ", nroOrden, tecnico, problema);
      setModalIsOpen(false);
    };
  
    return (
      <ModalForm isOpen={modalIsOpen} closeModal={() => setModalIsOpen(false)} 
                contentClassName="ingresaStdWindow-md" modalOverlayClass="ingresaStdWindowOverlay" bodyOpenClassName="ingresaStdWindowBody">
                    {/* ingresaStdWindowBody */}
        <OrdenForm onSave={handleSave} onCancel={() => console.log("Cancelando orden...")} />
      </ModalForm>
    );
  }