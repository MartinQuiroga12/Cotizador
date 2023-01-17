import{CotizadorProvider} from "./context/CotizadorProvider"
import AppSeguro from "./componets/AppSeguro"



function App  () {

  
  return (
    <CotizadorProvider>
    <AppSeguro />
    </CotizadorProvider>
  )
}

export default App
