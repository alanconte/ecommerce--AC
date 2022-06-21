import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Titulo from './Components/Pruebas/Titulo'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './Components/ItemCount/ItemCount';
import ItemListContainer from './Components/Conteiners/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/Conteiners/ItemDetailContainer/ItemDetailContainer';
function App() {
  console.log('alan')
  let subtituloApp = "Instrumentos Musicales"
  let tituloApp='Lotus'
  let saludo ='Bienvenidos a Lotus'
  const onAdd=(count)=>{console.log(count)}
  const stock= 7
  const initial = 1
  return(<>
  <NavBar/>
  <Titulo titulo={tituloApp} subtitulo={subtituloApp}/>
  <ItemListContainer saludo={saludo}/>
  <ItemCount 
                onAdd={onAdd} 
                initial={initial} 
                stock={stock}/>
  <ItemDetailContainer/>
  </>
  )
}

export default App
