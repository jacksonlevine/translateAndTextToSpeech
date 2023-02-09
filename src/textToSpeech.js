/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
export default class TextToSpeech {

  static getSpeech(text, lang) {

    let langMap = new Map([
      ["en", "en-us"],
      ["es", "es-es"],
      ["ar", "ar-eg"],
      ["zh-TW", "zh-cn"]
    ]);

    let promise = new Promise(function(resolve, reject) {
      let url = `src=${text}&hl=en-us&b64=true`;

      if(langMap.has(lang)) {
        url = `src=${text}&hl=${langMap.at(lang)}&c=mp3&b64=true`;
      }
      
      const request = new XMLHttpRequest();
      request.withCredentials = false;
  
      request.addEventListener("loadend", function () {
        // debugger;
        const response = this.response;
    
        if (this.status === 200) {
          resolve(response);
        } else {
          reject([this, response, text]);
        }
      });
  
      request.open("POST",`https://voicerss-text-to-speech.p.rapidapi.com/?key=${process.env.API_KEY2}`);
      request.setRequestHeader("content-type", "application/x-www-form-urlencoded");
      request.setRequestHeader("X-RapidAPI-Key", `${process.env.API_KEY}`);
      request.setRequestHeader("X-RapidAPI-Host","voicerss-text-to-speech.p.rapidapi.com");
      request.setRequestHeader("Access-Control-Allow-Origin", 'http://localhost:8080');
  
      request.send(url);
    });
    return promise;
  }
}