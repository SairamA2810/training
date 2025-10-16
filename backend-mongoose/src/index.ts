import express, { NextFunction, Request, Response } from 'express';
import { connect } from 'mongoose';
import { userRouter } from './routes/UserRoute';
import { productRouter } from './routes/ProductRoute';
import {config} from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { verifyToken } from './middlewares/verify';

// call config
config()

const app=express();
const port=process.env["PORT"];

// accept frontetnd sever
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true // we need to tell cors to accept crendentials..
}))

app.use(cookieParser())

// Middleware body parser
app.use(express.json());

// MongoDB connection
const dburl=process.env["DBURL"]!

connect(dburl)
    .then(()=>{
        console.log("Database connected successfully...");
        app.listen(port,()=>{
            console.log(`Server listening on port ${port}...`);
        });
    })
    .catch((err) => {
        console.error("Error in DB connection:",err);
        process.exit(1); // abort all or exit on failure
    });


    // refresh
    app.get('/refresh',verifyToken,async(req:Request,res:Response)=>{
        let userObj=(req as any).user
        res.send({user:userObj})
    })
// redirect userApp when path starts with /user-api
app.use("/user-api",userRouter)

// redirects userApp when path starts with /product-api
app.use('/product-api',productRouter)

// handles invalid path
app.use((req:Request,res:Response,next:NextFunction)=>{
    res.status(404).send({message:"Invalid path",description:"Path is invalid try with correct one."})
})

// error handling
app.use((err:ErrorEvent,req:Request,res:Response,next:NextFunction)=>{
    res.status(500).json({message:"error occured",description:err.message})
})