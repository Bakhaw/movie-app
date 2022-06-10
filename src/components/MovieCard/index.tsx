import { IMG_BASE_URL } from "../../API/config";
import "./index.scss";

interface MovieCardProps {
  movie: any;
}

function MovieCard(props: MovieCardProps) {
  return (
    <div className="MovieCard">
      <img
        alt={props.movie.title}
        className="MovieCard__poster"
        src={`${IMG_BASE_URL}${props.movie.poster_path}`}
      />
      <h1 className="MovieCard__title">{props.movie.title}</h1>
    </div>
  );
}

export default MovieCard;
