const video = document.getElementById('video');
const play = document.getElementById('play');
const stops = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & Pause Video
function toggleVideoStatus() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Update Play & Pause Icon
function updatePlayIcon() {
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}

// Update Progress & Timestamp
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10){
        mins = '0' + String(mins);
    }
    let secs = Math.floor(video.currentTime % 60);
    if(secs < 10){
        secs = '0' + String(secs);
    }

    timestamp.innerText = `${mins}:${secs}`
}

// Set Video Progress
function setVideoProgress() {
    video.currentTime = (+progress.value*video.duration) / 100;
}

// Stops Video
function stopsVideo() {
    video.currentTime = 0;
    video.pause();
}



// Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stops.addEventListener('click', stopsVideo);

progress.addEventListener('change', setVideoProgress);