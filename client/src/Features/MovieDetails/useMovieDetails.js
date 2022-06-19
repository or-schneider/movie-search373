import axios from "axios";
import { useEffect, useState } from "react";

const apiBaseUrl = process.env.REACT_APP_MOVIES_API_BASE_URL;

function useMovieDetails({ movieId = "" }) {
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);
  const [fetchingMovieDetailsInProgress, setFetchingMovieDetailsInProgress] =
    useState(false);

  useEffect(() => {
    (async () => {
      setError(null);
      if (!movieId) {
        setMovieDetails(null);
        return;
      }
      setFetchingMovieDetailsInProgress(true);
      try {
        const movieDetailsResponse = await axios.get(
          `${apiBaseUrl}/movies/${movieId}`
        );
        setMovieDetails(movieDetailsResponse.data);
      } catch (error) {
        let errorMessage = error.message;
        if (error.response?.data?.message)
          errorMessage = error.response?.data?.message;
        setError(errorMessage);
      } finally {
        setFetchingMovieDetailsInProgress(false);
      }
    })();
  }, [movieId]);
  return {
    movieDetails,
    movieDetailsError: error,
    fetchingMovieDetailsInProgress,
  };
}

export default useMovieDetails;
