import express  from "express"; 

import cors     from "cors";   


const app  = express();

const port = 3000;

app.use(cors());         

app.use(express.json()); 

app.get('/', (req, res) => {     
    res.send('Ya estoy respondiendo!');
})

app.get('/saludar/:nombre', (req, res) => {   

    res.send('Hola' + req.params.nombre);
})

app.get('/validarfecha/:ano/:mes/:dia', (req, res) => { 
    let anio = req.params.ano;
    let mes = req.params.mes;
    let dia = req.params.dia;
    let fecha = anio + "-" + mes + "-" + dia;
    let fechaV = Date.parse(fecha)
    isNaN(fecha)
    ? res.status(400).send("fecha correcta")
    : res.status(200).send("fecha erronea");
})

app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)
})

