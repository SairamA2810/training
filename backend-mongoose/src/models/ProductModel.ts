import {model, Schema} from 'mongoose'
import { PrdouctI } from '../types/ProductI'

// create product schema
const productSchema=new Schema<PrdouctI>({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    description:{
        type:String,
        
    }
},{
    timestamps:true,
    versionKey:false
})

// create model(collection) for product
// the model takes two aurguments one is name and other one is schema
export const ProductModal=model("product",productSchema);