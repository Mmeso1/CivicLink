import { FaBars, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function CivicIdMint() {
  return (
    <section className="flex flex-col lg:flex-row font-[Open Sans]">
      <aside className="w-[15%] hidden lg:block overflow-hidden bg-home min-h-screen">
        <div className=" flex flex-col ml-8 text-white">
          <h1 className="text-[1.8rem] font-[700] mt-10">
            <span className="text-green-300">Civic</span>Link
          </h1>
          <li className="list-none text-[0.8rem] mt-10">
            <Link to="#">Home</Link>
          </li>
          <li className="list-none text-[0.8rem] mt-10">
            <Link to="#">About</Link>
          </li>
          <li className="list-none text-[0.8rem] mt-10">
            <Link to="#">Services</Link>
          </li>
          <li className="list-none text-[0.8rem] mt-10">
            <Link to="#">Officials</Link>
          </li>
          <li className="list-none text-[0.8rem] mt-10">
            <Link to="#">Complaints</Link>
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

        <section className="lg:mt-[30vh] mt-[10vh] mx-auto ">
          <div className="lg:w-[70%] w-full px-6 lg:flex item-center justify-center">
            <div className="">
              <p className="font-bold text-[2.3rem]">Mint Your Civic ID</p>
              <button className="bg-yellow px-2 my-5">Wallet users only</button>
              <p>Fill in the required details to mint your Civic ID</p>
            </div>
          </div>
        </section>

        <section className="lg:w-[90%] w-full px-6 mx-auto">
          <div className="lg:mt-[10vh] mt-[5vh]">
            <p className="font-bold text-[1.2rem]">Full Name</p>
            <input
              className="border-[1px] w-full lg:w-[598px] px-4 rounded-[6px] py-1 border-gray-300 my-1"
              type="text"
              placeholder="Enter your full legal name"
              id=""
            />
            <p className="text-[0.6rem] text-gray">
              Please ensure to enter your full legal name as per official
              documents.
            </p>
          </div>
          <div className="mt-[5vh]">
            <p className="font-bold text-[1.2rem]">Date of Birth</p>
            <input
              className="border-[1px] w-full lg:w-[598px] px-4 rounded-[6px] py-1 border-gray-300 my-1"
              type="date"
              placeholder="Select your date of birth"
              id=""
            />
            <p className="text-[0.6rem] text-gray">
              Select your accurate date of birth for verification purposes.
            </p>
          </div>
          <div className="mt-[5vh]">
            <p className="font-bold text-[1.2rem]">State</p>
            <input
              className="border-[1px] w-full lg:w-[598px] px-4 rounded-[6px] py-1 border-gray-300 my-1"
              type="text"
              placeholder="Enter your state</State>"
              id=""
            />
            <p className="text-[0.6rem] text-gray">
              Enter your state of birth.
            </p>
          </div>
          <div className="mt-[5vh]">
            <p className="font-bold text-[1.2rem]">Social Media handle </p>
            <input
              className="border-[1px] w-full lg:w-[598px] px-4 rounded-[6px] py-1 border-gray-300 my-1"
              type="text"
              placeholder="@yourhandle</State>"
              id=""
            />
          </div>
          <div className="mt-[3vh]">
            <label>
              <input className="md:ml-10 ml-0" type="checkbox" /> I confirm that
              the information above is accurate.
            </label>
          </div>

          <div>
            <button className="bg-home text-white my-[10vh] rounded-sm px-15 py-1">
              Mint Civic ID
            </button>
          </div>
        </section>

        <section className="lg:w-[90%] w-full px-6 mx-auto">
          <img src="/public/family.png" alt="an image of a nuclear family" />
        </section>

        <section className="w-[90%] text-[0.7rem] mt-10 mx-auto flex min-h-[15vh] items-center justify-center gap-x-20">
          <p>Contact Us</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </section>
      </aside>
    </section>
  );
}

export default CivicIdMint;
