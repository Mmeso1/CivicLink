import { useEffect, useState } from "react";
import { useWalletStore } from "../store/walletStore";
import { useNavigate, Link } from "react-router-dom";

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
        <div className="header flex items-center justify-between">
          <div className="flex flex-col gap-4 open-sans">
            <p className="text-3xl">Verifying your identity</p>
            <p>We need to confirm you are a real user</p>
          </div>
          <div className="flex gap-7 open-sans">
            <button className="cursor-pointer">Home</button>
            <button className="cursor-pointer">Account</button>
          </div>
        </div>
        <section className="open-sans flex flex-col items-center justify-center h-full gap-4">
          {/* Custom Spinner */}
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-full"></div>
            <div className="absolute inset-0 border-6 border-t-6 border-t-[#81DC95] border-gray-300 rounded-full animate-spin"></div>
          </div>
          <p className="text-3xl">Connecting with Metamask</p>
          <p className="text-sm">This may take a few seconds</p>
          <p className="text-sm">
            Your Wallet will prompt you to sign a message. This helps us confirm
            your wallet ownership
          </p>
        </section>
        <footer className="flex items-center justify-center gap-5">
          <Link to="">Contact Us</Link>
          <Link to="">Privacy Policy</Link>
          <Link to="">Terms of Service</Link>
        </footer>
      </div>
    );
  }

  return (
    showSuccessModal && (
      <div className="fixed inset-0  bg-white flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-xl w-96 text-center">
          <h2 className="text-3xl font-semibold mb-2">Wallet Connected!</h2>
          <p className="mt-6 mb-16 text-gray-700">You're in! 🎉</p>
          <button
            className="bg-[#005C37] text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
            onClick={() => navigate("/dashboard/home")}
          >
            Continue to Dashboard
          </button>
        </div>
      </div>
    )
  );
};

export default ConnectWithMetaMask;
