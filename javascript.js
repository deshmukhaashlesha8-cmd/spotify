const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const progress = document.getElementById('myprogressbar');

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.classList.remove('fa-play-circle');
    playBtn.classList.add('fa-pause-circle');
  } else {
    audio.pause();
    playBtn.classList.remove('fa-pause-circle');
    playBtn.classList.add('fa-play-circle');
  }
});

// update progress bar as audio plays
audio.addEventListener('timeupdate', () => {
  if (!isNaN(audio.duration)) {
    progress.value = (audio.currentTime / audio.duration) * 100;
  }
});