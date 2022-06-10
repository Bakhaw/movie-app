import axios from "axios";

import { API_KEY } from "./config";

export async function fetchMovies() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`;
  const { data } = await axios.get(url);

  console.log("data:::", data);

  return data;
}
