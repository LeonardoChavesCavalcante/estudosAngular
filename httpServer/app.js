const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//bodyParser.json();
app.use(bodyParser.json(),function(req, res, next) {
  
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); // for parsing application/json necessário para entender o json recebido no body

const saudar =(req,res)=>{                  
  res.send('opá estamos ligados!');
  res.end()
};

const buscarDados = (req,res)=>{
  if (req.url.includes(".ico")){
    return res.end();
  }  

  let  dados = require('./'+req.params["resource"]);
  if (req.params["id"]){
    dados = dados.find(p => p.id == req.params["id"] );
  }else{
    dados = dados.sort( (prev,cur) => {
      return Number(prev.id) - Number(cur.id);
    } );
  }  
  res.json(dados);     
};

const inserirDados = (req,res)=>{  
  let  dados = require('./'+req.params["resource"]);
  if (!req.body.id){
    let maxId = dados.reduce((prev,cur)=> prev.id >cur.id?prev.id:cur.id );    
    req.body.id = Number(maxId) +1 ;
  }
  dados.push(req.body);  
  res.json(dados.find(r => r.id == req.body.id) );
};

const alterarDados = (req,res)=>{  
  let dados = require('./'+req.params["resource"]);
  let dado = dados.find(p => p.id == req.body.id );
  dados.splice(dados.indexOf(dado),1,req.body);    
  res.json(req.body);  
};

const removerDados = (req,res)=>{  
  let dados = require('./'+req.params["resource"]);
  let dado = dados.find(p => p.id == req.body.id );
  let index = dados.indexOf(dado);
  if (index >= 0){
    dados.splice(index,1);
  }    
  res.json({});  
};


app.get('/', saudar);
app.get('/:resource',buscarDados);
app.get('/:resource/:id',buscarDados);
app.put('/:resource',alterarDados);
app.put('/:resource/:id',alterarDados);
app.post('/:resource',inserirDados);
app.delete('/:resource',removerDados);


const iniciarLogServidor =()=>{ 
  console.log("Servidor iniciado")
};

app.listen(3000,iniciarLogServidor);
