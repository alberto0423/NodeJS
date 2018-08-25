/**
function factorial(n){
  if (n % 1 ==0) {
    if (n>0) {
      return n*factorial(n-1);
    }else {
      return 1;
    }
  }else {
    return -1;
  }
}



QUnit.test( "Prueba funcion factorial", function( assert ) {
  assert.equal( factorial(6),720, "Correcto!" );
  assert.equal(factorial(5),120,"Correcto el factorial de 5");
  assert.equal(factorial(7),5040,"Correcto el factorial de 7");
  assert.equal(factorial(8),40321,"Correcto el factorial de 8");
  assert.equal(factorial(4),23,"Correcto el factorial de 4");
})
**/
/**
var miarray=["hola", "estamos","haciendo", "una", "prueba"];
QUnit.test("Prueba array", function(assert){
assert.equal(miarray[0],"hola","Correcto");
assert.equal(miarray[1],"estamos","Correcto");
assert.equal(miarray[2],"haciendo","Correcto");
assert.equal(miarray[3],"una","Correcto");
assert.equal(miarray[4],"prueba","Correcto");
})
**/
/**
var miarray=["Hola","estamos","haciendo","una","prueba"];
miarray["indice"]="cadena de texto";
QUnit.test("Prueba array", function(assert){
assert.equal(miarray[0],"Hola","Correcto!!");
assert.equal(miarray[1],"estamos","Correcto!!");
assert.equal(miarray[2],"haciendo","Correcto!!");
assert.equal(miarray[3],"una","Correcto!!");
assert.equal(miarray[4],"prueba","Correcto!!");
assert.equal(miarray["indice"],"cadena de texto","Correcto!!");
});
**/
/**
var usuario = new Array();
usuario["nick"] = "jvix";
usuario["nombreCompleto"]="Jorge Alberto Lucio Santes";
usuario["email"]="alberotsantes21@hotmail.com";
usuario["password"]="alberto.23";
QUnit.test("Prueba array", function(assert){
assert.equal(usuario["nick"],"jvix","Correcto!!");
assert.equal(usuario["nombreCompleto"],"Jorge Alberto Lucio Santes","Correcto!!");
assert.equal(usuario["email"],"alberotsantes21@hotmail.com","Correcto!");
assert.equal(usuario["password"],"alberto.23","Correcto!!");
assert.equal(usuario.nick,"jvix","Correcto!!");
assert.equal(usuario.nombreCompleto,"Jorge","Correcto!!");
assert.equal(usuario.email,"alberotsantes21@hotmail.com","Correcto!!");
assert.equal(usuario.password,"alberto.23","Correcto!!");
});
**/
var usuario = {
  nick: "jorgecrack",
  nombreCompleto  : "Jorge Alberto Lucio Santes",
  email           : "alberotsantes21@hotmail.com",
  password        : "alberto.23"
};
QUnit.test("Prueba array", function(assert){
assert.equal(usuario["nick"],"jorgecrack","Correcto");
assert.equal(usuario["nombreCompleto"],"Jorge Alberto Lucio Santes","Correcto!");
assert.equal(usuario["email"],"alberotsantes21@hotmail.com","Correcto!!");
assert.equal(usuario["password"],"alberto.23","Correcto!!");
assert.equal(usuario.nick,"jorgecrack","Correcto!!");
assert.equal(usuario.nombreCompleto,"Jorge Alberto Lucio Santes","Correcto!!");
assert.equal(usuario.email,"alberotsantes21@hotmail.com","Correcto!!");
assert.equal(usuario.password,"alberto.23","Correcto!!");
});
