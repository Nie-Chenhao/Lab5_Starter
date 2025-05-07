// explore.js

window.addEventListener('DOMContentLoaded', init);
let face, textBox, voiceSelect, talkBtn;
function init() {
  face   = document.querySelector('#explore img');
  textBox   = document.querySelector('#text-to-speak');
  voiceSelect = document.querySelector('#voice-select');
  talkBtn    = document.querySelector('#explore button');
  pvoices();
  window.speechSynthesis.addEventListener('voiceschanged', pvoices);

  talkBtn.addEventListener('click', onTalk);
}

function pvoices(){
  voiceSelect.innerHTML = '';
  window.speechSynthesis.getVoices().forEach(v => {
    const opt = document.createElement('option');
    opt.value = v.name;
    opt.textContent = `${v.name} (${v.lang})`;
    voiceSelect.appendChild(opt);
  });
}

function onTalk() {
  const msg = textBox.value.trim();
  if (!msg) return;
  const utter = new SpeechSynthesisUtterance(msg);
  const chosen = window.speechSynthesis
                  .getVoices()
                  .find(v => v.name === voiceSelect.value);
  if (chosen) utter.voice = chosen;
  utter.addEventListener('start', () => {
    face.src = 'assets/images/smiling-open.png';
  });
  utter.addEventListener('end', () => {
    face.src = 'assets/images/smiling.png';
  });
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}