import express from "express"
import ProductManager from "./main.js"

const manager = new ProductManager("./productos.json")

const app = express()
const PORT = 8080

//Mostramos los productos
//  http://localhost:8080/products?limit=3
app.get("/products", async (req, res) => {
    const limit = parseInt(req.query.limit) || undefined;
    const products = await manager.getProduct(limit);
    res.json({ status: "Success", products });
});


//Llamado por id
app.get("/products/:id", async (req, res) => {
    const id = parseInt(req.params.id);         //parsear a int para que no lo tome cono string 
    const product = await manager.getProductId(id);
    
    if (product) {
        res.json({ status: "Existe", product });
    } else {
        res.status(404).json({ status: "Error", message: "Product not found" });
    }
});


app.listen(PORT,()=>{
    console.log("Puerto levantado "+PORT);
    
})