// Simulates a diceroll from 1 to 6
function diceRoll()
{
    return Math.floor(Math.random()*6)+1
}

// Announce result
function announceResults(player1Roll,player2Roll)
{
    let title = document.querySelector(".title")
    
    if(player1Roll>player2Roll)
    {
        title.textContent = "🎉 Player 1 wins!!"
    } else if(player2Roll>player1Roll)
    {
        title.textContent = "Player 2 wins!! 🎉"
        
    }
    else{
        title.textContent = "🤷‍♂️ Its a draw!! 🤷‍♂️" 
    }
}

// Change dice image
function rollEM()
{
    // Selecting the dice images
    let dice1 = document.querySelector(".player1-dice-img")
    let dice2 = document.querySelector(".player2-dice-img")
    
    // Simulating dice rolls for each player
    let player1Roll = diceRoll()
    let player2Roll = diceRoll()

    // Changing images based on the dice rolls
    dice1.setAttribute("src", "./images/dice"+player1Roll+".png")
    dice2.setAttribute("src", "./images/dice"+player2Roll+".png")

    // Announce the winner
    announceResults(player1Roll,player2Roll)
}

// Play
function play()
{
    rollEM()
}



