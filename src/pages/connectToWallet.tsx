import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const ConnectToWallet = () => {
  return (
    <>
      <NavBar />
      <section className="h-[384px]">
        <div className="flex flex-col items-center justify-between h-full ">
          <div>
            <h1 className="text-center font-bold pt-20 leading-12 text-[2.5rem]">
              Connecting Citizens to <br /> Government Responsibly
            </h1>
            <p className="py-4 text-center font-[400] leading-[150%] text-normal open-sans">
              Welcome to CivicLink! Find your representative or engage with
              government officials.
            </p>
          </div>
          <div>
            <button className="py-[12px] px-[20px] h-[60px] w-[700px] rounded bg-[#005C37] text-white font-light open-sans cursor-pointer">
              Connect your Wallet
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConnectToWallet;
