var soundButtons = document.querySelectorAll('.button')

random = ['applause', 'ba-dum-tsss', 'burp', 'crowd-laughing', 'fart', 'money', 'sad-trombone']
drums = ['bass', 'hi-hat', 'crash', 'snare', 'tom-1', 'tom-2']
keys = ['f', 'g', 'o', 'i', 'u', 'l']

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

      soundName != undefined ? prepareButton(soundButton, soundName, keys[i]) : ''
  }
}


function prepareButton(buttonEl, soundName, key) {
    // buttonEl.querySelector('.').style.backgroundImage = 'url("img/icons/' + soundName + '.png")';

    var audio = new Audio(__dirname + '/wav/drums/' + soundName + '.wav');
    buttonEl.addEventListener('click', function () {
        audio.currentTime = 0;
        audio.play();
    });

    createKeyPressEvent(key, audio)
}

function createKeyPressEvent(setKey, audio){
  window.addEventListener("keydown", function (event) {
    // if (event.defaultPrevented) {
    //   return; // Do nothing if the event was already processed
    // }

    if(event.key == setKey){
      audio.currentTime = 0;
      audio.play();
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);
}