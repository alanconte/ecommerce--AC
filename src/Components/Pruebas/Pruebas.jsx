import Titulo from "./Titulo"

//PROPS
const Pruebas = (props) => {
  console.log(props)
  let titulo = "titulo de prueba"
  let subtituloPrueba = "subtitulo de prueba"
  const {param1}=props
  return (
    <>
    <div>
      Pruebas
      <div>este es el {param1}</div>
    </div>
    <Titulo titulo={titulo} subtitulo={subtituloPrueba}/>
    </>
  )
}
export default Pruebas 
