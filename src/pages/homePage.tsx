import { FaBars, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import LatestUpdates from "../components/latestUpdates";

import { BiDownArrow } from "react-icons/bi";
import { useState } from "react";

function HomePage() {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <section className="bg-white font-[Open Sans]">
      {toggle && (
        <div className="w-[300px] lg:hidden bg-home text-white absolute h-screen z-50">
          <p
            onClick={handleToggle}
            className="font-[cursive] cursor-pointer text-5xl absolute top-5 right-10"
          >
            X
          </p>
          <ul className="flex flex-col items-center text-2xl gap-[60px] font-[700] ">
            <li className="mt-30">
              <Link className="hover:cursor-pointer hover:text-gray-500" to="#">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:cursor-pointer hover:text-gray-500" to="#">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:cursor-pointer hover:text-gray-500" to="#">
                Services
              </Link>
            </li>
            <li>
              <Link className="hover:cursor-pointer hover:text-gray-500" to="#">
                Officials
              </Link>
            </li>
            <li>
              <Link className="hover:cursor-pointer hover:text-gray-500" to="#">
                Complaints
              </Link>
            </li>
          </ul>
        </div>
      )}
      <header className="bg-home text-white h-[80px] flex items-center justify-center">
        <div className="w-[80%] flex justify-between items-center">
          <h1 className="text-[2rem] font-[700] ml-28 lg:ml-0">
            <span className="text-green-300">Civic</span>Link
          </h1>
          <nav className="lg:flex hidden justify-between gap-[40px] items-center">
            <ul className="flex gap-[40px] font-[700] ">
              <li>
                <Link
                  className="hover:cursor-pointer hover:text-gray-500"
                  to="#"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:cursor-pointer hover:text-gray-500"
                  to="#"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="hover:cursor-pointer hover:text-gray-500"
                  to="#"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="hover:cursor-pointer hover:text-gray-500"
                  to="#"
                >
                  Officials
                </Link>
              </li>
              <li>
                <Link
                  className="hover:cursor-pointer hover:text-gray-500"
                  to="#"
                >
                  Complaints
                </Link>
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
        <div className="lg:hidden text-4xl absolute left-10">
          <FaBars className="cursor-pointer" onClick={handleToggle} />
        </div>

        <div className="flex items-center lg:hidden justify-evenly w-[300px]">
          <p className="text-3xl">
            <FaSearch />
          </p>
          <div className="flex items-center">
            <img
              className="rounded-full mr-3"
              src="/user image.png"
              alt="Image of the user"
            />
            <p className="text-3xl">
              <BiDownArrow />
            </p>
          </div>
        </div>
      </header>

      <section className="h-[384px]">
        <div className="flex flex-col items-center gap-4 ">
          <h1 className="text-center font-bold pt-20 leading-[100%] text-[2.5rem]">
            Connecting Citizens to <br /> Government Responsibly
          </h1>
          <p className="py-4 text-center font-[400] leading-[150%] text-normal ">
            Welcome to CivicLink! Find your representative or engage <br /> with
            government officials.
          </p>
          <button className="py-[12px] px-[20px] h-[50px] w-[328px] bg-home rounded-[8px] text-white">
            Learn More
          </button>
          <Link to="connect-to-wallet">
            <button className="py-[12px] px-[20px] h-[50px] w-[328px] text-home rounded-[8px] font-bold border-[1px] border-home cursor-pointer">
              Connect with your civic link
            </button>
          </Link>
        </div>
      </section>

      <section className="h-[220px] mt-20 flex bg-home text-white ">
        <div className="mx-auto w-[76%] flex items-center">
          <img
            className="w-[100px] h-[100px]"
            src="/image.png"
            alt="An image of the Nigerian Flag"
          />
          <div className="ml-10 md:text-base text-[0.8rem]">
            <p className="">Government of Nigeria</p>
            <p className="mt-3">Empowering citizens through CivicLink</p>
          </div>
        </div>
      </section>

      <section className="h-[523px] flex items-center justify-center">
        <div className="mx-auto w-full h-auto md:w-[76%]">
          <img src="/nigeria-girl.png" />
        </div>
      </section>

      <section className="h-[679px] flex items-center justify-center">
        <div className="mx-auto w-full px-4 md:px-0 md:w-[76%]">
          <h1 className="font-bold text-center text-[2.5rem]">
            Latest Updates
          </h1>
          <div className="flex flex-col md:flex-row justify-center gap-[40px] pt-10">
            <LatestUpdates
              heading="Exciting news from the government!"
              image="/map-flag.png"
              tag="Announcement"
              title="GovOfficial1"
            />
            <LatestUpdates
              heading="Join us for a community event."
              image="/flag-hand.png"
              tag="Event"
              title="CivilSocietyOrg"
            />
          </div>
        </div>
      </section>

      <section className="h-[280px] border-b-1 border-b-gray-300 flex items-center justify-center">
        <div className="mx-auto mt-32 md:mt-0 md:mb-0 w-full px-4 md:px-0  md:w-[76%] pb-10 flex flex-col md:gap-[60px] gap-10">
          <h1 className="md:text-[2.5rem]  font-bold text-center">
            Language Selector for your best translation
          </h1>

          <ul className="flex justify-between text-[1.1rem]">
            <li>
              <Link
                className="hover:text-home hover:cursor-pointer hover:font-bold"
                to="#"
              >
                English
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-home hover:cursor-pointer hover:font-bold"
                to="#"
              >
                Yoruba
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-home hover:cursor-pointer hover:font-bold"
                to="#"
              >
                Igbo
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-home hover:cursor-pointer hover:font-bold"
                to="#"
              >
                Hausa
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-home hover:cursor-pointer hover:font-bold"
                to="#"
              >
                Other
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-30 pb-10">
        <div className="flex flex-col md:flex-row mx-auto w-2/3 items-center justify-between gap-[60px] md:gap-0">
          <Link
            className="hover:text-home hover:cursor-pointer hover:font-bold"
            to=""
          >
            © 2025 CivicLink. All rights reserved.
          </Link>
          <Link
            className="hover:text-home hover:cursor-pointer hover:font-bold"
            to=""
          >
            Privacy Policy
          </Link>
          <Link
            className="hover:text-home hover:cursor-pointer hover:font-bold"
            to=""
          >
            Terms of Service
          </Link>
        </div>
      </section>
    </section>
  );
}

export default HomePage;
