function nie() {
    var div = document.getElementById("tekst");
    if (div) {
        div.innerHTML = '<h1>😡😡😡</h1><img id="zdjecie" src="2.png"><div id="pytanie">aha? nie ma takiej opcji jak "nie"</div><div id="przyciski"><button id="tak" onClick="tak()">no dobra, zostanę</button></div>';
    } else {
        console.log('Nie znaleziono elementu o id "tekst".');
    }
	//vineboom
	var audio1 = new Audio('vineboom.mp3');
    audio1.play();
}

function tak() {
    var div = document.getElementById("tekst");
    if (div) {
        div.innerHTML = '<h1>💖💖💖</h1><img id="zdjecie" src="3.gif"><div id="pytanie">super!! widzimy się 14 lutego</div>(o ile wymyśle co będziemy robić)<br><i>buziaki ~iwan</i>';
    } else {
        console.log('Nie znaleziono elementu o id "tekst".');
    }
    //confetti
    var confettiElement = document.getElementById('blokconfetti');
    var emojis = ["💋", "😎", "💖", "💕", "🌹"];
    for (let i = 0; i < 170; i++) {
        let confetti = document.createElement('div');
        confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        confetti.style.fontSize = Math.floor(Math.random() * 36) + 'px';
        confetti.style.position = 'absolute';
        confetti.style.zIndex = '9999';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = Math.random() * window.innerHeight + 'px';
        confetti.className = 'confetti';
        confetti.className = 'confetti bounceIn';
        confettiElement.appendChild(confetti);

        var start = Date.now();
        var interval = setInterval(function() {
            var elapsed = Date.now() - start;
            confetti.style.top = Math.min(window.innerHeight, parseInt(confetti.style.top) + elapsed / 100) + 'px';
            if (elapsed > 2000) {
                confetti.remove();
                clearInterval(interval);
            }
        }, 20);
    }
	//yippee
	var audio2 = new Audio('yippee.mp3');
    audio2.play();
    //confetti
	var audio3 = new Audio('confetti.mp3');
    audio3.play();
}


