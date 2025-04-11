import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import ConnectToWallet from "./pages/connectToWallet";
import NftIssuance from "./pages/nftIssuance";
import CivicIdMint from "./pages/civicMint";
import ConnectWithMetaMask from "./pages/connectWithMetaMask";

function App() {
  return (
    <>
      {/* <DiscoverWalletProviders /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nftIssuance" element={<NftIssuance />} />
        <Route path="/civic-id-mint" element={<CivicIdMint />} />
        <Route path="/connect-to-wallet" element={<ConnectToWallet />} />
        <Route
          path="/connect-with-metamask"
          element={<ConnectWithMetaMask />}
        />
      </Routes>
    </>
  );
}

export default App;
