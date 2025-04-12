import book from "../assets/images/Book-Photo.png";
import pots from "../assets/images/Pots.svg";
import star from "../assets/images/star.png";
import card from "../assets/images/wallet.png";
import { Link } from "react-router-dom";
import userStore from "../store/userStore";

const Dashboard = () => {
  const { isMinted } = userStore();

  return (
    <div className="open-sans ">
      <section className="flex flex-col items-center justify-center mt-10 gap-10">
        <p className="text-4xl font-bold">Let’s Create Your Civic ID</p>
        <Link
          to={isMinted ? "/dashboard/nftIssuancee" : "/dashboard/civic-id-mint"}
        >
          <button className="px-4 py-2 text-white bg-[#003D25] rounded-md w-36 cursor-pointer">
            {isMinted ? "View Account" : "Mint Civic ID"}
          </button>
        </Link>
        {/* <Link to="/dashboard/civic-id-mint">
          <button className="px-4 py-2 text-white bg-[#003D25] rounded-md w-36 cursor-pointer">
            "Mint Civic ID"
          </button>
        </Link> */}
      </section>
      <div className="mt-28">
        <section className="flex flex-col items-center justify-center mt-10 mb-14">
          <p className="text-4xl font-bold">Other Recommended Services</p>
          <p className="font-light text-sm my-4">
            Discover exclusive offers tailored for Civic ID holders.
          </p>
          <button className="px-4 py-2 text-white bg-[#003D25] rounded-md w-36 cursor-pointer">
            Explore Offers
          </button>
        </section>
        <section className="recommendations flex items-center gap-5 ml-14">
          <div className="w-[450px] bg-white rounded-md hover:shadow-md overflow-hidden cursor-pointer">
            <img src={book} alt="books" className="w-full h-auto" />

            <div className="border border-gray-300 rounded-bl-md rounded-br-md p-4 flex flex-col gap-2 open-sans">
              <p className="font-light text-xl text-gray-600">Bookshop</p>
              <p className="font-semibold text-xl text-black">
                Expand your understanding on Nigeria history 10% off as a Civic
                ID owner
              </p>
              <div className="flex gap-2 mt-2">
                <img src={star} alt="star" className="w-5 h-5" />
                <img src={card} alt="card" className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="w-[450px] bg-white rounded-md hover:shadow-md overflow-hidden cursor-pointer">
            <img src={pots} alt="books" className="w-full h-auto" />

            <div className="border border-gray-300 rounded-bl-md rounded-br-md p-4 flex flex-col gap-2 open-sans">
              <p className="font-light text-xl text-gray-600">Craftstore</p>
              <p className="font-semibold text-xl text-black">
                Discover the beauty of Nigeria Artwork 15% off as a Civic ID
                owner
              </p>
              <div className="flex gap-2 mt-2">
                <img src={star} alt="star" className="w-5 h-5" />
                <img src={card} alt="card" className="w-5 h-5" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
