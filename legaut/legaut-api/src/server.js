const express = require('express')
const router = express.Router()
const fs = require('fs')

  router.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'LegAutAPI',
        version: '1.0.0'
    });
  });
  

  router.get('/api', (req, res) => {
    fs.readFile('./textos.json', 'utf8', (err, data) => {
      if (err) {
        const response = {status: 'FALHA', resultado: err};
        res.json(response);
        console.log(err)
      } else {
        const obj = JSON.parse(data);
        const result = "Nenhum texto foi encontrado";
    
        obj.textos.forEach((txt) => {
          if (txt != null) {
            if (txt.texto_id == req.query.texto_id) {
              result = txt;
            }
          }
        });
    
        const response = {status: "SUCESSO", resultado: result};
        res.json(response);
        console.log('response: ' + response)
      }
    });
   });
   
   module.exports = router