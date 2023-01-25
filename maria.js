let songs = [
		{ url: "Radio MC.mp3"},
			]
			
let audio = new Audio(songs[0].url);
let playButton = document.querySelector('.play')
let pauseButton = document.querySelector('.pause')
let currentSongIndex = 0			
/*_______________*/
/*let curr_track = document.createElement(songs[0].url);*/
let seek_slider = document.querySelector(".seek_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let updateTimer;
let isPlaying = false;
/*------------------*/



playButton.addEventListener('click', function(){
	audio.play()
  audio.loop='true'
})
pauseButton.addEventListener('click', function(){
	audio.pause()
})






/*seek*/
updateTimer = setInterval(seekUpdate, 1000);

function resetValues() {
	curr_time.textContent = "00:00";
	total_duration.textContent = "00:00";
	seek_slider.value = 0;
  }
function seekTo() {
	var	seekto = audio.duration * (seek_slider.value / 100);

		audio.currentTime = seekto;
  }
   

  function seekUpdate() {
	let seekPosition = 0;
   
	// Check if the current track duration is a legible number
	if (!isNaN(audio.duration)) {
	  seekPosition = audio.currentTime * (100 / audio.duration);
	  seek_slider.value = seekPosition;
   
	  // Calculate the time left and the total duration
	  let currentMinutes = Math.floor(audio.currentTime / 60);
	  let currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);
	  let durationMinutes = Math.floor(audio.duration / 60);
	  let durationSeconds = Math.floor(audio.duration - durationMinutes * 60);
   
	  // Add a zero to the single digit time values
	  if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
	  if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
	  if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
	  if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
   
	  // Display the updated duration
	  curr_time.textContent = currentMinutes + ":" + currentSeconds;
	  total_duration.textContent = durationMinutes + ":" + durationSeconds;
	}
  }
/* endof seek*/


