 function welcomeMassage(namepar) {

    var hello = document.getElementById('welcome'); 
    if (namepar != 'Philip Zimbardo'){
    console.log('the if statment'+namepar);
    hello.textContent = 'Welcome ' + namepar + '!';

      }

    else{

    hello.textContent = 'Welcome!'  ;
      }
  
  }

function funcValidateEntrys (){
  while (car !== 'audi' && car !== 'mercedes' ){

    var car = prompt ("Do you want an Audi or a Mercedes?").toLowerCase();
  }
  return car;
}

function checkCarType(cartype){
  var HisCar = '';
    if (cartype == "audi")
  {
    HisCar = '<img src="Audi.jpg" alt="Audi">';

  } else if (cartype == "mercedes" ){

    HisCar = '<img src = "Mercedes.jpg" alt= "Mercedes">';
  
  }
  return HisCar;
}

var result = '';

function addRequstedNumber(carsnumber,HisCar)
{ 
  for (var i = 0 ; i < carsnumber; i++)
  {
    result = result + HisCar+' '+(i+1) ;
    console.log(i+'times is the counter');
  }
}


alert('FAST BOLD CARS ');


var name = prompt("What's your name ? ", "Philip Zimbardo");

welcomeMassage(name);

var userentry = funcValidateEntrys(); 
var cartype = checkCarType(userentry);
var carsnumber = prompt(`how Many cars do you want `) ; 

addRequstedNumber(carsnumber,cartype);



document.getElementById("CARS").innerHTML = result;

console.log('his car is '+ car);
console.log('he wants '+ carsnumber+ ' cars');
