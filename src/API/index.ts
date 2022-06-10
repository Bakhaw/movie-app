import axios from "axios";

import { API_KEY } from "./config";

export async function fetchMovies() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`;
  const { data } = await axios.get(url);

  return data.results;
}

export async function fetchMovieById(movieId: string) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  const { data } = await axios.get(url);

  return data;
}

export async function fetchSimilarMovies(movieId: string) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US`;
  const { data } = await axios.get(url);

  return data.results;
}
