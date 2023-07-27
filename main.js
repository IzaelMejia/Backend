class ProductManager{
    constructor(){
        //arreglo vacío
        this.productos= []
        this.ultimoId = 0; // Inicializamos el contador del último ID utilizado en 0
    }

    //metodo agregar productos
    addProduct(titulo,descripcion,precio,ruta,code,disponible) {
        
        if (this.productos.some((producto) => producto.code === code)) {
            console.log("Not found");
        }
        // Incrementamos el contador del ID y lo asignamos al nuevo producto
        this.ultimoId++;
        this.productos.push({ id: this.ultimoId, titulo, descripcion, precio, ruta, code, disponible });//esto lo recibe el array (un objeto "{}" )
        
    }

    // Metodo mostrar productos del array
    getProduct(){
        return this.productos
    }

    //metodo obteer prodcto por id
    getProductId(id){
        //si el producto que buscamos en array productos se encuetra el producto que sea igual al id que pasamos ...
        if(this.productos.find((producto)=>producto.id===id)){
            console.log("si se ecuetrala el producto ");
            
        }else{
            console.log("No existe ese producto o id");
        }
    }
}

//Iniciamos Pruebas

const productos = new ProductManager
//Mostrar producto (no hay nada)
console.log(productos.getProduct());

//agregar producto 
productos.addProduct("producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25)
productos.addProduct("producto prueba2","Este es un producto prueba2",200,"Sin imagen2","abc1234",25) 
productos.addProduct("producto prueba2","Este es un producto prueba2",200,"Sin imagen2","abc1234",25)  //este es el repetido

//Mostrar producto 
console.log(productos.getProduct());

//Buuscar producto por Id
productos.getProductId(2); //si existe id
productos.getProductId(4); //no existe id 