import { Routes, Route } from "react-router-dom";
import FoodAndWine from "./pages/homeLayout/foodAndWine";
import HomeLayout from "./pages/homeLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<FoodAndWine />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
