import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ClothingLibraryPage from "./pages/ClothingLibraryPage";
import OutfitCollectionsPage from "./pages/OutfitCollectionsPage";
import PantsPage from "./pages/PantsPage";
import ShoesPage from "./pages/ShoesPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import ShirtPage from "./pages/ShirtsPage";
import OutfitCreationPage from "./pages/OutfitCreationPage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<OutfitCollectionsPage />} />
        <Route path="/clothinglibrarypage" element={<ClothingLibraryPage />} />
        <Route path="/clothinglibrarypage/pantspage" element={<PantsPage />} />
        <Route path="/clothinglibrarypage/shirtspage" element={<ShirtPage />} />
        <Route path="/clothinglibrarypage/shoespage" element={<ShoesPage />} />
        <Route path="/outfitcreationpage" element={<OutfitCreationPage />} />
        <Route
          path="/clothinglibrarypage/accessoriespage"
          element={<AccessoriesPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
