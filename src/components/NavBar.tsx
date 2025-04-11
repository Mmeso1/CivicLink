import { Link } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";

const NavBar = () => {
  return (
    <header className="bg-home text-white h-[80px] flex items-center justify-center">
      <div className="w-[80%] flex justify-between items-center">
        <h1 className="text-[2rem] font-[700]">
          <span className="text-green-300">Civic</span>Link
        </h1>
        <nav className="lg:flex hidden justify-between gap-[40px] items-center">
          <ul className="flex gap-[40px] font-[700] ">
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
            <li>
              <Link to="#">Complaints</Link>
            </li>
          </ul>
          <div className=" w-[220px] flex justify-center border-[1px] border-search rounded-[6px] p-[8px] items-center">
            <div>
              <input
                className="border-0 outline-0"
                placeholder="search in site"
                type="text"
                name=""
              />
            </div>
            <div className="">
              <FaSearch />
            </div>
          </div>
        </nav>
      </div>
      <div className="lg:hidden text-4xl absolute right-10">
        <FaBars />
      </div>
    </header>
  );
};

export default NavBar;
