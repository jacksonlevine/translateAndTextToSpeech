import { Color } from './../src/index.js';

export default class Noise {
  static getRandomNoise() {

    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return [`https://php-noise.com/noise.php?r=${r}&g=${g}&b=${b}&tiles=50&tileSize=20&borderWidth=$100&steps=50`, new Color(r, g, b)];
  }
}