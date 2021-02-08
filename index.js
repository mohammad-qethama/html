alert('FAST BOLD CARS ');


var name = prompt("What's your name ? ", "Philip Zimbardo");


console.log('his name is '+ name );



// function welcomemassage(){

var hello = document.getElementById('welcome'); 
if (name != 'Philip Zimbardo'){
console.log('the if statment'+name);
hello.textContent = 'Welcome ' + name + '!';

}

else{

  hello.textContent = 'Welcome!'  ;
}
var car = '';



while (car !== 'Audi' && car !== 'Mercedes' ){

  var car = prompt ("Do you want an Audi or a Mercedes?");

}

var carsnumber = prompt(`how Many cars do you want `) ;

console.log('his car is '+ car);
console.log('he wants '+ carsnumber+ ' cars');


var HisCar = '';

if (car == "Audi")
{
HisCar = '<img src="Audi.jpg" alt="Audi">';

} else if (car == "Mercedes" ){

HisCar = '<img src = "Mercedes.jpg" alt= "Mercedes">';
  
}
var result = '';
for (var i = 0 ; i < carsnumber; i++)
{
  result = result + HisCar+' '+(i+1) ;
console.log(i+'times is the counter');
}
document.getElementById("CARS").innerHTML = result;

// }
// welcomemassage();
