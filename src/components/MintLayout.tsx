import { Link, Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import mintID from "../assets/images/mintID.svg";

const MintLayout = () => {
  return (
    <section className="flex flex-col lg:flex-row font-[Open Sans]">
      <aside className="w-[15%] hidden lg:block overflow-hidden bg-home min-h-screen">
        <div className=" flex flex-col ml-8 text-white">
          <h1 className="text-[1.8rem] font-[700] mt-10">
            <span className="text-green-300">Civic</span>Link
          </h1>
          {/* Update this once the Mint ID page has been made functional */}
          <li className="list-none text-[0.8rem] mt-10">
            <Link to="/dashboard/home">Account</Link>
          </li>
          <li className="list-none text-[0.8rem] mt-10">
            <Link to="/dashboard/home">Dashboard</Link>
          </li>
          <li className="list-none text-[0.8rem] mt-10">
            <Link to="#">My Civic Identity</Link>
          </li>
          <li className="list-none text-[0.8rem] mt-10">
            <Link to="#">Activity</Link>
          </li>
          <li className="list-none text-[0.8rem] mt-10">
            <Link to="#">Settings</Link>
          </li>
        </div>
      </aside>
      <aside className="lg:w-[85%] w-full">
        <header className="h-[80px] flex items-center justify-center border-b-[1px] border-gray-300">
          <div className="w-[90%]  flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={mintID} alt="mint pfp" />
              <h1 className="text-2xl font-bold">Civic Mint ID</h1>
            </div>

            <nav className="lg:flex hidden justify-between gap-[40px] items-center">
              <ul className="flex gap-[40px] ">
                <li>
                  <Link to="#">Home</Link>
                </li>
                <li>
                  <Link to="/dashboard/civic-id-mint">Profile</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="lg:hidden text-4xl absolute right-10">
            <FaBars />
          </div>
        </header>

        {/* Outlet */}
        <Outlet />
        {/* ---- */}

        <div className="border-t border-gray-300 mt-20"></div>

        <section className="w-[90%] text-base mt-4 mx-auto flex min-h-[15vh] items-center justify-center gap-x-20 open-sans">
          <p>Contact Us</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </section>
      </aside>
    </section>
  );
};

export default MintLayout;
