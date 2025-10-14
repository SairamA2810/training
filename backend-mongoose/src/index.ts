import express, { NextFunction, Request, Response } from 'express';
import { connect } from 'mongoose';
import { userRouter } from './routes/UserRoute';
import { productRouter } from './routes/ProductRoute';

const app=express();
const port=8008;

// Middleware body parser
app.use(express.json());

// MongoDB connection
const dburl="mongodb://localhost:27017/demodb";

connect(dburl)
    .then(() => {
        console.log("Database connected successfully...");
        app.listen(port, () => {
            console.log(`Server listening on port ${port}...`);
        });
    })
    .catch((err) => {
        console.error("Error in DB connection:",err);
        process.exit(1); // abort all or exit on failure
    });


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