import Noise from './noise.js';
import ImagesFromPallete from './imageFromPallete.js';
import './css/styles.css'

export class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}

function convert(integer) {
  var str = Number(integer).toString(16);
  return str.length == 1 ? "0" + str : str;
};

function updateBackgroundColor() {
  let colorInfo = Noise.getRandomNoise();
  document.body.style.backgroundImage = `url(${colorInfo[0]})`
  document.body.style.backgroundRepeat = "repeat";
  document.body.style.backgroundSize = 'fill';
  let rc = colorInfo[1];
  let button = document.querySelector('#btn').checked
    button ? frame.setAttribute("src", `https://www.designspiration.com/palette/${to_rgb(rc.r, rc.g, rc.b)}-000000/`) : frame.setAttribute("src", `https://www.designspiration.com/palette/${to_rgb(rc.r, rc.g, rc.b)}-FFFFFF/`);
  return rc;
}

function to_rgb(r, g, b) {
  return convert(Math.floor(r)) + convert(Math.floor(g)) + convert(Math.floor(b)); 
}

window.onload = () => {
  document.querySelector('#ui #chameleon').style.filter = `hue-rotate(${Math.floor(Math.random()*360)}deg)`;
  let isPaused = false;
  let rc = updateBackgroundColor();
  let otherBtn = document.getElementById("otherBtn");
  let interval = window.setInterval(() => {
    if(!isPaused){
      rc = updateBackgroundColor();
      document.querySelector('#ui #chameleon').style.filter = `hue-rotate(${Math.floor(Math.random()*360)}deg)`;
      
    } 
  }, 10000);
  otherBtn.addEventListener("click", function() {
    isPaused = !isPaused;
    if (!this.checked) {
      interval = window.setInterval(() => {
        if(!isPaused){
          rc = updateBackgroundColor();
          document.getElementById('chameleon').style.filter = `hue-rotate(${Math.floor(Math.random()*360)}deg)`;
        } 
      }, 10000);
      
    } else {
      window.clearInterval(interval);

    }
  })
  
  
  let frame = document.getElementById("frame");

  document.querySelector('#btn').addEventListener('click', function () {
    let button = document.querySelector('#btn').checked;

    button ? frame.setAttribute("src", `https://www.designspiration.com/palette/${to_rgb(rc.r, rc.g, rc.b)}-000000/`) : frame.setAttribute("src", `https://www.designspiration.com/palette/${to_rgb(rc.r, rc.g, rc.b)}-FFFFFF/`);
  });

}



