import { Link } from "react-router-dom";

import MovieCard from "../MovieCard";
import "./index.scss";

interface MovieListProps {
  movies: any;
}

function MovieList(props: MovieListProps) {
  if (props.movies.length == 0) return <p>Chargement..</p>;

  return (
    <ul className="MovieList">
      {props.movies.map((movie: any) => (
        <li key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
