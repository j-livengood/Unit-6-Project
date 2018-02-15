// ==============================================================
// JavaScript
// ==============================================================

if (navigator.userAgent.indexOf('Chrome') > -1 || navigator.userAgent.indexOf('Firefox') > -1) {

  // Variables

  const vid = document.querySelector('video');
  const span = document.querySelectorAll('span');
  const script = document.querySelector('.transcript');
  const header = document.querySelector('.header-main');
  const screen = window.innerWidth;

  const vidPlayer = new MediaElementPlayer(vid, {
    pluginPath: "https://cdnjs.cloudflare.com/ajax/libs/mediaelement/4.2.7/mediaelement-and-player.min.js",
    shimScriptAccess: 'always',
    videoWidth: '100%',
    videoHeight: '100%',
    features: [
      'playpause', 
      'progress',
      'tracks', 
      'volume', 
      'fullscreen']
  });



  // Functions

  function scriptUpdate() {
    let currentTime = vid.currentTime;
    return currentTime;
    for (i = 0; i < span.length; i++) {
      let dataStart = span[i].getAttribute('data-start');
      let dataEnd = span[i].getAttribute('data-end');

      if (currentTime >= dataStart && currentTime <= dataEnd) {
        span[i].classList.add('playing');
      } else if (currentTime > dataEnd) {
        span[i].className = 'played';
      } else {
        span[i].className = '';
      }
    }
  }

  function scriptJump(e) {
    if (e.target.tagName === 'SPAN') {
      vid.currentTime = e.target.getAttribute('data-start');
    }
  }



  // Event Listeners

  vid.addEventListener('timeupdate', scriptUpdate);
  script.addEventListener('click', scriptJump);



  // Safari will not hear the timeupdate event
  // on the vid variable, but will hear the
  // timeupdate event on the mediaelementrapper.
  // This code is strictly for Safari.

} else if (navigator.userAgent.indexOf('Safari') > -1) {
  const mew = document.querySelector('mediaelementwrapper');

  mew.addEventListener('timeupdate', function() {
    let currentTime = mew.currentTime;
    for (let i = 0; i < span.length; i++) {
      let dataStart = span[i].getAttribute('data-start');
      let dataEnd = span[i].getAttribute('data-end');

      if (currentTime >= dataStart && currentTime <= dataEnd) {
        span[i].classList.add('playing');
      } else if (currentTime > dataEnd) {
        span[i].className = 'played';
      } else {
        span[i].className = '';
      }
    }
  })

  script.addEventListener('click', function(e) {
    if (e.target.tagName === 'SPAN') {
      mew.currentTime = e.target.getAttribute('data-start');
    }
  });
}