const server = require('http');
require('dotenv').config();

async function request(req,res){
   
    res.writeHead(200,{'Content-type': 'text/html'});
    res.write(`servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`)
    res.end()
}

const  servidor = server.createServer(request);
servidor.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`);
});

module.exports.getDatos = function (){
        URL = process.env.categorieItemsURL
    return URL;
}