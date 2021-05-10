const express=require('express');
const app=express();
require('dotenv').config();

const cors = require('cors');
const midd = require('./BACK/midd/midd');

app.use(express.json());
app.use(cors());

app.use(midd.limiter);

app.listen(process.env.PORT,()=>{
    console.log(`servidor inicializado en http://${process.env.HOST}:${process.env.PORT}`);
});

app.use((err, req, res, next)=> {
    console.log(err);
    if (!err){
        return next();
    }

    return res.status(500).json('Se produjo un error inesperado, intente nuevamente')
});

app.get('/miAPI', cors(midd.corsOptions), midd.controlApiKey, (req,res) => {
  
        try {
            let miApi={
                "url": process.env.categorieItemsURL
                
            }
        
            res.send(miApi.url)
        }catch (error) {
            console.log('Error desde el get del app')
            console.log(error);
            res.status(400).json(error.message)
        }
});




