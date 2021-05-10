const rateLimit = require('express-rate-limit');

const corsOptions = {
    origin : function (origin, callback) {
     
        if (process.env.LISTABLANCA.indexOf(origin) !== -1){
            callback (null, true)
        }else {
            callback( new Error('Usted no está autorizado a ingresar a mi API por Cors'))
        }
    }
}

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // limitar el tiempo de acceso a 15 minutos
    max: 10, //Limite desde la IP de la cantidad de veces que quiero que accedea a mi API
    message: 'Usted excedió el limite máximo de ingresos a la API, intente más tarde'
});


const controlApiKey = function (err, req, res, next) {
    if (process.env.apiKey ===  req.body.apikey){
       console.log(process.env.apiKey, req.body.apikey);
        return next()
    }else {
        
        let error = {
            "message": "Ooops! Tu ApiKey no es valida!",
            "error": "No has enviado una ApiKey valida :C"  
        }
        return res.status(400).json(error)
    }
}

module.exports = {corsOptions, limiter, controlApiKey}