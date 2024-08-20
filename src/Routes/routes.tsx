// routes.js
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import ProductsPage from "@/pages/ProductsPage/ProductsPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<LandingPage />} />
      <Route path="/produtos" element={<ProductsPage />} />
    </Routes>
  );
}
