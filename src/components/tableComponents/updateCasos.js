import { Casos } from "../../apiAccess/casosApi.js";
// ==================================================
//      Prueba cambio de un atributo en una fila
export default async function setEstadoCab(estado, row, setListaCasosUpdated) {    
    try{
        const dataCasos = await Casos.updateCab(row.original.id, {estadoID: estado});
        //console.log(dataCasos?.estadoID, "dataCasos:", dataCasos);
        if (!dataCasos.errorStatus){
            setListaCasosUpdated({row})
        }else{
            console.log("error", dataCasos.errorStatus, dataCasos.errorMessage )
        }
            
    }catch (error){
        console.log("fallo en setEstadoCab", error)
    }
}

