const video = document.querySelector('.video');
const span = document.querySelectorAll('span');
const transcript = document.querySelector('.transcript');

const videoPlayer = new MediaElementPlayer(video, {
  pluginPath: "https://cdnjs.cloudflare.com/ajax/libs/mediaelement/4.2.7/mediaelement-and-player.min.js",
  shimScriptAccess: 'always',
  videoWidth: '100%',
  videoHeight: '100%',
  features: ['playpause', 'progress', 'tracks', 'volume', 'fullscreen']
});

video.addEventListener('timeupdate', () => {
  for (let i = 0; i < span.length; i++) {
    let currentTime = video.currentTime;
    let dataStart = span[i].getAttribute('data-start');
    let dataEnd = span[i].getAttribute('data-end');
    
    if (dataStart <= currentTime && dataEnd >= currentTime) {
      span[i].classList.add('playing');
    } else if (dataEnd < currentTime) {
      span[i].className = 'played';
    } else {
      span[i].className = '';
    }
  }
});

