import { Link } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <header className="bg-white text-white h-[80px] flex items-center justify-center">
        <div className="w-[80%] flex justify-between items-center">
          <h1 className="text-[2rem] font-[700] open-sans text-black">
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
        <div className="lg:hidden text-4xl absolute right-10">
          <FaBars />
        </div>
      </header>
    </>
  );
};

export default NavBar;
