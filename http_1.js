const http=require('http')

const server =http.createServer((request,respone)=>{
    respone.writeHead(200,{'content-text':'text/html'})
    respone.write("<center>sangetha</center>")

    respone.end()
})

server.listen(9000,()=>{
    console.log("server running on http://localhost:3000")
})