export default class ImagesFromPallete {
  static async getPalleteSite() {
    return fetch(`https://www.designspiration.com/palette/F2E59A-79AAAC-CC5A36-E4903C-402E2F/`)
          .then(function(response){return response.text;}, function(response){return response;});

  }
}