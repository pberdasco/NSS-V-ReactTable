import { useContext } from "react";
import { Context } from "./tableContext.jsx";


export const useTableContext = () => {
    const context = useContext(Context)
    return context;
}