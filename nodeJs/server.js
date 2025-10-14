import http from 'http'
import fs from 'fs/promises'
import url from 'url'
import path from 'path'

const PORT=8000

// To GET PATHS
const __filePath=url.fileURLToPath(import.meta.url)
const __dirPath=path.dirname(__filePath)

console.log(__filePath,__dirPath)
const req="http://localhost:3000/users"
const response=http.createServer(async (req, res)=>{
    // res.write("Hello world!");
    // res.setHeader("Content-Type","application/json")

  try{
      if(req.method==="GET"){
        let filepath;
                if(req.url==="/"){
                // res.writeHead(200,{"Content-Type":"application/json"})
                // res.end(JSON.stringify({message:"node"}))
                // res.writeHead(200,{"Content-Type":"text/html"})
                // res.end("<h1>land</h1>")
                
                filepath=path.join(__dirPath,'public','index.html')
            }
            else if(req.url==="/about"){
                //  res.writeHead(200,{"Content-Type":"application/json"})
                    // res.writeHead(200,{"Content-Type":"text/html"})
                    // res.end("<h1>About</h1>")
                    // console.log("about")
                    filepath=path.join(__dirPath,'public','about.html')
            }
            else if(req.url==='/users'){
              res.end(JSON.stringify(res))
              return;
            }
            else{
                //  res.writeHead(404,{"Content-Type":"application/json"})
                res.writeHead(404,{"Content-Type":"text/html"})
                res.end("<h1>Error page</h1>");
                return;
            }
       
             const data=await fs.readFile(filepath)
             res.setHeader("Content-Type","text/html");
             res.write(data)
             res.end()
    }
    else{
        res.writeHead(404,{'Content-Type':"text/plain"})
        res.end("MEthod is not allowed")
        // throw new Error("MEthod is not allowed")
        
    }
  }catch(err){
    console.log(err)
    res.end("Server error")
  }
})

response.listen(PORT,()=>{
    console.log(`hello from port ${PORT} listeing...`)

})
