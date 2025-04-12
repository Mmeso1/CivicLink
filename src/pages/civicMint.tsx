function CivicIdMint() {
  return (
    <>
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
          <p className="text-[0.6rem] text-gray">Enter your state of birth.</p>
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
    </>
  );
}

export default CivicIdMint;
