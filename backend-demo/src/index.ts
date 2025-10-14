import exp, { Response,Request, Errback } from 'express'
import { productApp } from './routes/ProductRoute';
import { userApp } from './routes/UserRoute';
import { MongoClient } from 'mongodb';

// create server
const app=exp();

// body parser middleware
app.use(exp.json())

// assign port number
const port=8008;
// app.listen(port,()=>console.log(`server listening on port ${port}..`))


// DB connection
const dburl="mongodb://localhost:27017"
const dbClient=new MongoClient(dburl)

// fucntion to connect to db
async function connectDB(){
    try{
        // to connect db
        await dbClient.connect()
        console.log("successfully connected to database...")
        // after successful connection to db only server need to run other wise should not run...
        app.listen(port,()=>console.log(`server listening on port ${port}..`))
        let database=dbClient.db("demodb")
        let usersCollection=database.collection("users");
        app.set("userCollectionObj",usersCollection);
        let productsCollections=database.collection("products")
        app.set("productsCollections",productsCollections)

    }catch(err){
        console.log(err.message)
    }
}
connectDB()

// redirect userApp when path starts with /user-api
app.use('/user-api',userApp)
app.use('/product-api',productApp)

// handling invalid paths
app.use((req:Request,res:Response)=>{
    res.send({message:"Invalid path"})
})
// error handling using error aysnch handling 
app.use((error:Errback,req:Request,res:Response)=>{
    res.send(error)
})