// controllers fcuntions for productRoute

import { Request, Response } from "express";
import { ProductModal } from "../models/ProductModel";

// controller function to create product
export const addNewProduct=async(req:Request,res:Response)=>{
    // get new product data
    let newProductData=req.body;
    // create new product 
    // let productDoc=new ProductModal(newProductData)
    // // save new product
    // let productObj=await productDoc.save()
    for(let i of newProductData){
        let newUser=new ProductModal(i)
        await newUser.save()
    }
    // let productObj=await ProductModal.insertMany(newProductData)
    // response 
    res.status(201).send({message:"Producted created successfully"})
}

// controller fucntion to read all products
export const readAllProducts=async(req:Request,res:Response)=>{
    // read all prododucts
    let productsObj=await ProductModal.find();
    // response
    res.status(200).send({message:"All products",prdoucts:productsObj})
}

// controller fcuntion to update product data by id using url prams
export const updateProduct=async(req:Request,res:Response)=>{
    // get id from url
    let productId=req.params["id"];
    // get modified data of product
    let modifiedProductData=req.body
    // update data
    // let updatedProduct=await ProductModal.updateOne({"_id":productId},{$set:{...modifiedProductData}}) //it will return acknowledgement and modified count related data...
    let updatedProduct=await ProductModal.findByIdAndUpdate(productId,{$set:{...modifiedProductData}},{new:true})
    // response
    res.status(200).send({message:"product updated",payload:updatedProduct})
} 

// controller fcuntion to delete product data by proId using url params
export const deleteProduct=async(req:Request,res:Response)=>{
    // get id from url
    let productId=req.params["id"]
    // delete in collections(model)
    let deletedDoc=await ProductModal.findOneAndDelete({"_id":productId})
    // response 
    res.status(200).send({message:"Producted removed permanenrly",payload:deletedDoc})
}