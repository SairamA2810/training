// create schema
import {Schema,model} from 'mongoose'
import { UserI } from '../types/UserI'


const userSchema=new Schema<UserI>({
    name:{
        type:String, //uppercamel case
        required:[true, "Name is required"],
        minLength:[4, "Min length is 4"],
        maxlength:[6, "Max length is 6"],
        unique:[true,"User is already existed.."] //it will prevent from duplication
    },
    age:{
        type:Number,
        required:[true, "Age is required"],
        min:[18, "Minimum Age is 18"],
        max:[29, "Maximum Age is 29"]
    },
    email:{
        type:String,
        required:[true, "Email is required"]
    },
    password:{
        type:String,
        required:[true, "Password is required."]
    }
},{
        strict:"throw",
        versionKey:false, // it will not add version to document
        timestamps:true,

    }
)

// create model for user
// the model takes two aurguments one is name and other one is schema
export const UserModel=model("user",userSchema) //it puralizes the user to users

