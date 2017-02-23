var a=1;
var b=2;

if (a==1) {
  let a=3;
  var b=4;
  console.log(a); //3
  console.log(b); //4
}

console.log(a); //1
console.log(b); //4
