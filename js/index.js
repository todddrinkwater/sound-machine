var soundButtons = document.querySelectorAll('.button')

random = ['applause', 'ba-dum-tsss', 'burp', 'crowd-laughing', 'fart', 'money', 'sad-trombone']
drums = ['bass', 'hi-hat', 'snare', 'crash', 'tom-1', 'tom-2', 'floor-tom', 'elec-bass', 'hop-snare']
keys = ['f', 'j', 'h', 'g', 'u', 'i', 'o', 'c', 'v'  ]

setButtons(drums)

function setButtons(type){
  for (var i = 0; i < soundButtons.length; i++) {
      j = 9 - i
      var color = `#e${i}${j}a27`

      var soundButton = soundButtons[i];

      var header = document.createElement('h1')
      var keyHelper = document.createElement('p')
      var title = document.createTextNode(type[i])
      var keyHelperText = document.createTextNode(keys[i])
      var att = document.createAttribute("value")
      var id = document.createAttribute("id")

      att.value = type[i]
      id.value = type[i]

      soundButton.setAttributeNode(att)
      soundButton.setAttributeNode(id)
      
      document.getElementById(id.value).style.backgroundColor = color

      var soundName = soundButton.getAttribute("value")
      var appendNew = soundButton.appendChild(header).appendChild(title)

      soundName != undefined ? prepareButton(soundButton, soundName, keys[i], color, "drums") : ''
  }
}


function prepareButton(buttonEl, soundName, key, color, type){
    var audio = new Audio(__dirname + `/wav/${type}/` + soundName + '.wav');

    buttonEl.addEventListener('click', function () {
        buttonEl.style.backgroundColor = "#e0dede";
        audio.currentTime = 0;
        audio.play();
        setTimeout(() => { buttonEl.style.backgroundColor = color }, 100)
    });

    createKeyPressEvent(key, audio, color, buttonEl)
}

function createKeyPressEvent(setKey, audio, color, buttonEl){
  window.addEventListener("keydown", function (event) {
    if(event.key == setKey){
      buttonEl.style.backgroundColor = "#e0dede";
      audio.currentTime = 0;
      audio.play();
      setTimeout(() => { buttonEl.style.backgroundColor = color }, 100)
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);
}