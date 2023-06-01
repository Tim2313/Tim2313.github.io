function getElement(id) {
    return document.getElementById(id);
}

function getRandomNumber() {
    return Math.floor(Math.random() * 4) + 1;
}

function spin() {
    const item1 = getElement('item1');
    const item2 = getElement('item2');
    const item3 = getElement('item3');

    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const num3 = getRandomNumber();

    item1.innerHTML = `${num1}`;
    item2.innerHTML = `${num2}`;
    item3.innerHTML = `${num3}`;

    if (num1 == num2 && num1 == num3) {
        playWinSound();
        showWinMassage();
    } else {
        hideMessage();
    }
}

function playWinSound() {
    const winSound = document.getElementById("winSound");
    winSound.play();
}

function showWinMassage() {
    const message = document.getElementById("winMessage");
    message.style.display = "block";
}

function hideMessage() {
    const message = document.getElementById("winMessage");
    message.style.display = "none";
}


