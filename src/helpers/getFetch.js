const productos = [
    {id:'1', precio: 450000,categoria:'cuerdas',img:"https://como-funciona.co/wp-content/uploads/2018/10/como-funciona-una-guitarra-electrica.jpg",nombre:'guitarra',stock:10,detalles:'guitarra...'},
    {id:'2', precio: 420000,categoria:'percusion',img:"https://http2.mlstatic.com/D_NQ_NP_845390-MLA43844397323_102020-V.jpg",nombre:'bateria',stock:10,detalles:'bateria...'},
    {id:'3', precio: 410000,categoria:'cuerdas',img:"https://bairesrocks.vteximg.com.br/arquivos/ids/209734/612817-MLA31130941180_062019-F.jpg?v=637313839008670000",nombre:'bajo',stock:10,detalles:'bajo...'},
    {id:'4', precio: 400000,categoria:'vientos',img:"https://st.depositphotos.com/1063346/1340/i/450/depositphotos_13402502-stock-photo-trumpet.jpg",nombre:'trompeta',stock:1,detalles:'trompeta...'},
    {id:'5', precio: 390000,categoria:'cuerdas',img:"https://www.ecured.cu/images/d/d9/Guitarra_el%C3%A9ctrica_marca_Ibanez.jpg",nombre:'guitarra',stock:10,detalles:'guitarra...'},
    {id:'6', precio: 340000,categoria:'percusion',img:"https://musicalmonroe.com.ar/wp-content/uploads/2020/06/886048-MLA42325572816_062020-O.jpg",nombre:'bateria',stock:10,detalles:'bateria...'},
    {id:'7', precio: 430000,categoria:'cuerdas',img:"https://http2.mlstatic.com/D_NQ_NP_731442-MLA31008282752_062019-O.jpg",nombre:'bajo',stock:10,detalles:'bajo...'},
    {id:'8', precio: 480000,categoria:'vientos',img:"https://st.depositphotos.com/1063346/1340/i/450/depositphotos_13402502-stock-photo-trumpet.jpg",nombre:'trompeta',stock:1,detalles:'trompeta...'}
  ]
  export const getFetch =(id)=>{ 
    return new Promise((resolve,reject)=>{
                            setTimeout(()=>{
                              if(id){
                                resolve(productos.find(prod => prod.id===id))
                              }
                              else{
                                resolve(productos)
                              }
                              reject('404 not found')
                            },3000)
                          })};

//category-detail-img-name-price-stock