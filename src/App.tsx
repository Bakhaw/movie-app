import { useEffect } from "react";

import { fetchMovies } from "./API";

function App() {
  useEffect(() => {
    fetchMovies();
  });

  return <div>Movie App</div>;
}

export default App;
