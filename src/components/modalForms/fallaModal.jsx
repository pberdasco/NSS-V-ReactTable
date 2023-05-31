import { ModalForm } from "./modalForm.jsx";
import { FallaForm } from "./fallaForm.jsx";
import { useTableContext } from "../contexts/tableContextHook.jsx";

export function OrdenModal(){
    const {modalIsOpen, setModalIsOpen} = useTableContext();
    
    const handleSave = (nroFalla, fallaStd, aclaraFalla) => {
      console.log("Guardando: ", nroFalla, fallaStd, aclaraFalla);
      setModalIsOpen(false);
    };
  
    return (
      <ModalForm isOpen={modalIsOpen} closeModal={() => setModalIsOpen(false)} 
                 contentClassName="ingresaStdWindow-md" modalOverlayClass="ingresaStdWindowOverlay">
        <FallaForm onSave={handleSave} onCancel={() => console.log("Cancelando ingreso falla...")} />
      </ModalForm>
    );
  }