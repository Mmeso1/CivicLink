import { useEffect, useState } from "react";
import { useWalletStore } from "../store/walletStore";
import { useNavigate } from "react-router-dom";

const ConnectWithMetaMask = () => {
  const { account, isConnected } = useWalletStore();
  const navigate = useNavigate();
  const [isVerifying, setIsVerifying] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    if (!account || !isConnected) {
      navigate("/"); // kick user out if they jump ahead
      return;
    }

    // Simulate wallet verification (e.g., message signing)
    const timer = setTimeout(() => {
      setIsVerifying(false);
      setShowSuccessModal(true);
    }, 3000); // adjust as needed

    return () => clearTimeout(timer);
  }, [account, isConnected, navigate]);

  if (isVerifying) {
    return (
      <div className="h-screen flex flex-col justify-between pt-10 pb-20 mx-10">
        {/* Spinner and Verifying Message */}
        <section className="open-sans flex flex-col items-center justify-center h-full gap-4">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 border-6 border-t-6 border-t-[#81DC95] border-gray-300 rounded-full animate-spin"></div>
          </div>
          <p className="text-3xl">Connecting with Metamask</p>
          <p className="text-sm">This may take a few seconds</p>
          <p className="text-sm">
            Your Wallet will prompt you to sign a message. This helps us confirm
            your wallet ownership
          </p>
        </section>
      </div>
    );
  }

  return (
    showSuccessModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-xl w-96 text-center">
          <h2 className="text-2xl font-semibold mb-2">Wallet Connected!</h2>
          <p className="mb-6 text-gray-700">You're in 🎉</p>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={() => navigate("/dashboard")}
          >
            Continue to Dashboard
          </button>
        </div>
      </div>
    )
  );
};

export default ConnectWithMetaMask;
