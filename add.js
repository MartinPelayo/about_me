'use strict';
prompt ('Hello there, to make it more fun getting to know me I have made a guessing game aobut myslef. But before we start, what is your name?');
alert ('Well nice to meet you. Lets get started.');

var yesQuestion1 = prompt ('Where am I from?');
if (yesQuestion1 === 'California'){
  alert ('You are correct!');
}else{
  alert('I am from California.');
}

var yesQuestion2 = prompt ('Where have I lived the past few year?');
if (yesQuestion2 === 'Medford'){
  alert ('Thats correct!.');
}else{
  alert ('The answer is Medford.');
}

var yesQuestion3 = prompt ('Where do I plan on graduating from in the near future?');
if (yesQuestion3 === 'CodeFellows'){
  alert ('Correct!');
}else{
  alert ('The answer is CodeFellows.');
}

var yesQuestion4 = prompt ('What is my name?');
if (yesQuestion4 === 'Martin Pelayo'){
  alert ('That is corrct!');
}else{
  alert ('Your geuss was close, the answer is Martin Pelyo');
}

var yesQuestion5 = prompt ('Guess what town is depicted in the photo?');
if (yesQuestion5 === 'Placerville'){
  alert ('You are good at this and thanks for playing my guessing game!');
}else{
  alert ('The answer is Placerville., thanks for playing my guessing game!');
}
//I could remember if I was supposed to space my code like this.
//Also, the email I got in regards to the lab submission mentioned my statements only registed as false.
//However, when I ran the code in the browser it worked normally. I couldnt replicate the error.
