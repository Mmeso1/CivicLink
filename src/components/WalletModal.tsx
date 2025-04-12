import { useState, useEffect } from "react";
import { useSyncProviders } from "../hooks/useSyncProviders";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { useWalletStore } from "../store/walletStore";
// import { formatAddress } from "../utils/index";

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose }) => {
  const [selectedWallet, setSelectedWallet] = useState<EIP6963ProviderDetail>();
  const [userAccount, setUserAccount] = useState<string>("");
  const providers = useSyncProviders();

  const navigate = useNavigate();

  const [isSearching, setIsSearching] = useState(true);
  const [noProviderFound, setNoProviderFound] = useState(false);

  // Connect to provider
  const handleConnect = async (providerWithInfo: EIP6963ProviderDetail) => {
    try {
      const accounts = (await providerWithInfo.provider.request({
        method: "eth_requestAccounts",
      })) as string[];
      setSelectedWallet(providerWithInfo);
      setUserAccount(accounts?.[0]);

      if (userAccount) {
        // console.log("User account:", userAccount);
        useWalletStore.getState().setWallet(userAccount, providerWithInfo);
        navigate("/connect-with-metamask");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // ESC to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Manage search and fallback behavior
  useEffect(() => {
    if (!isOpen) return;

    setIsSearching(true);
    setNoProviderFound(false);

    const searchTimeout = setTimeout(() => {
      if (providers.length === 0) {
        setNoProviderFound(true);
        setIsSearching(false);

        setTimeout(() => {
          window.location.href = "https://metamask.io/download.html";
        }, 3000);
      } else {
        setIsSearching(false);
      }
    }, 2000);

    return () => clearTimeout(searchTimeout);
  }, [providers, isOpen]);

  console.log(selectedWallet);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
    >
      <div className="bg-white rounded-xl p-8 w-[90%] max-w-[600px] h-[700px] relative">
        <button
          className="absolute top-2 right-4 text-xl text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ×
        </button>
        <div className="text-center mt-7">
          <h2 className="text-2xl font-semibold mb-4">Connect your Wallet</h2>
        </div>

        <div className="pt-10 flex flex-col items-center justify-center">
          {isSearching ? (
            <div className="flex flex-col items-center">
              <ClipLoader color="#0000ff" size={50} />
              <p className="text-sm text-gray-600">
                Searching for wallet providers...
              </p>
            </div>
          ) : noProviderFound ? (
            <div className="text-center text-red-600 text-md">
              You need a MetaMask Wallet to use this.
              <br />
              Redirecting to MetaMask site...
            </div>
          ) : (
            providers.map((provider) => (
              <button
                key={provider.info.uuid}
                onClick={() => handleConnect(provider)}
                className="flex items-center justify-center gap-4 w-3/4 p-2 mb-2 bg-[#EADFDF] rounded-lg shadow-md hover:bg-gray-200 border border-black cursor-pointer"
              >
                <img src={provider.info.icon} alt={provider.info.name} />
                <div>{provider.info.name}</div>
              </button>
            ))
          )}
        </div>

        <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 text-center text-gray-600 text-sm w-[400px]">
          <p>
            By connecting your wallet and using CivicLink, you agree to our {""}
            <a href="#" className="text-[#005C37] underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#005C37] underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WalletModal;
