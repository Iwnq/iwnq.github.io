function nie() {
    var div = document.getElementById("tekst");
    if (div) {
        div.innerHTML = '<h1>😡😡😡</h1><img id="zdjecie" src="2.png"><div id="pytanie">aha? nie ma takiej opcji jak "nie"</div><div id="przyciski"><button id="tak" onClick="tak()">no dobra, zostanę</button></div>';
    } else {
        console.log('Nie znaleziono elementu o id "tekst".');
    }
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
    var emojis = ["💋", "😎", "💖", "💕"];
    for (let i = 0; i < 150; i++) {
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

        // Dodajemy animację opadania za pomocą JavaScript
        var start = Date.now();
        var interval = setInterval(function() {
            var elapsed = Date.now() - start;
            confetti.style.top = Math.min(window.innerHeight, parseInt(confetti.style.top) + elapsed / 100) + 'px';
            if (elapsed > 2000) { // Po 2 sekundach usuwamy confetti
                confetti.remove();
                clearInterval(interval);
            }
        }, 20);
    }
}


