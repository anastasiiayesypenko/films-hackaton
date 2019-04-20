'use strict';
export default class SearchModel {
  constructor() {}
  fetchFilmByTitle(title) {
    return new Promise(resolve => {
      let film = fetch(`http://www.omdbapi.com/?i=${title}&apikey=c6c6013b`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(`Error while fetching: ${response.statusText}`);
        })
        .then(data => {
          console.log(data);
          resolve(data);
        })
        .catch(error => console.log(error));
    });
  }
}