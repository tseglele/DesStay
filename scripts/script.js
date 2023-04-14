 document.querySelector("#container");
const promise = fetch(
  "https://api.themoviedb.org/3/movie/popular?api_key=f95390f2280b158ce1f7618a1fea93bf&language=en-US&page=1"
);
promise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    if (data.success === false) {
      console.error("Il y a une erreur");
    } else {
      console.log(data.results);
      container.innerHTML = data.results.map((movie) => {
        return `
            <div class="movie">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="poster">
                <h3>${movie.title}</h3>
                <p>${movie.overview}</p>
            </div>
            
            `;
      });
    }
  });


promise
  .then((res) => {
    return res.json();
  })
  .then((film) => {
    console.log(film);
  })
  
  
  getMovies("https://api.themoviedb.org/3/movie/popular?api_key=f95390f2280b158ce1f7618a1fea93bf&language=en-US&page=1");
  
  const   textSearch = document.querySelector("#textSearch");
  const   btnSearch = document.querySelector("#btnSearch");
  btnSearch.addEventListener("submit", (e) => {
    e.preventDefault();
    const textSearch = search.value;
    if (textSearch == "") {
      getMovies(SEARCH_API + searchTerm);
      search.value = "";
    } else history.go(0);
  });
  