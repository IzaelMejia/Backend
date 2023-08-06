//1-Clase ProductManager
class ProductManager{
    constructor(){
        //2-arreglo vacío
        this.productos= []
        this.ultimoId = 0; // Inicializamos el contador del último ID utilizado en 0
    }

    //3
    //4-metodo agregar productos
    addProduct(titulo, descripcion, precio, ruta, code, disponible) {
        // Check if the code is already used for another product
        if (this.productos.some((producto) => producto.code === code)) {
            console.log("Código repetido, no se agregó el producto.");
            return false; // Return false if the code is duplicated to indicate the product was not added
        }
        // Increment the ID counter and assign it to the new product
        this.ultimoId++;
        this.productos.push({ id: this.ultimoId, titulo, descripcion, precio, ruta, code, disponible });
        return true; // Return true to indicate the product was successfully added
    }

    //5-Metodo mostrar productos del array
    getProduct(){
        return this.productos
    }

    //6-metodo obteer prodcto por id
    getProductId(id){
        //si el producto que buscamos en array productos se encuetra el producto que sea igual al id que pasamos ...
        if(this.productos.find((producto)=>producto.id===id)){ //si el producto que buscamos en el array es el producto con id igual al id que pide el usuario
            console.log("si se ecuetrala el producto ");
            
        }else{
            console.log("No existe ese producto o id");
        }
    }
}

//Iniciamos Pruebas

const productos = new ProductManager
//Mostrar producto (no hay nada)
console.log("Llamada getProducts sin datos:");
console.log(productos.getProduct());

console.log("--------------------");

//agregar producto 
productos.addProduct("producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25)
productos.addProduct("producto prueba2","Este es un producto prueba2",200,"Sin imagen2","abc1234",25) 
productos.addProduct("producto prueba3","Este es un producto prueba3",200,"Sin imagen3","abc1234",25)  //este es el code repetido

//Mostrar producto 
console.log("--------------------");
console.log(productos.getProduct());

console.log("--------------------");
//Buuscar producto por Id
productos.getProductId(2); //si existe id
productos.getProductId(4); //no existe id 