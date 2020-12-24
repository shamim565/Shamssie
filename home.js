document.querySelector("#roll").addEventListener("click", startDice);
// document.querySelector("#stop").addEventListener("click", stopDice);
var myVar,ranNum1,ranNum2;
function startDice(){
 myVar=setInterval(rolldice,20);
}

function rolldice()
{
ranNum1 = Math.floor( 1 + Math.random() * 6 );
var diceS = document.querySelector("#d1");
diceS.src="dic"+ranNum1+".png";

ranNum2 = Math.floor( 1 + Math.random() * 6 );
var diceN = document.querySelector("#d2");
diceN.src="dic"+ranNum2+".png";
setTimeout(stopDice,1500);
}
function stopDice()
{clearInterval(myVar);
var p=  document.querySelector("#message");
  if(ranNum1==ranNum2)
  {
    p.innerHTML="<h1>Draw!</h1>";
    p.classList.remove("vis");
  }
  else if(ranNum1>ranNum2)
  {
    p.innerHTML="<h1>Shamim wins!</h1>";
    p.classList.remove("vis");
  }
  else{
    p.innerHTML="<h1>Nessie wins!</h1>";
    p.classList.remove("vis");
  }
}
