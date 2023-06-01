import { ModalForm } from "./modalForm.jsx";
import { ShowCasoForm } from "./showCasoForm.jsx";
import { useTableContext } from "../contexts/tableContextHook.jsx";

export function ShowCasoModal(){
    const {modalViewCasoIsOpen, setModalViewCasoIsOpen, casoActual} = useTableContext();
  
    return (
      <ModalForm isOpen={modalViewCasoIsOpen} closeModal={() => setModalViewCasoIsOpen(false)} 
                 contentClassName="ingresaStdWindow-md" modalOverlayClass="ingresaStdWindowOverlay">
        <ShowCasoForm caso={casoActual} />
      </ModalForm>
    );
  }