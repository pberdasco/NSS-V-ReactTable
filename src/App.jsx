import Header from "./components/bigContainers/header.jsx";
import Main from "./components/bigContainers/principal.jsx";
import Footer from "./components/bigContainers/footer.jsx";
import MainRMAContent from "./components/bigContainers/mainRMA.jsx";

function App(){
  return <>
    <Header/>
    <Main content={<MainRMAContent/>}/>
    <Footer/>

  </>
}

export default App