// Variables
const symbolElements = document.querySelectorAll('.symbol');
const symbols = ['🍇', '🍌', '🍒', '🍊', '🍎'];
const spinDuration = 2000;
let spinning = false;
const content = document.querySelector('.slots');
var coins = 1000;
var bet = 10;
document.getElementById("coins").innerHTML = 'Coins: ' +   coins;

function checkspin() {
    if (spinning == false) {
    if (coins >= bet) {
        coins -= bet
        document.getElementById("coins").innerHTML = 'Coins: ' +   coins;
        spin()
    }
    }
}

function spin() {
    // Checks if reel is already spinning.
    if (spinning == false) {
        // Set spinning
        spinning = true;

        // Time between symbol changing
        const spinInterval = 100;
        let duration = 0

        // symbol roll array
        winArray = [];

        //blur add
        content.classList.add('blur');

        // interval for symbol changing
        const spinIntervalId = setInterval(function () {

            // interval length check
            duration = duration + spinInterval

            // Once duration reaches spinDuration time
            if (duration >= spinDuration) {
                //stop interval/spin
                clearInterval(spinIntervalId);
                spinning = false;
                stopSpinning();
             
            } else {
               
                // For each symbol location it puts a random symbol in its place.
                symbolElements.forEach((element) => {
                    // random number
                    const randomIndex = Math.floor(Math.random() * symbols.length);
                    // sets each element to to the random index from symbols array
                    element.textContent = symbols[randomIndex];
                });
            }
        }, spinInterval);
    }
}//end spin()

function stopSpinning() {
    //blur function
    content.classList.remove('blur');

    // Final random symbols
    symbolElements.forEach((element) => {
        //random number
        const randomIndex = Math.floor(Math.random() * symbols.length);
        //sets symbol to element
        element.textContent = symbols[randomIndex];

        // Add index to array
        winArray += randomIndex
    });
    // Check for win
    checkWin()
} // end stopSpinning()

function checkWin() {
        // line 1 check 0, 1, 2
        if (winArray[0] === winArray[1] && winArray[1] === winArray[2]) {
            console.log("Line One Win")
            coins += bet * 5
            document.getElementById("coins").innerHTML = 'Coins: ' +   coins;
        } 
        // line 2 check 3, 4, 5
        if (winArray[3] === winArray[4] && winArray[4] === winArray[5]) {
            console.log("Line Two Win")
            coins += bet * 5
            document.getElementById("coins").innerHTML = 'Coins: ' +   coins;
        }
        // line 3 check 6, 7, 8
        if (winArray[6] === winArray[7] && winArray[7] === winArray[8]) {
            console.log("Line Three Win")
            coins += bet * 5
            document.getElementById("coins").innerHTML = 'Coins: ' +   coins;
        }
} // end checkWin()