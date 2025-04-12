import book from "../assets/images/Book-Photo.png";
import pots from "../assets/images/Pots.svg";
import star from "../assets/images/star.svg";
import card from "../assets/images/wallet.svg";

const Dashboard = () => {
  return (
    <div className="open-sans ">
      <section className="flex flex-col items-center justify-center mt-10 gap-10">
        <p className="text-4xl font-bold">Let’s Create Your Civic ID</p>
        <button className="px-4 py-2 text-white bg-[#003D25] rounded-md w-36 cursor-pointer">
          Mint Civic ID
        </button>
      </section>
      <div className="mt-28">
        <section className="flex flex-col items-center justify-center mt-10">
          <p className="text-4xl font-bold">Other Recommended Services</p>
          <p className="font-light text-sm my-4">
            Discover exclusive offers tailored for Civic ID holders.
          </p>
          <button className="px-4 py-2 text-white bg-[#003D25] rounded-md w-36 cursor-pointer">
            Explore Offers
          </button>
        </section>
        <section className="recommendations">
          <div>
            <img src={book} alt="books" />
            <div>
              <p>Bookshop</p>
              <p>
                Expand your understanding on Nigeria history 10% off as a Civic
                ID owner
              </p>
              <div>
                <img src={star} alt="star" />
                <img src={card} alt="card" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
