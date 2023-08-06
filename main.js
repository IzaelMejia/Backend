//1-Clase ProductManager
class ProductManager{
    constructor(){
        //2-arreglo vacío
        this.productos= []
        this.ultimoId = 0; // Inicializamos el contador del último ID utilizado en 0
    }

    //3-Parametros a pedir
    //4-metodo agregar productos
    addProduct(titulo, descripcion, precio, ruta, code, stock) {
        //  Comprobar si el código ya se utiliza para otro producto
        if (this.productos.some((producto) => producto.code === code)) {
            console.log("Código repetido, no se agregó el producto.");
            return false; //  Devuelve falso si el código está duplicado para indicar que el producto no se agregó
        }
        // Incrementar el contador de ID y asignarlo al nuevo producto
        this.ultimoId++;
        this.productos.push({ id: this.ultimoId, titulo, descripcion, precio, ruta, code, stock });
        return true; // Devuelve verdadero para indicar que el producto se agregó con éxito
    }

    //5-Metodo mostrar productos del array
    getProduct(){
        return this.productos
    }

    //6-metodo obteer prodcto por id
    getProductId(id){
        //si el producto que buscamos en array productos se encuetra el producto que sea igual al id que pasamos ...
        const product = this.productos.find((producto) => producto.id === id);
        if (product) { //si el producto que buscamos en el array es el producto con id igual al id que pide el usuario
            console.log("Si existe el producto:", product.titulo);  
            return product; // retornar el objeto del producto

        }else{      
            console.log("No existe ese producto o id");
        }
    }Z


    getUpdateProduct(id, updatedProduct) {
        // Buscar el producto en el array por su ID
        const productIndex = this.productos.findIndex((producto) => producto.id === id);

        if (productIndex !== -1) {
            // Actualizar las propiedades del producto
            this.productos[productIndex] = { ...this.productos[productIndex], ...updatedProduct };
            console.log("Producto actualizado:", this.productos[productIndex].titulo);
            return true;
        } else {
            console.log("No existe el producto con ese ID:", id);
            return false;
        }
    }


    deleteProduct(id) {
        // Buscar el índice del producto en el array por su ID
        const productIndex = this.productos.findIndex((producto) => producto.id === id);

        if (productIndex !== -1) {
            // Eliminar el producto del array usando splice
            const deletedProduct = this.productos.splice(productIndex, 1);
            console.log("Producto eliminado:", deletedProduct[0].titulo);
            return true;
        } else {
            console.log("No existe el producto con ese ID:", id);
            return false;
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


console.log("--------------------");

// Pruebas para actualizar un producto
productos.getUpdateProduct(2, {
    titulo: "Producto actualizado",
    descripcion: "Esta es la nueva descripción",
    precio: 250,
    ruta: "Nueva imagen",
    code: "xyz789",
    stock: 30,
});

console.log("--------------------");
console.log(productos.getProduct());


productos.deleteProduct(2); // Elimina el producto con ID 2
console.log(productos.getProduct()); // Muestra los productos restantes en el array