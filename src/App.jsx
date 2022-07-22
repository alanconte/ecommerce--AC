import { BrowserRouter as Rutas, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Titulo from './Components/Pruebas/Titulo'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/Conteiners/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/Conteiners/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import Inexistente from './Components/Inexistente/Inexistente';
import {  CartContextProvider } from './Components/Context/cartContext';


function App() {
  let subtituloApp = "Instrumentos Musicales"
  let tituloApp='Lotus'
  let saludo ='Bienvenidos a Lotus'

  return(
    <CartContextProvider
    //value={}
    >
            <Rutas>
              <NavBar/>
              <Titulo titulo={tituloApp} subtitulo={subtituloApp}/>
              <Routes>
                <Route path='/'element={<ItemListContainer saludo={saludo}/>}/>
                <Route path='/categoria/:categoriaId'element={<ItemListContainer saludo={saludo}/>}/>
                <Route path='/detalle/:id'element={<ItemDetailContainer/>}/>
                <Route path='/cart'element={<Cart/>}/>
                <Route path='*' element={<Navigate to='/Inexistente'/>}/>
                <Route path='/Inexistente' element={<Inexistente/>}/>
                {/* <Route path="/checkout" element={<Checkout/>} />
                <Route path="/formCheckout2" element={<FormCheckout2/>}/> */}
              </Routes>
              
            </Rutas>
    </CartContextProvider>
  )
}

export default App
