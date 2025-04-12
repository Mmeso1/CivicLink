import { Link, Outlet } from "react-router-dom";
import { FaBars, FaUserCircle } from "react-icons/fa";
import userStore from "../store/userStore";
import { useState } from "react";

const MintLayout = () => {
  const { isMinted } = userStore();

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <section className="flex flex-col lg:flex-row font-[Open Sans]">
      {toggle && (
        // Small screen menu
        <div className="w-[370px] font-[Open Sans] md:hidden bg-home text-white absolute h-[900px] rounded-br-3xl z-50">
          <p
            onClick={handleToggle}
            className=" cursor-pointer text-5xl absolute top-5 right-5"
          >
            X
          </p>
          <ul className="flex flex-col items-center text-2xl gap-[60px]">
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

      <aside className="w-[15%] hidden lg:block overflow-hidden bg-home min-h-screen">
        <div className=" flex flex-col ml-8 text-white">
          <h1 className="text-[1.8rem] font-[700] mt-10">
            <span className="text-green-300">Civic</span>Link
          </h1>
          {/* Update this once the Mint ID page has been made functional */}
          <li className="list-none text-[0.8rem] mt-10">
            <Link
              className="hover:cursor-pointer hover:text-gray-500"
              to={isMinted ? "/nftIssuance" : "/dashboard/home"}
            >
              Account
            </Link>
          </li>
          <li className="list-none text-[0.8rem] mt-10">
            <Link
              className="hover:cursor-pointer hover:text-gray-500"
              to="/dashboard/"
            >
              Dashboard
            </Link>
          </li>
          <li className="list-none text-[0.8rem] mt-10">
            <Link
              className="hover:cursor-pointer hover:text-gray-500"
              to="/nftIssuance"
            >
              My Civic Identity
            </Link>
          </li>
          <li className="list-none text-[0.8rem] mt-10">
            <a
              className="hover:cursor-pointer hover:text-gray-500"
              href="https://civicapp-s-git-main-orumade-destinys-projects.vercel.app/find-your-rep"
              target="_blank"
              rel="noopener noreferrer"
            >
              Activity
            </a>
          </li>
          <li className="list-none text-[0.8rem] mt-10">
            <Link className="hover:cursor-pointer hover:text-gray-500" to="#">
              Settings
            </Link>
          </li>
        </div>
      </aside>
      <aside className="lg:w-[85%] w-full">
        <header className="h-[80px] flex items-center justify-center border-b-[1px] border-gray-300">
          <div className="w-[90%]  flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FaUserCircle className="text-4xl text-gray-500" />
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
            <FaBars onClick={handleToggle} />
          </div>
        </header>

        {/* Outlet */}
        <div className="min-h-[80vh]">
          <Outlet />
        </div>
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
