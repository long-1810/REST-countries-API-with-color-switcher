import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import countriesData from "./assets/data/data.json";
import Error from "./pages/Error";

// Contexts
export const PageData = createContext();

export default function App() {
  const [pageData, setPageData] = useState({
    darkMode: true,
    countriesData: countriesData,
    selectedCountry: "",
  });

  return (
    <PageData.Provider value={[pageData, setPageData]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:country" element={<Details />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </PageData.Provider>
  );
}
