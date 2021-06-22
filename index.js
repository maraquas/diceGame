function RollTheDice()
{
    var randDice = Math.floor(Math.random() * 6) + 1;
    var randDice2 = Math.floor(Math.random() * 6) + 1;
    console.log("Player 1: " + randDice + ', ' + "Player 2: " + randDice2);
    
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice"+randDice+".png");
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice"+randDice2+".png");

    if(randDice > randDice2){
        document.querySelector("h1").innerHTML = " 😀 Player 1 wins!";
    }
    else if(randDice < randDice2) {
        document.querySelector("h1").innerHTML = " Player 2 wins! 😀 ";
    }
    else{
        document.querySelector("h1").innerHTML = "No body 😅 win... ";
    }


}

// document.querySelector("button").onclick = "RollTheDice();";