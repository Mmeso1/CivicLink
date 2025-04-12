import userStore from "../store/userStore";
import { Link } from "react-router-dom";
import pfp from "../assets/images/placeholder.png";
import { useState } from "react";
import { FaArrowLeft, FaBars, FaSearch } from "react-icons/fa";

function NftIssuance() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };
  const user = userStore();

  return (
    <section className="font-[Roboto]">
      <header className="h-[100px] justify-between px-6 hidden container mx-auto md:flex items-center ">
        {/* Header for large screens */}
        <div className="flex items-center">
          <p>⚫</p>
          <p className="ml-3 text-[28px] font-[500]">NFT Issuance</p>
        </div>
        <div className="text-home">
          <ul className="flex gap-8">
            <li>
              <Link className="hover:font-bold hover:text-gray-nft" to="">
                Account
              </Link>
            </li>
            <li>
              <Link className="hover:font-bold hover:text-gray-nft" to="">
                Dashboard
              </Link>
            </li>

            <li>
              <Link className="hover:font-bold hover:text-gray-nft" to="">
                Activity
              </Link>
            </li>
            <li>
              <Link className="hover:font-bold hover:text-gray-nft" to="">
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </header>

      {toggle && (
        // Small screen menu
        <div className="w-[370px] font-[Open Sans] md:hidden bg-home text-white absolute h-[900px] rounded-br-3xl z-50">
          <p
            onClick={handleToggle}
            className=" cursor-pointer text-5xl absolute top-5 right-5"
          >
            X
          </p>
          <ul className="flex flex-col ml-24 text-2xl gap-[60px]">
            <li className="mt-10">
              <h1 className="text-[2rem]">
                <span className="text-green-300">Civic</span>Link
              </h1>
            </li>
            <li>
              <Link className="hover:cursor-pointer hover:text-gray-500" to="#">
                Account
              </Link>
            </li>
            <li>
              <Link className="hover:cursor-pointer hover:text-gray-500" to="#">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="hover:cursor-pointer hover:text-gray-500" to="#">
                My Civic Identity
              </Link>
            </li>
            <li>
              <Link className="hover:cursor-pointer hover:text-gray-500" to="#">
                Activity
              </Link>
            </li>
            <li>
              <Link className="hover:cursor-pointer hover:text-gray-500" to="#">
                Settings
              </Link>
            </li>
            <li>
              <Link className="hover:cursor-pointer hover:text-gray-500" to="#">
                Volunteer
              </Link>
            </li>
            <li>
              <Link className="hover:cursor-pointer hover:text-gray-500" to="#">
                Help Center
              </Link>
            </li>
          </ul>
        </div>
      )}

      <header className="h-[100px] flex justify-around container  items-center md:hidden">
        {/* Header for small to medium screens */}

        <FaBars
          onClick={handleToggle}
          className="text-3xl hover:text-home cursor-pointer text-gray-nft"
        />

        <FaArrowLeft className="text-3xl hover:text-home cursor-pointer text-gray-nft" />

        <p className="font-bold text-[2rem]">NFT Issuance</p>

        <FaSearch className="text-3xl hover:text-home cursor-pointer text-gray-nft" />
        <img
          src="/user image.png"
          className="rounded-full h-15"
          alt="user image"
        />
      </header>

      <section className="bg-home text-white h-[218px] flex flex-col items-center gap-[60px] justify-center">
        <div className="h-[96px] flex flex-col gap-[24px]">
          <p className=" font-bold text-[2rem]">Civic ID: #{user.id}</p>
          <p>Details of your newly issued NFT</p>
        </div>
      </section>

      <section className="min-h-[720px] w-[90%] mx-auto md:mt-0 mt-10 flex flex-col md:flex-row items-center justify-center gap-x-7">
        <img src="/map-flag.png" alt="Flag of Nigeria" />
        <div className="mt-15 md:mt-0 flex flex-col items-start">
          <p className="font-bold text-[2rem]">NFT Details</p>
          <Link to="/dashboard/home">
            <button className="text-white mt-5 mb-15 bg-home py-2 px-8 rounded-[6px] cursor-pointer">
              Go to Dashboard
            </button>
          </Link>

          <div className="relative inline-block">
            <img src={pfp} className="rounded-[6px]" alt="profile picture" />
            <div className="absolute top-0 left-0 bg-gray-500 text-white text-xs px-2 py-1 rounded-tl-[6px]">
              {user.issueDate ? user.issueDate : "No Date"}
            </div>
          </div>
          <p className="mt-3 font-[Open Sans]">Civic ID: #{user.id}</p>
          {/* <p className="font-[Open Sans]">Token ID: 5678</p> */}
        </div>
      </section>

      <section className="min-h-[220px] flex items-center">
        <div className="flex  items-center w-[90%] flex-col md:flex-row mx-auto md:w-[80%] md:justify-between">
          <p className="md:w-1/2 w-full font-bold  text-[2rem]">Issued To</p>
          <div className="md:w-1/2 w-full flex items-center justify-between mt-5 md:mt-0">
            <p>
              <span>🔑</span> wallet address
            </p>
            <p>{user.walletAddress ? user.walletAddress : "...."}</p>
          </div>
        </div>
      </section>

      <section className="min-h-[268px] flex items-center font-[Open Sans]">
        <div className="flex items-center w-[90%] flex-col md:flex-row mx-auto md:w-[80%] justify-between">
          <p className="md:w-1/2 w-full font-bold  text-[2rem]">More Actions</p>
          <div className="md:w-1/2 w-full mt-5 md:mt-0 min-h-[148px] flex flex-col gap-[40px] ">
            <div>
              <p>Enter Transaction Hash</p>
              <input
                className="border-[1px] mt-2 border-gray-300 w-full px-4 py-2 rounded-[6px]"
                type="text"
                placeholder="Enter token id"
                onClick={() => {
                  const transactionHashInput = document.getElementById(
                    "transactionHashInput"
                  ) as HTMLInputElement | null; // Explicitly type the element
                  if (transactionHashInput && transactionHashInput.value) {
                    const transactionHash = transactionHashInput.value;
                    window.open(
                      `https://sepolia.basecan.org/tx/${transactionHash}`,
                      "_blank"
                    );
                  } else {
                    alert("Please enter a transaction hash.");
                  }
                }}
              />
            </div>
            <button className="bg-home  flex items-center justify-center py-[12px] w-[240px] text-white rounded-[6px] cursor-pointer">
              Submit{" "}
            </button>
          </div>
        </div>
      </section>

      <section className="h-[220px] flex items-center justify-center border-t-[1px] border-t-gray-300 font-[Open Sans]">
        © 2025 NFT Issuance App. All rights reserved.
      </section>
    </section>
  );
}

export default NftIssuance;
