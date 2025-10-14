//Create http server here
import exp,{Response,Request,NextFunction} from 'express'


const port=3000;  //created custom port number
const app=exp(); 
app.listen(port,()=>console.log(`server on port ${port}...`))

// creating middlewares
const middleware1=(req:Request,res:Response,next:NextFunction)=>{
    console.log("middleware1 is executed..")

    // used to pass to next
    next() 
}

// middleware2
const middleware2=(req:Request,res:Response,next:NextFunction)=>{
    console.log("middleware2 is executed..")

    // used to pass to next
    next() 
}

// applying middleware in application level
// app.use(middleware1)
app.use(middleware2)
app.get('/test',middleware1)
// http://localhost:3000
// create http server
// create get req handler
app.get("/test",(req:Request,res:Response)=>{
    res.status(201).end("hello")
})

// create post req handler
// applying middleware route level
app.post("/test",middleware2,(req,res)=>res.status(201).json({"message":"this res is made by post req"}))

// create put req handler
app.put("/test",(req,res)=>res.status(200).json({"message":"this res is made by put req"}));

// create delete req handler
app.delete("/test",(req,res)=>res.status(200).json({"message":"this res is made by delete req"}))



interface userType{
    id:number,
    name:string
}

let users:userType[]=[
    {id:100,name:"sairam"},
    {id:200,name:"ram"},

]
app.get("/users",(req,res)=>{
    res.status(200).json({"message":"users data","payload":users})
})

// readiing user by id
app.get("/users/:id",(req,res)=>{
    let userId=req.params['id'];
    let userData=users.find(userObj=>userObj.id===Number(userId));
    if(userData===undefined){
        res.status(404).send({message:`user not found with id of ${userId}`})
    }
    else{
        res.status(200).send({message:"user",payload:userData})
    }
})

// user by name using query paramenter
app.get("/users-list",(req,res)=>{
    let userName=req.query['name']
    let userData=users.find(userObj=>userObj.name===userName);
    if(userData===undefined){
        res.status(404).send({message:`user not found with id of ${userName}`})
    }
    else{
        res.status(200).send({message:"user",payload:userData})
    }
})

// to add new user 
app.use(exp.json()) //body parser middleware
app.post("/user",(req:Request,res:Response)=>{
    // console.log(req.body)
    let newUserData=req.body
    // console.log(users)
    users.push(newUserData)
    res.status(200).send({message:`${req.body.name} added successfully `,payload:users})
})

// to update user
app.put("/userUpdate",(req:Request,res:Response)=>{
    console.log(req.body)
    let {id,name}=req.body
    let status=false;
    users=users.map(userObj=>{
        if(userObj.id===id){
            status=true
           return {...userObj,name}
            
        }
        return userObj

    })
    if(status){
        res.status(200).send({"message":"user data updated successfully..",payload:users})
    }
    else{
        res.status(404).send({message:`user not found to update`})
    }


})

// to delete user 
app.delete("/userDelete",(req:Request,res:Response)=>{
    let userId=req.query["id"]
    console.log(userId)
    users=users.filter(userObj=>userObj.id!==Number(userId))
    res.status(200).send({message:`${userId} is deleted successfully`,payload:users})
    
})

// creating route to handle errors paths
app.use((req:Request,res:Response)=>{
    res.status(404).json({"message":"path is invalid"})
})

