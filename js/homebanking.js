//Declaración de variables
var nombreUsuario = "Marina Meazzi";
var saldoCuenta = 10000;
var limiteExtraccion = 1000;
var saldoAnterior;
var codigoSeguridad = 1979;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML
iniciarSesion();
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

//Funciones que tenes que completar

function cambiarLimiteDeExtraccion() {
  var monto = parseInt (prompt ("Ingrese nuevo limite de extraccion"));
  limiteExtraccion = monto;
  actualizarLimiteEnPantalla();
  alert ("Nuevo limite de extraccion es " + limiteExtraccion);
}

function extraerDinero () {
  var monto = parseInt (prompt("Ingrese monto a extraer"));
  if (validarMontoIngresado(monto) && extraccionDe100(monto)){
    if (haySaldoDisponible (monto) && superaLimite (monto)) {
      restarDinero (monto);
      alert ("Has extraido: $" + monto + "\nSaldo anterior: $" + saldoAnterior + "\nSaldo actual: $" +saldoCuenta);
    }
  }
}

function depositarDinero() {
  var monto = parseInt (prompt("Ingrese monto a depositar"));
  if (validarMontoIngresado(monto)){
    sumarDinero (monto);
    alert("Has depositado " + monto + "\n Saldo anterior " + saldoAnterior + "\n  Saldo actual " +saldoCuenta);
  }
}

function haySaldoDisponible (monto) {
  if (monto > saldoCuenta) {
   alert("Saldo insuficiente, el saldo de la cuenta es de $" + saldoCuenta);
   return false;
  }
  return true;
}

function superaLimite (monto) {
  if (monto > limiteExtraccion) {
    alert("La cantidad supera limite exraccion " + limiteExtraccion);
    return false;
  }
  return true;
}

function pagarServicio() {
  var agua = 350;
  var telefono = 425;
  var luz = 210;
  var internet = 510;
  var numeroServicio = parseInt (prompt("Ingrese el número que corresponda con el servicio que querés pagar " + "\n 1 - Agua " + "\n 2 - Luz" + "\n 3 - Internet" + "\n 4 - Teléfono"));

  switch (numeroServicio){
    case 1:
         pagoServicios (agua,"agua");
    break;
    case 2:
           pagoServicios (telefono,"telefono");
    break;
    case 3:
          pagoServicios (luz,"luz");
    break;
    case 4:
          pagoServicios (internet,"internet");
    break;
    default: alert ("No existe el servicio seleccionado");
  }
}

function transferirDinero() {
  var cuentaAmiga1 = 1234567;
  var cuentaAmiga2 = 7654321;
  var monto = parseInt(prompt("Ingrese monto a transferir"));

  if (haySaldoDisponible(monto)){
    var cuenta = parseInt(prompt("Ingrese cuenta amiga"));
    if (cuenta === cuentaAmiga1 || cuenta === cuentaAmiga2) {
      restarDinero(monto);
      alert("Se han transferido $ " + monto + "\nCuenta destino: " + cuenta + "\nSaldo cuenta $ " + saldoCuenta);
      actualizarLimiteEnPantalla();
    }else {
      alert("Solo se puede transferir a cuenta amiga");
    }
  }
}

function iniciarSesion() {
  var codigoIngresado = parseInt(prompt("Ingrese su codigo de seguridad"));
  if (codigoIngresado === codigoSeguridad) {
     alert("Bienvenida/o " + nombreUsuario + " ,ya puedes comenzar a realizar operaciones");
  }else {
     alert("El código ingresado es incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.");
     saldoCuenta = 0;
     actualizarSaldoEnPantalla ();
  }
}

// Funciones Adicionales

function sumarDinero(monto) {
  saldoAnterior = saldoCuenta;
  saldoCuenta += monto;
  actualizarSaldoEnPantalla();
}

function restarDinero(monto){
  saldoAnterior = saldoCuenta;
  saldoCuenta -= monto;
  actualizarSaldoEnPantalla();
}

function extraccionDe100 (monto) {
  if (monto %100 !== 0) {
    alert("Solo pueden extraerse multiplos de 100")
    return false;
  }
  return true;
}

function pagoServicios (monto, numeroServicio){
  if (haySaldoDisponible(monto)){
    restarDinero (monto)
    alert("Has pagado el servicio " + numeroServicio + "\n Saldo anterior $ " + saldoAnterior + "\n Dinero descontado $" + monto + "\n  Saldo actual $ " + saldoCuenta);
  }
}

function validarMontoIngresado(monto){
  if(isNaN(monto)){
    alert("Solo se pueden ingresar valores numericos");
    return false;
  }else if (monto =="" || monto ==null){
    return false;
  }
  return true;
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}
function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
