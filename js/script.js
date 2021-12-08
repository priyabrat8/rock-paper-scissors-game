function rpsGame(yourChoice){
    var humanChoice,botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    var results = decideWinner(humanChoice,botChoice);
    var message = finalMessage(results);
    rpsFrontEnd(yourChoice.id,botChoice,message);
}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}

function decideWinner(yourChoice,computerChoice){
   var rspDatabase={ 
       'rock': {'scissors':1,'rock':0.5,'paper':0},
       'paper': {'rock':1,'paper':0.5,'scissors':0},
       'scissors': {'paper':1,'scissors':0.5,'rock':0}
   };

   var yourScore = rspDatabase[yourChoice][computerChoice];
   var computerScore = rspDatabase[computerChoice][yourChoice];

   return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
    if (yourScore === 0){
        return {'message':'You lost!', 'color':'red'};
    }
    else if(yourScore === 0.5){
        return {'message':'You tied!', 'color':'yellow'};
    }
    else {
        return {'message':'You won!', 'color':'green'};
    }
    
}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    var imagesDatabase = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    } ;

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = `<img src='${imagesDatabase[humanImageChoice]}' id='${humanImageChoice}' class='player_shadow' />`;

    messageDiv.innerHTML = `<h1 style='color: ${finalMessage['color']};' class='message' > ${finalMessage['message']} </h1>` 
    botDiv.innerHTML = `<img src='${imagesDatabase[botImageChoice]}' id='${botImageChoice}'  class='bot_shadow' />`;

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}
