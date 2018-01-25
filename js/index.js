var soundButtons = document.querySelectorAll('.button')

random = ['applause', 'ba-dum-tsss', 'burp', 'crowd-laughing', 'fart', 'money', 'sad-trombone']
drums = ['bass', 'hi-hat', 'crash', 'snare', 'tom-1', 'tom-2']

setButtons(drums)

function setButtons(type){
  for (var i = 0; i < soundButtons.length; i++) {
      var soundButton = soundButtons[i];

      var header = document.createElement('h1')
      var title = document.createTextNode(type[i])
      var att = document.createAttribute("value")
      att.value = type[i]
      soundButton.setAttributeNode(att)
      var soundName = soundButton.getAttribute("value")

      var appendNew = soundButton.appendChild(header).appendChild(title)
      soundName != undefined ? prepareButton(soundButton, soundName) : ''
  }
}

function prepareButton(buttonEl, soundName) {
    // buttonEl.querySelector('.').style.backgroundImage = 'url("img/icons/' + soundName + '.png")';

    var audio = new Audio(__dirname + '/wav/drums/' + soundName + '.wav');
    buttonEl.addEventListener('click', function () {
        audio.currentTime = 0;
        audio.play();
    });
}

// console.log(soundButtons);