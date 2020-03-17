const express = require('express')
const router = express.Router()
const fs = require('fs')

const path = './src/textos.json'

  router.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'LegAutAPI',
        version: '1.0.0'
    });
  });
  
  // exibir os textos marcados 

  router.get("/api", (req, res, next) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        const response = {status: "FALHA", resultado: err};
        res.json(response);
        console.log(err)
      } else {
        const obj = JSON.parse(data);
        const result = obj.textos
        const response = {status: "SUCESSO", resultado: result};
        res.json(response);
      }
    });
   });
   
   // incluir o texto marcado 

   router.post("/api", (req, res, next) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        var response = {status: "FALHA", resultado: err};
        res.json(response);
      } else {
        var obj = JSON.parse(data);
        req.body.texto_id = obj.textos.length + 1;
    
        obj.textos.push(req.body);
    
        fs.writeFile(path, JSON.stringify(obj), err =>  {
          if (err) {
            var response = {status: "FALHA", resultado: err};
            res.json(response);
          } else {
            var response = {status: "SUCESSO", resultado: "Registro incluído com sucesso"};
            res.json(response);
          }
        });
      }
    });
   });

   // atualizar o texto marcado

   router.put("/api", (req, res, next) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        var response = {status: "FALHA", resultado: err};
        res.json(response);
      } else {
        var obj = JSON.parse(data);
    
        obj.textos[(req.body.texto_id - 1)].rotulo = req.body.rotulo;
        obj.textos[(req.body.texto_id - 1)].texto = req.body.texto;
    
        fs.writeFile(path, JSON.stringify(obj), function(err) {
          if (err) {
            var response = {status: "FALHA", resultado: err};
            res.json(response);
          } else {
            var response = {status: "SUCESSO", resultado: "Registro editado com sucesso"};
            res.json(response);
          }
        });
      }
    });
   });

   // deletar um registro

   router.delete("/api", (req, res, next) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        var response = {status: "FALHA", resultado: err};
        res.json(response);
      } else {
        var obj = JSON.parse(data);
        console.log('req.body.texto_id: ', req.body.texto_id)
        delete obj.textos[(req.body.texto_id - 1)];
    
        fs.writeFile(path, JSON.stringify(obj), err =>  {
          if (err) {
            var response = {status: "FALHA", resultado: err};
            res.json(response);
          } else {
            var response = {status: "SUCESSO", resultado: "Registro excluído com sucesso"};
            res.json(response);
          }
        });
      }
    });
   });

   module.exports = router