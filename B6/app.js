var addcounter = (() => {
  var counter = 0;
  return () => {
    counter += 1;
    console.log(counter);
  };
})();

addcounter();
addcounter();
addcounter();


//add

var add = (x) =>{
  var counter=0;
  return (y) =>{
    counter = x+y;
    console.log(counter);
  }
};

var add6 = add(6);
add6(4); //10
