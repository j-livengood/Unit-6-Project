const $video = $('.video');
const $span = $('span');
let $currentTime;

$video.mediaelementplayer( {
  videoWidth: '100%',
  videoHeight: '100%',
  features: ['playpause', 'progress', 'tracks', 'volume', 'fullscreen'],
})

for (let i = 0; i < $span.length; i++) {
  let dataStart = $span.attr('data-start');
  console.log(dataStart);
}

$video.on('timeupdate', () => {
  $currentTime = $video.prop('currentTime');
  console.log($currentTime);
})

console.log($span.attr('data-start'));