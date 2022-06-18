import axios from "axios";
import { useEffect, useState } from "react";

const apiBaseUrl = process.env.REACT_APP_MOVIES_API_BASE_URL;

function useMovieDetails({ movieId = "" }) {
  const [movieDetails, setMovieDetails] = useState(movieId);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async () => {
      if (!movieId) return;
      try {
        const movieDetailsResponse = await axios.get(
          `${apiBaseUrl}/movies/${movieId}`
        );
        setMovieDetails(movieDetailsResponse.data);

        setError(null);
      } catch (error) {
        let errorMessage = error.message;
        if (error.response?.data?.message)
          errorMessage = error.response?.data?.message;
        setError(errorMessage);
      }
    })();
  }, [movieId]);
  return { movieDetails, error };
}

export default useMovieDetails;
