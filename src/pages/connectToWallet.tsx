import NavBar from "../components/NavBar";
import { useState } from "react";
import WalletModal from "../components/WalletModal";
import { Link } from "react-router-dom";

const ConnectToWallet = () => {
  const [walletModalOpen, setWalletModalOpen] = useState(false);

  return (
    <>
      <NavBar />
      <section className="h-[384px] font-[Open Sans]">
        <div className="flex flex-col items-center justify-between h-full ">
          <div className="">
            <h1 className="text-center w-[88%] md:px-15 lg:w-[60%] mx-auto font-bold pt-20 leading-12 text-[2.7rem]">
              Connecting Citizens to Government Responsibly
            </h1>
            <p className="py-4 text-center font-[400] leading-[150%] text-normal md:my-0 my-10 text-[1.3rem] w-[70%] px-5 mx-auto ">
              Welcome to CivicLink! Find your representative or engage with
              government officials.
            </p>
          </div>
          <div className="w-[80%] mx-auto">
            <button
              className="py-[12px] px-[20px] h-[60px] w-full rounded-[8px] bg-[#005C37] text-white font-light cursor-pointer "
              onClick={() => setWalletModalOpen(true)}
            >
              Connect your Wallet
            </button>
          </div>
        </div>
        <section className="absolute bottom-0 w-full">
          <div className="flex mx-auto text-[0.7rem] md:text-[1rem] justify-between items-center w-[90%] md:w-[65%] lg:w-[60%] h-[80px]">
            <p>&copy; 2025 CivicLink. All rights reserved</p>
            <Link to="">Privacy Policy</Link>
            <Link to="">Terms of Service</Link>
          </div>
        </section>
      </section>
      {/* Modal Component */}
      <WalletModal
        isOpen={walletModalOpen}
        onClose={() => setWalletModalOpen(false)}
      />
    </>
  );
};

export default ConnectToWallet;
