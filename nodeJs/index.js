
import http from 'http'
const PORT=7000
const response=http.createServer((req,res)=>{
    res.write("Hello world!");
    res.end()
})

response.listen(PORT,()=>{
    console.log(`hello from port ${PORT} listeing...`)

})
