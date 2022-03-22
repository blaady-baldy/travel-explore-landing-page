const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
const play_audio = document.querySelector('.audio');
var audio = new Audio("/assets/sounds/rain-01.wav");

play_audio.onclick = function() {
  audio.play();
}


// function onKeyDown(event) {
//   if(keyData[event.key]){
//     keyData[event.key].sound.play();
//   }
//   console.log(event.key);
// }

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})