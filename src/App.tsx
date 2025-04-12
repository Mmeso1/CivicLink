import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import ConnectToWallet from "./pages/connectToWallet";
import NftIssuance from "./pages/nftIssuance";
import CivicIdMint from "./pages/civicMint";
import ConnectWithMetaMask from "./pages/connectWithMetaMask";
import MintLayout from "./components/MintLayout";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <>
      {/* <DiscoverWalletProviders /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nftIssuance" element={<NftIssuance />} />
        <Route path="/connect-to-wallet" element={<ConnectToWallet />} />
        <Route
          path="/connect-with-metamask"
          element={<ConnectWithMetaMask />}
        />
        <Route path="/dashboard" element={<MintLayout />}>
          <Route path="civic-id-mint" element={<CivicIdMint />} />
          <Route path="home" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
