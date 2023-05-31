import "./mensajes.css";
import StandardPie from "./standardPie.jsx";
import ErrorPie from "./errorPie.jsx";

import { useTableContext } from "../contexts/tableContextHook.jsx";

export default function Mensajes(){
    const {errorActivo, setErrorActivo} = useTableContext();
    return (errorActivo.status === 0) ? <StandardPie/> : <ErrorPie errorStatus={errorActivo.Status} errorMessage={errorActivo.message} setError={setErrorActivo}/>
}