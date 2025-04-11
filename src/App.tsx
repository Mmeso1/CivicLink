import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import NftIssuance from "./pages/nftIssuance";
import CivicIdMint from "./pages/civicMint";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nftIssuance" element={<NftIssuance />} />
          <Route path="/nftIssuance" element={<NftIssuance />} />X
          <Route path="/civic-id-mint" element={<CivicIdMint />} />X
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
