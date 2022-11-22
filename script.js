function roll() {
    let number1 = Math.round(Math.random()*6);
    let number2 = Math.round(Math.random()*6);
    let winner = document.querySelector(".winner")
    winner.innerHTML = "Winner"
    randomNumber1()
    randomNumber2()
    result()
    crown()

    function randomNumber1(){
        const dadu = document.querySelector('.dadu1')
        
        if (number1 <= 1) {
            dadu.src = "images/dice1.png"
        }
        else if (number1 == 2) {
            dadu.src = "images/dice2.png"
        }
        else if (number1 == 3) {
            dadu.src = "images/dice3.png"
        }
        else if (number1 == 4) {
            dadu.src = "images/dice4.png"
        }
        else if (number1 == 5) {
        dadu.src = "images/dice5.png"
    }
    else if (number1 == 6) {
        dadu.src = "images/dice6.png"
    }
    return;
}
    function randomNumber2(){
        const dadu = document.querySelector('.dadu2')
        
        if (number2 <= 1) {
            dadu.src = "images/dice1.png"
        }
        else if (number2 == 2) {
            dadu.src = "images/dice2.png"
        }
        else if (number2 == 3) {
            dadu.src = "images/dice3.png"
        }
        else if (number2 == 4) {
            dadu.src = "images/dice4.png"
        }
        else if (number2 == 5) {
        dadu.src = "images/dice5.png"
    }
    else if (number2 == 6) {
        dadu.src = "images/dice6.png"
    }
    return;
}

function result() {
    const result = document.querySelector('.result')
    if (number1 > number2) {
        result.innerHTML = "Player 1"
    }
    else if (number1 < number2) {
        result.innerHTML = "Player 2"
    }
    else if(number1 == number2){
        result.innerHTML = "Draw"
    }
    return;
}
function crown() {
    const crownsatu = document.querySelector('.crownsatu')
    const crowndua = document.querySelector('.crowndua')
    if (number1 > number2) {
        crownsatu.innerHTML = "👑"
        crowndua.innerHTML = ""
    }
    else if (number1 < number2) {
        crownsatu.innerHTML = ""
        crowndua.innerHTML = "👑"
    }
    else if(number1 == number2){
        crownsatu.innerHTML = ""
        crowndua.innerHTML = ""
    }

    return;
}
}