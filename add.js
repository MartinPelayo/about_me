'use strict';
// var yesQuestion1 = prompt ('Would you like a burrito?').toUpperCase();
// if (yesQuestion1 === 'yes'){
//   alert ('Splendid, would you like cheese on your burrito?');
// }else{
//   alert('Thank you come agian.');
// }
// var yesQuestion2 = prompt ('Would you like hot sauce?').toUpperCase();
// if (yesQuestion2 === 'yes'){
//   alert ('All right my friend.');
// }else{
//   alert ('Sorry, no hot suace no service.');
// }
// var yesQuestion3 = prompt ('Can I get you a cup of tea with that?').toUpperCase();
// if (yesQuestion3 === 'yes'){
//   alert ('Tea it is.');
// }else{
//   alert ('Ok, no tea then.');
// }
// var yesQuestion4 = prompt ('How about desert?').toUpperCase();
// if (yesQuestion4 === 'yes'){
//   alert ('Alright desert, great.');
// }else{
//   alert ('Ok, thats fine.');
// }
// var yesQuestion5 = prompt ('Would you like cheese cake then?').toUpperCase();
// if (yesQuestion5 === 'yes'){
//   alert ('You got it boss.');
// }else{
//   alert ('Alright, how about the carrot cake then.');
// }
// var keepLooping = true;
// while(keepLooping !== false){
//
// }
//
// for (var i = 0; i < 4; i++) {
//
//   var answer = prompt ('Guess what number out of ten?');
//
//   if (answer === '5'){
//     alert ('Correct.');
//     keepLooping = false;
//
//   }else if (answer > '5'){
//     alert ('To low, guess again.');
//   }else if (answer < '5'){
//     alert ('To high, keep geussing.');
//   }
// }

var myArray = ['California, Oregon, Arizona, Texas']; // decare a global array with possible correct answeres

function guessState () {
  for ( var i = 0 ; i < 6; i++ ){
    answer = prompt ('Can you guess a states I lived in besides Washington?');
    for (var j = 0; j < myArray.legnth; j++){
      if (answer === myArray[j]){
        alert ('Correct');

      }
      else {
        alert( 'Geuss agian');
      }
    }
  }
}
//call guessState
guessState();
