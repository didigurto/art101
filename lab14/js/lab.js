/**
 * Author:    Diego Agurto
 * Created:   05.18.2022
 *
 **/

function fizzBuzz() {
  for(var i=1; i<=200; i++){
    var str = '';
    if(i % 3 ==0){
      str +=  i + " - Fizz";
    }
    if (i % 5 ==0){
      str += i + " - Buzz";
    }
debugger;

    if (i % 7 ==0){
      str += i + " - Boom";
    }

    if (str == ''){
      str += i;
    }
      $("#output").append("<p>"+ str + "</p>")
  }
}

fizzBuzz();
