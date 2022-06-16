export default function formatMoviesToShortForm(movies) {
  const moviesShortForm = [];
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];

    if (movie.error) {
      continue;
    }
    const movieShortForm = {
      img: movie.Poster,
      title: movie.Title,
      description: movie.Genre,
      imdbRating: movie.imdbRating,
      id: movie.imdbID,
    };
    moviesShortForm.push(movieShortForm);
  }
  return moviesShortForm;
}
