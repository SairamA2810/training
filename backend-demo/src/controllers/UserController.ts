import {userI} from '../types/UserI'
import  { Request, Response } from 'express'

// taking mini part from express
// let users:userI[]=[{id:1,age:21,name:"Krishna"},{id:10,age:201,name:"Krish"}]

// req handlers
// read users 

export const readUsers=async (req:Request,res:Response)=>{
    // res.status(200).json({message:"users Data",payload:users})
    let userCollection=req.app.get("userCollectionObj")
    let users=await userCollection.find().toArray()
    console.log(users)
    if(users!==null){
        res.status(200).send({message:"All users",payload:users})
    }
    else{
        res.status(200).send({message:"users not found",payload:users})
    }

}

// read user by id using url param
export const readUserById=(req:Request,res:Response)=>{
    // {const userId=Number(req.params["id"])
    // const userData=users.find(user=>user.id===userId)
    // if(userData!==undefined){
    //     res.status(200).send({Message:`user by  ${userId}`,payload:userData})
    // }
    // else{
    //     res.status(404).send({Message:`user by ${userId} is not found..`})   
    // }}
}

// create new user 
export const createNewUser=async(req:Request,res:Response)=>{
    // console.log(req.body)
    // let newUser=req.body;
    // users.push(newUser)
    // res.status(201).send({message:"user data updated",payload:users})

    let userCollection=req.app.get("userCollectionObj")
    let newUser:userI=req.body
    // if(newUser)
    console.log(newUser)
    let dbRes=await userCollection.insertOne(newUser)
    if(dbRes.acknowledged){
         res.status(200).send({message:"User created successfully..."})
    }
    else{
         res.status(200).send({message:"user not created..try again.."})
    }

}

// update user by using id url param
export const updateUser=async(req:Request,res:Response)=>{
//    {
//      let userId=req.params["id"]
//     console.log(userId)
//     let status=false;
//     let updateData=req.body
//     console.log(updateData)
//     users=users.map(user=>{
//         if(user.id===Number(userId)){
//             status=true
//             return {...user,...req.body}
//         }
//         return user
//     })
//     if(status){
//         res.status(200).send({message:"user data updated",payload:users})
//     }
//     else{
//         res.status(404).send({message:"user data is not updated.."})
//     }
//    }
    // let userName=req.query["name"]
    let updatedData=req.body
    let userCollection=req.app.get("userCollectionObj")

    let dbRes=await userCollection.updateOne({name:req.body.name},{$set:{...updatedData}})
    console.log(dbRes)
    if(dbRes.modifiedCount!==0){
        res.status(200).send({message:"User data updated successfully..."})
    }
    else{
        res.status(200).send({message:"User data not updated ..."})
    }
}

// delete user by using id url param
export const deleteUser=(req:Request,res:Response)=>{
    // {let userId=req.params["id"]
    // // console.log(userId)
    // let initialLength=users.length
    // users=users.filter(user=>user.id!==Number(userId))
    // if(users.length<initialLength){
    //     res.status(200).send({message:`user with id ${userId} data is deleted... `,payload:users})
    // }
    // else{
    //     res.status(404).send({message:`user not found with id ${userId}`})
    // }}
}

// get user by name
export const userByName=async(req:Request,res:Response)=>{
   let userName=req.query['name']
    // let userData=users.find(userObj=>userObj.name===userName);
    // if(userData===undefined){
    //     res.status(404).send({message:`user not found with name of ${userName}`})
    // }
    // else{
    //     res.status(200).send({message:"user",payload:userData})
    // }
    let userCollection=req.app.get("userCollectionObj")
    let dbRes=await userCollection.find({name:userName}).toArray()
    console.log(dbRes)
    if(dbRes!==null){
        res.status(200).send({message:"User Details",dbRes})
    }
    else{
        res.status(404)
    }
}