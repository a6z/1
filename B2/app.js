//first-function
function greet(){
  console.log('hi');
}
greet();

function ff(fn){
  fn();
}
ff(greet);

//function-expresion
var greetme = function() {
  console.log('你好');
}
greetme();

ff(greetme);
