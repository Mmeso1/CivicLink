import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import NftIssuance from "./pages/nftIssuance";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nftIssuance" element={<NftIssuance />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
