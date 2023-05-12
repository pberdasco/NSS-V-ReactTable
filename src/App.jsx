import Header from "./components/bigContainers/header.jsx";
import Main from "./components/bigContainers/mainGeneral.jsx";
import Footer from "./components/bigContainers/footer.jsx";
import MainSTContent from "./components/bigContainers/mainST.jsx";
import MainProductos from "./components/bigContainers/mainProducto.jsx"
import Login from "./components/bigContainers/login.jsx"
import {Route, Routes } from "react-router-dom";

function App(){
  return <>
    <Header/>
    <Routes>
        <Route path="/" exact element={<Main  content={<MainSTContent/>} />} /> 
        <Route path="/productos" element={<MainProductos/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<>Not Found</>}/>
    </Routes> 
    <Footer/>
  </>
}

export default App