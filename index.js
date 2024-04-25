import { createServer } from "http";
const port = 3000;

const httpServer = createServer((request, response) =>{
    console.log(`Método de la petición: ${request.method}`);
    console.log(`URL de la petición: ${request.url}`);
    
    var data = '';
    request.on('data', (chunk) =>{
        data += chunk;
    });
    
    request.on('end', () =>{
        console.log('DATA: ');
        console.log(data);
    });
    
    response.end("Petición recibida.")
});

httpServer.listen(port);