import { ModalForm } from "./modalForm.jsx";
import { FallaForm } from "./fallaForm.jsx";
import { useTableContext } from "../contexts/tableContextHook.jsx";

export function FallaModal(){
    const {modalFallaIsOpen, setModalFallaIsOpen} = useTableContext();
    
    const handleSave = (nroFalla, fallaStd, aclaraFalla) => {
      console.log("Guardando: ", nroFalla, fallaStd, aclaraFalla);
      setModalFallaIsOpen(false);
    };
  
    return (
      <ModalForm isOpen={modalFallaIsOpen} closeModal={() => setModalFallaIsOpen(false)} 
                 contentClassName="ingresaStdWindow-md" modalOverlayClass="ingresaStdWindowOverlay">
        <FallaForm onSave={handleSave} onCancel={() => console.log("Cancelando ingreso falla...")} />
      </ModalForm>
    );
  }