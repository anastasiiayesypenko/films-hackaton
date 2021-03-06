'use strict';
export default class SearchModel {
  constructor() {}
  fetchFilmByTitle(title, page) {
    return new Promise(resolve => {
      let film = fetch(
        `https://www.omdbapi.com/?s=${title}&page=${page}&apikey=c6c6013b`,
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(`Error while fetching: ${response.statusText}`);
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => console.log(error));
    });
  }

  fetchFilmById(imdbId) {
    const url = `https://www.omdbapi.com/?i=${imdbId}&apikey=c6c6013b`;
    return new Promise(resolve => {
      fetch(url)
        .then(response => {
          if (response.ok) return response.json();
          throw new Error(`Error while fetching: ${response.statusText}`);
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => console.log(error));
    });
  }
}
