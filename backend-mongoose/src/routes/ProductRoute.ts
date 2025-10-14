import {Router} from 'express' 
import { addNewProduct, deleteProduct, readAllProducts, updateProduct } from '../controllers/ProductController'
import expressAsyncHandler from 'express-async-handler'

// create Router for product
export const productRouter=Router()

// router to create new product
productRouter.post('/product',expressAsyncHandler(addNewProduct))

// router to read all products
productRouter.get('/products',expressAsyncHandler(readAllProducts))

// router to update product data
productRouter.put('/product/:id',expressAsyncHandler(updateProduct))

// router to delete product
productRouter.delete('/product/:id',expressAsyncHandler(deleteProduct))

