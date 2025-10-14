import { Request, Response } from "express";
import  {UserModel}  from "../models/UserModel";
import {compare, hash} from 'bcryptjs'
import {sign} from 'jsonwebtoken'

// controller to add new user document to database using model
export const addNewUser=async(req:Request,res:Response)=>{
    // create new document
    const newUserData=req.body
    // hash the password
    const hashedPassword=await hash(newUserData.password,10)
    // replace hashed password with actual password in user obj
    newUserData.password=hashedPassword
    const newUser=new UserModel(newUserData)
    // console.log(data)
    // save
    let dbRes=await newUser.save()
    res.status(201).send({message:"User created successfully",payload:dbRes})
}

// controller fucntion to login user
export const loginUser=async(req:Request,res:Response)=>{
    // get user data
    let {name,password}=req.body;

    // get user data from databse
    let userObj=await UserModel.findOne({name:name})

    // verify username
    if(userObj===null){
        res.status(401).send({message:"username is invalid"})
    }
    else{
            // verify password
            // use compare() method in bcrypt module
            let status=await compare(password,userObj.password)
            if(status===false){
                res.status(401).send({Message:"Invalid password.."})
            }
            else{
                // create token using JWT by using sign() method
                let signedToken=sign({name:userObj.name},'secretesociety',{expiresIn:120})
                res.status(200).send({message:"user token generated successfully",token:signedToken,payload:userObj})
            }
        
    }
}




// controller to read all the users from the database using model
export const readAllUsers=async(req:Request,res:Response)=>{
    // read all users from database
    let usersData=await UserModel.find()
    // send response
    res.status(200).send({message:"all users",payload:usersData})
}

// controller fucntion to read user by name using query param
export const readUserByName=async(req:Request,res:Response)=>{
    let userName=req.query["name"];
    //read user obj from the database
    let userObj=await UserModel.findOne({name:userName})
    // send response
    res.status(200).send({Message:"user",payload:userObj}) 
}

// controller fucntion to read user by id using url params
export const readUserById=async(req:Request,res:Response)=>{
    let userId=req.params["id"]
    //read user obj from the database
    let userObj=await UserModel.findById(userId)
    // send response
    res.status(200).send({Message:"user",payload:userObj}) 
}

// controller fucntion to update user by id using url param
export const updateUserById=async(req:Request,res:Response)=>{
    // getting id from url params
    let userId=req.params["id"]
    
    //read user obj from the database
    let userObj=await UserModel.findByIdAndUpdate(userId,{$set:{...req.body}},{upsert:true,new:true})  //upset is used to create if document not exists instead giving error && new is used to return mofified obj otherwise old docu only returned (prv docu)
    // send response
    res.status(200).send({Message:"user",payload:userObj}) 
}

// controller fcuntion to delete user by id using url params
export const deleteUserById=async(req:Request,res:Response)=>{
    // getting id from url params
    let userId=req.params["id"]
    //read user obj from the database
    let userObj=await UserModel.findOneAndDelete({"_id":userId})
    // send response
    res.status(200).send({Message:"user",payload:userObj}) 
}