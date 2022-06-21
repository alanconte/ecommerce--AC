const productos = [
    {id:1,img:"https://como-funciona.co/wp-content/uploads/2018/10/como-funciona-una-guitarra-electrica.jpg",nombre:'guitarra',stock:10,detalles:'guitarra...'},
    {id:2,img:"https://http2.mlstatic.com/D_NQ_NP_845390-MLA43844397323_102020-V.jpg",nombre:'bateria',stock:10,detalles:'bateria...'},
    {id:3,img:"https://bairesrocks.vteximg.com.br/arquivos/ids/209734/612817-MLA31130941180_062019-F.jpg?v=637313839008670000",nombre:'bajo',stock:10,detalles:'bajo...'},
    {id:4,img:"https://st.depositphotos.com/1063346/1340/i/450/depositphotos_13402502-stock-photo-trumpet.jpg",nombre:'trompeta',stock:1,detalles:'trompeta...'},
    {id:5,img:"https://www.ecured.cu/images/d/d9/Guitarra_el%C3%A9ctrica_marca_Ibanez.jpg",nombre:'guitarra',stock:10,detalles:'guitarra...'},
    {id:6,img:"https://musicalmonroe.com.ar/wp-content/uploads/2020/06/886048-MLA42325572816_062020-O.jpg",nombre:'bateria',stock:10,detalles:'bateria...'},
    {id:7,img:"https://http2.mlstatic.com/D_NQ_NP_731442-MLA31008282752_062019-O.jpg",nombre:'bajo',stock:10,detalles:'bajo...'},
    {id:8,img:"https://st.depositphotos.com/1063346/1340/i/450/depositphotos_13402502-stock-photo-trumpet.jpg",nombre:'trompeta',stock:1,detalles:'trompeta...'}
  ]
  export const getFetch =()=>{ 
    return new Promise((resolve,reject)=>{
                            setTimeout(()=>{
                              resolve(productos)
                              reject('404 not found')
                            },3000)
                          })};

//CONSULTA DETALLE
const producto = 
    {id:8,precio:300000,img:"https://st.depositphotos.com/1063346/1340/i/450/depositphotos_13402502-stock-photo-trumpet.jpg",nombre:'trompeta',stock:1,detalles:'trompeta...'}
  
  export const getFetchOne =()=>{ 
    return new Promise((resolve,reject)=>{
                            setTimeout(()=>{
                              resolve(producto)
                              reject('404 not found')
                            },3000)
                          })};
