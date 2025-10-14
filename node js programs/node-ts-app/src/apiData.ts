import exp from 'express'

const app=exp();
const port=8080;

app.listen(port,()=>{
    console.log("hey from server 8080")
})

interface userType{name:string}

let users:userType[]=[]
app.get("/user",(req,res)=>{
    res.status(200).json({"message":"users data","payload":users})
})
