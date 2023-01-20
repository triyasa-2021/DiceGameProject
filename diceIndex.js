

function play() {
    //Player 1
    let randomNumber1 = Math.floor((Math.random() * 6)) + 1;
    let randomDiceImage1 = 'Dice-' + randomNumber1 + '.png';
    let randomImageSource1 = 'images/' + randomDiceImage1;
    let image1 = document.querySelectorAll('img')[0];
    image1.setAttribute('src', randomImageSource1);
    //Player 2
    let randomNumber2 = Math.floor((Math.random() * 6)) + 1;
    let randomDiceImage2 = 'Dice-' + randomNumber2 + '.png';
    let randomImageSource2 = 'images/' + randomDiceImage2;
    let image2 = document.querySelectorAll('img')[1];
    image2.setAttribute('src', randomImageSource2);
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = 'Player 1 Wins !!!';
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1.play").innerHTML = 'Player 2 Wins !!!';      //if the code contains more than one h1 tag
    }
    else {
        document.querySelector("h1").innerHTML = 'Match Draw...';
    }
}
