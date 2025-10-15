import { NextFunction, Request, Response } from "express";
import {verify} from 'jsonwebtoken'

// create a middle ware fucntion to verfiy and validate the token and give access to protected routes.
export const verifyToken=(req:Request,res:Response,next:NextFunction)=>{
    // get the bearer token from headers of req
    let bearerToken=req.headers["authorization"]  
    // check exists of bearer token
    if(!bearerToken){
        res.status(401).send({message:"Unauthorozed access.."})
    }
    else{
        // extract token from bearer token
        let token=bearerToken.split(" ")[1]
        // validate the token
        try{
            if(token && typeof token==="string" ){
                const secret = process.env['SECRET']
                if(secret){
                    let decodedToken = verify(token,secret);
                    console.log(decodedToken)
                    next()
                }
            }
            else{
                res.status(403).send({message:"token expired"})
            }
        }catch(err){
            res.status(403).send({message:"token expired.."})
        }

    }
}