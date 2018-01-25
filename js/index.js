var soundButtons = document.querySelectorAll('.button')

soundType = ['applause', 'ba-dum-tsss', 'burp', 'crowd-laughing', 'fart', 'money', 'sad-trombone']

for (var i = 0; i < soundButtons.length; i++) {
  // console.log(soundType[i]);
    var soundButton = soundButtons[i];

    var header = document.createElement('h1')
    var title = document.createTextNode(soundType[i])
    var att = document.createAttribute("value")
    att.value = soundType[i]
    soundButton.setAttributeNode(att)
    var soundName = soundButton.getAttribute("value")

    var appendNew = soundButton.appendChild(header).appendChild(title)
    soundName != 'undefined' ? prepareButton(soundButton, soundName) : ''
}

function prepareButton(buttonEl, soundName) {
    // buttonEl.querySelector('.').style.backgroundImage = 'url("img/icons/' + soundName + '.png")';

    var audio = new Audio(__dirname + '/wav/' + soundName + '.wav');
    buttonEl.addEventListener('click', function () {
        audio.currentTime = 0;
        audio.play();
    });
}

// console.log(soundButtons);