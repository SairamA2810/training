import { Request, Response } from "express"
import { ProductsI } from "../types/ProductsI"


// create sample products data
let products:ProductsI[]=[{
    id:1,
    name:"laptop",
    price:45000
}]

// READ ALL THE PRODUCTS
export const readProducts=(req:Request,res:Response)=>{
    res.status(200).send({message:"Products",payload:products})
}


// ADD NEW PRODUCT TO PRODUCTS
export const addNewProduct=async(req:Request,res:Response)=>{
    let newProductData=req.body
    // console.log(newProductData)
//    { let productCheck=products.find(product=>product.name===newProductData.name || product.id===newProductData.id)
//     if(productCheck!==undefined){
//        res.status(200).send({message:"Products alreay existed.."})
//     }
//     else{
//         // console.log("product not in products")
//         products.push(newProductData)
//         res.status(200).send({messsage:"producte added successfully in list",payload:products})
//     }}
    let productCollection=req.app.get("productsCollections")
    let dbRes=await productCollection.insertOne(newProductData)
    if(dbRes.acknowledged){
        res.status(201).send({message:"product created successfully..."})
    }
    else{
         res.status(200).send({message:"product not created..."})
    }
}

// GET PRODUCT BY NAMe USING QUERY PARAM
export const readProductByName=(req:Request,res:Response)=>{
    let productName=req.query["name"]
    // console.log(productName)
    let productData=products.find(product=>product.name===productName)
    // console.log(productData)
    if(productData!==undefined){
        res.status(200).send({messsage:`${productName} data`,payload:productData})
    }
    else{
        res.status(200).send({messsage:`${productName} product is not found in list`})
    }
}

// UPDATE PRODUCT DATA
export const updateProduct=(req:Request,res:Response)=>{    
    let productId=Number(req.params["id"])
    let updatePRoductData=req.body
    // console.log(productId)
    let status=false
    products=products.map(product=>{
        if(product.id===productId){
            status=true;
            return {...product,...updatePRoductData}
        }
        else{
            return product
        }
    })
    if(status){
        res.status(200).send({message:`product with id ${productId} data is updated...`,payload:products})
    }
    else{
        res.status(404).send({message:`product with id ${productId} is not found...`})
    }
}

//DELETE PRODUCT DATA
export const deleteProduct=(req:Request,res:Response)=>{
    let productId=Number(req.query["id"])
    // console.log(productId)
    let initialProductsLength=products.length
    products=products.filter(product=>product.id!==productId)
    if(products.length<initialProductsLength){
         res.status(200).send({message:`product with id ${productId} is deleted successfully...`,payload:products})
    }
    else{
         res.status(404).send({message:`product with id ${productId} is not found...`})
    }

}
