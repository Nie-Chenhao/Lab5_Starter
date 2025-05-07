// expose.js
'use strict';
window.addEventListener('DOMContentLoaded', init);
let hornSelect;
let hornImg;
let hornAudio;

let volumeSlider;
let volumeIcon;

let playBtn;
let confetti;

function init() {
  hornSelect = document.querySelector('#horn-select');
  hornImg = document.querySelector('#expose img');
  hornAudio = document.querySelector('#expose audio');
  volumeSlider = document.querySelector('#volume');
  volumeIcon = document.querySelector('#volume-controls img');
  playBtn = document.querySelector('#expose button');
  hornSelect.addEventListener('change', onHornChange);
  volumeSlider.addEventListener('input', onVolumeInput);
  playBtn.addEventListener('click', onPlay);
  confetti = new JSConfetti();
}

function onVolumeInput() {
  const volume = Number(volumeSlider.value);
  hornAudio.volume = volume/100;
  if(volume === 0){
    volumeIcon.src = "assets/icons/volume-level-0.svg";
  }
  else if(volume >0 && volume < 33){
    volumeIcon.src = "assets/icons/volume-level-1.svg";
  }
  else if(volume >= 33 && volume < 67){
    volumeIcon.src = "assets/icons/volume-level-2.svg";
  }
  else{
    volumeIcon.src = "assets/icons/volume-level-3.svg";
  }
}

function onHornChange() {
  let horn = hornSelect.value;
  hornImg.src = `assets/images/${horn}.svg`;
  hornAudio.src = `assets/audio/${horn}.mp3`;
}

function onPlay(event) {
  event.preventDefault();
  hornAudio.play();
  if(hornSelect.value === 'party-horn'){
    confetti.addConfetti();
  }
}