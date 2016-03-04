(function(exports) {
  "use strict";

  /********* Medida **************/
  function Medida(valor,tipo)
  {
    this.value = valor;
    this.type = tipo;
    /* tipo es opcional. Debería admitir  new Medida("45.2 Km") */
    /* ademas de new Medida(45.2, "Km") */
  }
  Medida.constructor = Medida;

  /******* Temperatura que hereda de Medida ***************/
  function Temperatura(valor,tipo)
  {
    Medida.call(this, valor, tipo);
    /* tipo es opcional. Debería admitir new Medida("45.2 F") */
  }
  Temperatura.prototype = new Medida();
  Temperatura.prototype.constructor = Temperatura;

  /******** Celsius  que hereda de Temperatura ***********/
  function Celsius(valor)
  {
    Temperatura.call(this,valor);
  }
  Celsius.prototype = new Temperatura();
  Celsius.prototype.constructor = Celsius;
  Celsius.prototype.toFarenheit = function()
  {
    return ((this.value * 9/5) + 32);
  }

  Celsius.prototype.toKelvin = function()
  {
    return (this.value + 273.15);
  }

  /********* Farenheit que hereda de Temperatura *********/
  function Farenheit(valor)
  {
    Temperatura.call(this,valor);

  }
  Farenheit.prototype = new Temperatura();
  Farenheit.prototype.constructor = Farenheit;
  Farenheit.prototype.toCelsius = function()
  {
    return ((this.value - 32)*5/9);
  }
  Farenheit.prototype.toK = function()
  {
    return (this.value * 18000 + 32);
  }

  /******* Kelvin que hereda de Temperatura ********/
  function Kelvin(valor)
  {
    Temperatura.call(this,valor);

  }
  Kelvin.prototype = new Temperatura();
  Kelvin.prototype.constructor = Kelvin;
  Kelvin.prototype.toC = function()
  {
    return (this.value - 273.15);
  }
  Kelvin.prototype.toF = function()
  {
    return ((this.value - 32)/18000);
  }


  exports.Temperatura = Temperatura;
  exports.Celsius = Celsius;
  exports.Farenheit = Farenheit;
  exports.Kelvin = Kelvin;

  exports.convertir = function() {
        //var valor = document.getElementById('convert').value,
        //elemento  = document.getElementById('converted').value;
        /* Extienda la RegeExp a la especificación. use una XRegExp */
    console.log("Valor antes del if: " +valor);

      var  regexp = XRegExp('(?<expresion>  ([-+]?[0-9]+(?:\.[0-9]+)?(?:e[+-]?[0-9]+)?)[ ]*([cCfFkK])((e|el|els|elsi|elsiu|elsius)|(a|ar|are|aren|arenh|arenhe|arenhei|arenheit)|(e|el|elv|elvi|elvin))?) # expresion \n (?<opcional> [ ]*([Tt][oO])?[ ]*)   #opcional  \n (?<medida_destino>   [ ]*[CcKkFf])   #medida_destino ', 'x');



        //regexp    = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([fFkKcC])(e|el|els|elsi|elsiu|elsiu|elsius|a|ar|are|aren|arenh|arenhe|arenhei|arenheit|elv|elvi|elvin)?\s* (to|To|tO|TO)?\s* ([cCfFkK])$/;
        var valor = XRegExp.exec(convert.value, regexp);

        console.log("Valor antes del if: " +valor);

    if (valor) {
      var numero = valor[2],
          tipo   = valor[3];
          var nuevoTipo = valor.medida_destino,
      numero = parseFloat(numero);
      console.log("Valor: " + numero + ", Tipo: " + tipo, "nuevoTipo: " +nuevoTipo);



      switch (tipo) {
        case 'c':
          var celsius = new Celsius(numero);
          elemento.innerHTML = celsius.toFarenheit().toFixed(2) + " Farenheit";
          break;
        case 'c to k':
          var celsius = new celsius(numero);
          elemento.innerHTML = celsius.toK().toFixed(2) + " kelvin";
          break;
        case 'f':
          var farenheit = new Farenheit(numero);
          elemento.innerHTML = farenheit.toCelsius().toFixed(2) + " Celsius";
          break;
        case 'k':
          var kelvin = new Kelvin(numero);
          elemento.innerHTML = kelvin.toC().toFixed(2) + " Celsius";
          break;

        default:
        console.log ('Estamos en la parte default del metodo convertir');

      }
    }
    else
      //elemento.innerHTML = "";
      console.log("Estamos en el else exterior.");
  }

})(this);
