import { Link } from "react-router-dom";
import { FaArrowCircleDown, FaBars, FaSearch } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <header className="border-b-[1.5px] border-b-gray-300 bg-white text-white h-[100px] flex items-center justify-center">
        <div className="w-[80%] flex justify-between items-center">
          <h1 className="text-[2rem] hidden lg:block font-[700] open-sans text-black">
            CivicLink
          </h1>
          <nav className="lg:flex hidden justify-between gap-[40px] items-center text-black">
            <ul className="flex gap-[40px] open-sans font-light">
              <li>
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">Services</Link>
              </li>
              <li>
                <Link to="#">Officials</Link>
              </li>
            </ul>
            <div className="w-[220px] flex justify-center border-[1px] border-[#0000001A] rounded-[6px] p-[8px] items-center open-sans text-[#00000080]">
              <input
                className="border-0 outline-0"
                placeholder="Search in site"
                type="text"
              />
              <FaSearch />
            </div>
          </nav>
        </div>
        <div className="lg:hidden px-6 absolute items-center justify-between left-0 w-full flex text-gray-nft text-4xl">
          <div className="flex gap-10">
            <FaBars />
            <h1 className="text-[2rem] font-[700] open-sans text-black">
              CivicLink
            </h1>
          </div>
          <div className="flex w-[150px] justify-between items-center">
            <FaSearch />
            <div className="flex items-center">
              <img
                src="/female user.png"
                className="w-[50px] h-[50px]"
                alt="Image of a user"
              />
              <FaArrowCircleDown className="ml-3 text-base" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
