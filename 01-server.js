const http = require('http')
const port = 3000;


http.createServer((req, res)=>{
   res.writeHead(200, {
       "Content-Type": 'text/html'
   })
   res.write("<h1>Hola Mundo</h1>")
   res.end()
}).listen(port)

console.log(`Servidor levantado en el puerto ${port}`)