async function calculadora(req,res) {
    res.render("calculadora.ejs", {});
}

async function  calcular(req,res){

      var numero1 = req.body.numero1;
      var numero2 = req.body.numero2;
      var operador = req.body.operador;
      var resultado;
     
      if(operador = '+') {
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);
        resultado = numero1+numero2;
      }

      else
      if(operador = '-') {
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);
        resultado = numero1-numero2;
      }
      else 
      if(operador = 'x') {
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);
        resultado = numero1*numero2;
      }
      else 
      if( operador = '÷'){
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);
        resultado = numero1/numero2;
      }
    
      res.render("resul.ejs", {resultado:resultado});
      }

module.exports = {calcular, calculadora}