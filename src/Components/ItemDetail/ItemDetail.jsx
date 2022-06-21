
const ItemDetail = ({producto}) => {
  return (
    <div className="row">
    <img src={producto.img} alt="" />
    <h2>nombre: {producto.nombre}</h2>
    <h3>detalles: {producto.detalles}</h3>
    <h4>precio: {producto.precio}</h4>
    </div>
  )
}

export default ItemDetail