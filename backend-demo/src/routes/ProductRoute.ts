import exp from 'express'
import { addNewProduct, deleteProduct, readProductByName, readProducts, updateProduct } from '../controllers/ProductController'

// create prduct router
export const productApp=exp.Router()

// read all the prodcuts data
productApp.get("/products",readProducts)

// add new product data
productApp.post("/products",addNewProduct)

// read product byb name using query param
productApp.get("/product",readProductByName)

// update product data
productApp.put("/products/:id",updateProduct)

// delete product data
productApp.delete("/products",deleteProduct)