import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player('vimeo-player');
const STORE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(function() {
    player.getCurrentTime().then(function(seconds) {
    localStorage.setItem(STORE_KEY, seconds);
});
}, 1000));

const savedTime = localStorage.getItem(STORE_KEY);
if (savedTime) {
  player.setCurrentTime(savedTime);
}
