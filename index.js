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

  hello.textContent = 'Welcome!'  
}

// }
// welcomemassage();
