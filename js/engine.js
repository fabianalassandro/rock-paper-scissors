// Variables we need for the game
var choices = ["rock", "paper", "scissors"];

var played = 0;
var won = 0;
var lost = 0;
var draw = 0;

// Listen for the button clicks

/*$("#rock").click(function(event) {
  var play_you = 'rock';
  $("#play_you").text(play_you);
  var play_machine = computer_move();
  compare(play_you, play_machine);
});*/
/*console.log('you: ' + play_you);*/
/*We use this function to check on the inspect element > Console what is doing the funtion on the browser*/

/*$("#paper").click(function(event) {
  var play_you = 'paper';
  $("#play_you").text(play_you);
  var play_machine = computer_move();
  compare(play_you, play_machine);
});

  $("#scissors").click(function(event) {
  var play_you = 'scissors';
  $("#play_you").text(play_you);
  var play_machine = computer_move();
  compare(play_you, play_machine);
});*/


/*
The function below is the "dry version" of the 3 above [rock, paper, scissors].
Below we're saying:
First 3 lines: when you click any of the 3 buttons go to pick the corresponding id value and print it in the span id "play_you".
Fourth line - var play_machine = computer_move(); - inside the span id "play_machine" print the "computer_move" function that is explained below.
Fifth line - compare(play_you, play_machine); - is saying now go and insert the comparation result explained in the "compare" function explained below,
*/
$('input').click(function(event) {
  var play_you = this.getAttribute('value');
  $("#play_you").text(play_you);
  var play_machine = computer_move();
  compare(play_you, play_machine);
  console.log(play_you);
});


// How the computer reacts to our play
function computer_move() {
  var play_machine = Math.floor(Math.random() * (3 - 0)) + 0;
  /*Random function - we start from 0 so that onw is the minimum and then the maximum value - that is the maximum value not included (so maximum number is 2 + 1, so this is why the result is 3) */

  play_machine = choices[play_machine];
  $("#play_machine").text(play_machine);
  /*console.log('move: ' + play_machine);*/
  return play_machine;
}
/* Anche se definiamo la funzione in function computer_move() dobbiamo dichiarare la variabile anche nei tre bottoni perche sono due funzioni diverse */

function compare(you, machine) {
  var verdict = 'lose';

  if (you == machine) {
    verdict = 'draw';
  } /* == is used to compare two variable - we use = to say that something is equal to something */
  else if ((you == "rock") && (machine == "scissors")) {
    verdict = 'win';
  } else if ((you == "paper") && (machine == "rock")) {
    verdict = 'win';
  } else if ((you == "scissors") && (machine == "paper")) {
    verdict = 'win';
  }

  /*
    if (verdict == 'win') {
      won++;
      $("#game_won").text(won);
    } else if (verdict == 'lose') {
      lose++;
      $("#game_lost").text(lost);
    } else if (verdict == 'draw') {
      draw++;
      $("#game_draw").text(draw);
    }
  */
console.log('verdict ' + verdict);
/* The function below is another way to do what is commented above */
  switch (verdict) {
    case 'win':
      won++;
      $("#game_won").text(won);
      break;
    case 'lose':
      lost++;
      $("#game_lost").text(lost);
      break;
    case 'draw':
      draw++;
      $("#game_draw").text(draw);
      break;
  }


  $("#verdict").text(verdict);

  played++;
  $("#game_played").text(played);
  /* ++ after won is saying: add 1 to "won" value
    -- after a value is saying: remove 1 to a value
   */
}
