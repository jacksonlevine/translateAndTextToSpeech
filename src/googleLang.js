export default class GoogleLang {

  static translateLang(phrase, toLang) {
    let promise = new Promise(function(resolve, reject) {
      const url = `q=${phrase}&format=text&target=${toLang}`;
      // const url = `q=${phrase}&format=text&target=${toLang}&source=${optionalFromLanguageCode}`;

      const request = new XMLHttpRequest();
      request.withCredentials = true;
      
      request.addEventListener("loadend", function () {
        let json = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([json, phrase, toLang]);
        } else {
          reject([this, json, phrase, toLang]);
        }
      });
      
      request.open("POST", "https://google-translate1.p.rapidapi.com/language/translate/v2", true);
      request.setRequestHeader("content-type", "application/x-www-form-urlencoded");
      // request.setRequestHeader("Accept-Encoding", "application/gzip");
      request.setRequestHeader("X-RapidAPI-Key", `${process.env.API_KEY}`);
      request.setRequestHeader("X-RapidAPI-Host", "google-translate1.p.rapidapi.com");
      
      request.send(url);
    });

    return promise;
  }



  static getLangOptions() {
    let promise = new Promise(function(resolve, reject) {
      const request = new XMLHttpRequest();
      request.withCredentials = true;
      request.addEventListener("loadend", function () {
        let json = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve(json);
        } else {
          reject([this, json]);
        }
      });

      request.open("GET", "https://google-translate1.p.rapidapi.com/language/translate/v2/languages?target=en", false);
      // request.setRequestHeader("Accept-Encoding", "application/gzip");
      request.setRequestHeader("X-RapidAPI-Key", `${process.env.API_KEY}`);
      request.setRequestHeader("X-RapidAPI-Host", "google-translate1.p.rapidapi.com");
      
      request.send(null);
    });
    return promise;
  }
}