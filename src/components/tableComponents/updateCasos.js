import { Casos } from "../../apiAccess/casosApi.js";
// ==================================================
//      Prueba cambio de un atributo en una fila
export default async function setEstadoCab(estado, row, setListaCasosUpdated) {    
    try{
        const dataCasos = await Casos.updateCab(row.original.id, {estadoID: estado});
        console.log(dataCasos?.estadoID, "dataCasos:", dataCasos);
        if (!dataCasos.errorStatus){
            setListaCasosUpdated({row})
        }else{
            console.log("error", dataCasos.errorStatus, dataCasos.errorMessage )
        }
            
    }catch (error){
        console.log("fallo en setEstadoCab", error)
    }
}

// Version en la que modifica directamente listaCasos.
    // console.log("entrando en setEstado: listaCasos[row.index]", listaCasos[row.index])
    // const updateRecordInmutable = () => {
    //     const newRecord = { ...row.original, estadoID: estado };
    //     const newlistaCasos = [...listaCasos];
    //     newlistaCasos[row.index] = newRecord;   // en lugar de row.index quizas hay que hacer un findIndex del id en original
    //     return newlistaCasos
    // };
    // const newListaCasos = updateRecordInmutable();
    // setListaCasos(newListaCasos); 