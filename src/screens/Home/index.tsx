import { useEffect, useState } from "react";

import { fetchMovies } from "../../API";

import MovieList from "../../components/MovieList";

function Home() {
  const [movies, setMovies] = useState<any[]>([]);

  async function initData() {
    const data: any = await fetchMovies();
    setMovies(data);
  }

  useEffect(() => {
    initData();
  }, []);

  function sortByDate() {
    const currentMovies = movies.map((movie) => movie);
    const sortedMoviesByDate = currentMovies.sort(
      (a: any, b: any) =>
        Number(new Date(b.release_date)) - Number(new Date(a.release_date))
    );
    setMovies(sortedMoviesByDate);
  }

  return (
    <div>
      <button onClick={sortByDate}>Sort by date</button>
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;
