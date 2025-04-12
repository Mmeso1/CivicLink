import { Link, Outlet } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";

const MintLayout = () => {
  return (
    <section className="flex flex-col lg:flex-row font-[Open Sans]">
      <aside className="w-[15%] hidden lg:block overflow-hidden bg-home min-h-screen">
        <div className=" flex flex-col ml-8 text-white">
          <h1 className="text-[1.8rem] font-[700] mt-10">
            <span className="text-green-300">Civic</span>Link
          </h1>
          <li className="list-none text-[0.8rem] mt-10">
            <Link to="">Account</Link>
          </li>
          <li className="list-none text-[0.8rem] mt-10">
            <Link to="#">Dashboard</Link>
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
            <h1 className="text-[2rem] font-[700]">
              <span className="">Civic</span>Link
            </h1>
            <nav className="lg:flex hidden justify-between gap-[40px] items-center">
              <ul className="flex gap-[40px] ">
                <li>
                  <Link to="#">Account</Link>
                </li>
                <li>
                  <Link to="#">Dashboard</Link>
                </li>
                <li>
                  <Link to="#">My Civic Identity</Link>
                </li>
                <li>
                  <Link to="#">Activity</Link>
                </li>
                <li>
                  <Link to="#">Settings</Link>
                </li>
              </ul>
              <div className=" w-[220px] flex justify-center border-[1px] border-gray-300 rounded-[6px] p-[8px] items-center">
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

        {/* Outlet */}
        <Outlet />
        {/* ---- */}

        <section className="w-[90%] text-[0.7rem] mt-10 mx-auto flex min-h-[15vh] items-center justify-center gap-x-20">
          <p>Contact Us</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </section>
      </aside>
    </section>
  );
};

export default MintLayout;
