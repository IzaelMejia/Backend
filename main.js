import {promises as fs } from "fs"

//1-Clase ProductManager
class ProductManager{
    constructor(path){
        //2-arreglo vacío
        this.productos= []
        this.ultimoId = 10; // Inicializamos el contador del último ID utilizado en 0
        this.path = "./productos.json"
    }

    //3-Parametros a pedir
    //4-metodo agregar productos
    addProduct= async(producto)=>{
        const productList = JSON.parse(await fs.readFile(this.path, "utf-8"))
        const product = productList.find((prod) => prod.id === producto.id);

        if (product) {
            console.log("Código repetido, no se agregó el producto.");
            return false; //  Devuelve falso si el código está duplicado para indicar que el producto no se agregó
        }
        // Incrementar el contador de ID y asignarlo al nuevo producto
        this.ultimoId++;
        productList.push({ id: this.ultimoId, producto });
        await fs.writeFile(this.path, JSON.stringify(productList))
        return true; // Devuelve verdadero para indicar que el producto se agregó con éxito
    }

    //5-Metodo mostrar productos del array
    

    getProduct= async()=>{
        const productList = JSON.parse(await fs.readFile(this.path, "utf-8"))
        return productList;
    }

    //6-metodo obteer prodcto por id
    getProductId= async(id)=>{
        //si el producto que buscamos en array productos se encuetra el producto que sea igual al id que pasamos ...
        const productList = JSON.parse(await fs.readFile(this.path, "utf-8"))
        const product = productList.find((producto) => producto.id === id);
        
        if (product) { //si el producto que buscamos en el array es el producto con id igual al id que pide el usuario
            console.log("Si existe el producto:", product);  
            return product; // retornar el objeto del producto

        }else{      
            console.log("No existe ese producto o id");
        }
    }


    getUpdateProduct= async(id, updatedProduct)=> {
        const productList = JSON.parse(await fs.readFile(this.path, "utf-8"))
        const productIndex = productList.findIndex((producto) => producto.id === id);

        if (productIndex !== -1) {
            // Actualizar las propiedades del producto
            productList[productIndex].titulo = updatedProduct.titulo
            await fs.writeFile(this.path, JSON.stringify(productList))
            
        } else {
            console.log("No existe el producto con ese ID:", id);
        }
    }


    deleteProduct=async(id)=> {
        const productList = JSON.parse(await fs.readFile(this.path, "utf-8"))
        const productIndex = productList.find(prod => prod.id === id);

        if (productIndex ) {
            await fs.writeFile(this.path, JSON.stringify(productList.filter(prod => prod.id != id)))
        } else {
            console.log("No existe el producto con ese ID:", id);
        }
    }
    
}

//Iniciamos Pruebas

const productos = new ProductManager

//Forma 1 de ver productos
console.log(await productos.getProduct());

//Forma 2
// async function verProductos() {
//     const productList = await productos.getProduct();
//     console.log(productList);
// }
// verProductos();



 //agregar producto 
//  const producto1={titulo:"Shampu Gatito", descripcion: "Shampu 200ml", precio:200, ruta:"Sin imagen", code:"sadsd", stock:20}
//  productos.addProduct(producto1)


 // Pruebas para actualizar un producto
// productos.getUpdateProduct(2, {
//     titulo: "Producto actualizado",
// });

// productos.deleteProduct(11)

