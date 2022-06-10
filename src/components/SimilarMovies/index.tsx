import { Link } from "react-router-dom";

import MovieCard from "../MovieCard";
import "./index.scss";

interface SimilarMoviesProps {
  movies: any;
}

function SimilarMovies(props: SimilarMoviesProps) {
  if (props.movies.length == 0) return <p>Chargement..</p>;

  return (
    <div className="SimilarMovies">
      <h1 className="SimilarMovies__section-title">Similar Movies</h1>
      <ul className="SimilarMovies__items">
        {props.movies.map((movie: any) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SimilarMovies;
