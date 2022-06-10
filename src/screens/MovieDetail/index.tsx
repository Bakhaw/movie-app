import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchMovieById, fetchSimilarMovies } from "../../API";

import MovieCard from "../../components/MovieCard";
import SimilarMovies from "../../components/SimilarMovies";

import "./index.scss";

function MovieDetail() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<any>(null);
  const [similarMovies, setSimilarMovies] = useState<any[]>([]);

  async function initData() {
    const newMovie = await fetchMovieById(String(movieId));
    setMovie(newMovie);

    const newSimilarMovies = await fetchSimilarMovies(String(movieId));
    setSimilarMovies(newSimilarMovies);
  }

  useEffect(() => {
    initData();
  }, [movieId]);

  if (!movie || similarMovies.length == 0) return <p>Chargement..</p>;

  return (
    <div className="MovieDetail">
      <MovieCard movie={movie} />
      <p className="MovieDetail__overview">{movie.overview}</p>

      <SimilarMovies movies={similarMovies} />
    </div>
  );
}

export default MovieDetail;
