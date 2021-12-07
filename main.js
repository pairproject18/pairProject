

$("#leftrock").hide()
$("#leftpaper").hide()
$("#leftscissors").hide()
$("#rightrock").hide()
$("#rightpaper").hide()
$("#rightscissors").hide()

var compare = function(player, computer) {
    if(player === "rock") {
      
        if(computer === "rock") {
            return "Draw";
        } else if (computer === "paper") {
          return "My rock lost to paper";
        } else if (computer === "scissors") {
          return "My rock crushed scissors!";
        }
      
    } else if (player === "paper") {
      
        if(computer=== "paper") {
          return "Draw";
        } else if (computer === "rock") {
          return "My paper beat rock";
        } else if (computer === "scissors") {
          return "My paper got cut by scissors!";
      }
    } else if (player=== "scissors") {
      
        if(computer === "scissors") {
          return "Draw";
        } else if (computer=== "paper") {
          return "My scissor beat paper";
        } else if (computer=== "rock") {
          return "My scissor got crushed!";
      }
    } else {
      return "That doesn't make any sense!"
    }
  };

var computerChoice = function() {
  var random = Math.random();
        if (random < 0.333) {
          return  "rock";
        } else if(random < 0.67777) {
          return "paper";
        } else {
          return "scissors";
        } 
  };

$("#rock").click(function(){

$("#leftrock").hide()
$("#leftpaper").hide()
$("#leftscissors").hide()
$("#rightrock").hide()
$("#rightpaper").hide()
$("#rightscissors").hide()
var computeresult=computerChoice()
var result = compare("rock",computeresult);
$("#leftrock").show()
if(computeresult=="paper"){
  $("#computercounter").text(computer()) 
}
if(computeresult=="scissors"){
  $("#playercounter").text(player())
}
if ($("#playercounter").text()==3){
  $("#res").text("winner") 
}
if ($("#computercounter").text()==3){
  $("#res").text("loser") 
}



computeresult="#right"+computeresult
$(computeresult).show()
$("#decision").html(result);
$("#playercounter").text()
});
$("#paper").click(function(){
$("#leftrock").hide()
$("#leftpaper").hide()
$("#leftscissors").hide()
$("#rightrock").hide()
$("#rightpaper").hide()
$("#rightscissors").hide()
var computeresult=computerChoice()
var result = compare("paper",computeresult);
$("#leftpaper").show()
if(computeresult=="rock"){
  $("#playercounter").text(player())
  }
  if(computeresult=="scissors"){
    $("#computercounter").text(computer()) 
  }
if ($("#playercounter").text()==3){
  $("#res").text("winner") 
}
if ($("#computercounter").text()==3){
  $("#res").text("loser") 
}
computeresult="#right"+computeresult
$(computeresult).show()

$("#decision").html(result);
// $("#playercounter").text()="player"+playercounter.toString()
});
$("#scissors").click(function(){
  $("#leftrock").hide()
$("#leftpaper").hide()
$("#leftscissors").hide()
$("#rightrock").hide()
$("#rightpaper").hide()
$("#rightscissors").hide()
var computeresult=computerChoice()
var result = compare("scissors",computeresult);
$("#leftscissors").show()
if(computeresult=="paper"){
  $("#playercounter").text(player())
  }
  if(computeresult=="rock"){
   $("#computercounter").text(computer()) 
  }
computeresult="#right"+computeresult
$(computeresult).show()
$("#decision").html(result);
// $("#playercounter").text()="player"+playercounter.toString()
});
function makeCounter(){
  var counter=0
  return function(){
    counter++
    return counter
  }
  
}
var player=makeCounter()
var computer=makeCounter()
