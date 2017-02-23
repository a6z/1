function b1 (){
  //var myVar;
  console.log(myVar);
}
function a1 (){
  var myVar =1;
  b1();
  console.log(myVar);
}
var myVar = 4;
a1();
console.log(myVar);

/* b1 in a1 */
function a1 (){
  var myVar =1;
  function b1 (){
    //var myVar;
    console.log(myVar);
  }
  b1();
  console.log(myVar);
}
var myVar = 4;
a1();
console.log(myVar);

/* name */
var firstname = 'Simon';
var addSurname = () => {
	var surname = 'Holmes';
	var fullname = firstname + ' ' + surname;
	var firstname = 'David';
	console.log(fullname);
}
