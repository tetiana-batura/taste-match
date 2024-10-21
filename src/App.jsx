import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage/RecipeDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<HomePage />} />
          <Route path="/recipes/:id" element={<RecipeDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
