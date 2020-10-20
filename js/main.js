/*
* FizzBuzz
*
*/

// Scrivi un programma che stampi i numeri da 1 a 100

var number = 0;
var list = ''

// CICLO FOR
//per i multipli di 3 stampi "Fizz" al posto del numero
//per i multipli di 5 stampi "Buzz"
//per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
for (var i = 0; i < 100; i++) {
  number++
      if ( ( number % 3 == 0 ) && ( number % 5 !== 0 ) ) {
        text.innerHTML = list += '<li>' + 'Fizz' + '</li>'
      }
      else if ( ( number % 5 == 0 ) && ( number % 3 !== 0 ) )  {
        text.innerHTML = list += '<li>' + 'Buzz' + '</li>';
      }
      else if ( ( number % 3 == 0 ) && ( number % 5 == 0 ) )  {
        text.innerHTML = list += '<li>' + 'FizzBuzz' + '</li>';
      }
      else {
        text.innerHTML = list += '<li>' + number + '</li>';
      }
}

// Risultato
var result = document.getElementById('text')
