import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../screens/Home";
import MovieDetail from "../screens/MovieDetail";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
