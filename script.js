function guessingGame(){
  
  const guessingDom = document.getElementById("guessing");
  const playingDom  = document.getElementById("playing");
  const finalDom    = document.getElementById("final");
  const guessDom    = document.getElementById("guess");
  const triesDom    = document.getElementById("tries");
  const hintDom     = document.getElementById("hint");
  const score       = document.getElementById("score");
  const ansDom      = document.getElementById("answer");
  const yesDom      = document.getElementById("yes");
  const guessesDom  = document.getElementById("guesses");
  const bestDom     = document.getElementById("best");
  const gamesDom    = document.getElementById("games");
  const averageDom  = document.getElementById("avg");

  let answer = -1; 
  let tries  = 0;
  play();

  guessDom.addEventListener("change",makeGuess);
  yesDom.addEventListener("click",play);


  
  function play(){
    guessDom.setAttribute("placeholder", "1-100");
    hintDom.innerHTML = "Give it a guess!";
    guessDom.value = "";
    guessingDom.style.display = "unset";
    playingDom.style.display = "none";
    finalDom.style.display = "display";

    answer = Math.floor(Math.random() * 100) +1;
    ansDom.value = answer;
    tries = 1;
  }


  
  function setTries(soFar){
    return soFar;
  }


  
  function makeGuess(e){
    
    this.setAttribute("placeholder",this.value);
    
    if      (this.value < ansDom.value) hintDom.innerHTML = "HIGHER! The answer is higher!";
    else if (this.value > ansDom.value) hintDom.innerHTML = "LOWER! The answer is lower!";
    else if (this.value == ansDom.value) showGameResults(tries);
  
    triesDom.value = tries++;
    this.value = "";

    setTimeout(function(){
      guessDom.focus();
    },10);
  }
  
  function showGameResults(tries){
    
    
    //shows up in first box
    score.value = tries;
    
    guessesDom.value = tries + parseInt(guessesDom.value);
    bestDom.value = getBest(tries);
    gamesDom.value = parseInt(gamesDom.value) + 1;
    averageDom.value = (parseInt(guessesDom.value))/(parseInt(gamesDom.value));
    playingDom.style.display  = "unset";
    guessingDom.style.display = "none";
    finalDom.style.display = "display";
    
    
    yesDom.focus();
  }

    


  
  function getBest(count){
    const check = parseInt(bestDom.value);
    if(check === 0 || count < check) return count;
    else return check;
  }
}



guessingGame();