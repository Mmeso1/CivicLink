function NftIssuance() {
  return (
    <section className="font-[Roboto]">
      <header className="h-[80px] container mx-auto flex items-center ">
        <p>⚫</p>
        <p className="ml-3 text-[28px] font-[500]">NFT Issuance</p>
      </header>

      <section className="bg-home text-white h-[218px] flex flex-col items-center gap-[60px] justify-center">
        <div className="h-[96px] flex flex-col gap-[24px]">
          <p className=" font-bold text-[2rem]">Civic ID #1234</p>
          <p>Details of your newly issued NFT</p>
        </div>
      </section>

      <section className="min-h-[720px] w-[90%] mx-auto md:mt-0 mt-10 flex flex-col md:flex-row items-center justify-center gap-x-7">
        <img src="/map-flag.png" alt="Flag of Nigeria" />
        <div className="mt-15 md:mt-0">
          <p className="font-bold text-[2rem]">NFT Details</p>
          <button className="text-white mt-5 mb-15 bg-home py-2 px-8 rounded-[6px]">
            GO to Dashboard
          </button>
          <img
            src="/nft-register.png"
            className="rounded-[6px]"
            alt="Flag of Nigeria"
          />
          <p className="mt-3 font-[Open Sans]">Civic ID #1234</p>
          <p className="font-[Open Sans]">Token ID: 5678</p>
        </div>
      </section>

      <section className="min-h-[220px] flex items-center">
        <div className="flex  items-center w-[90%] flex-col md:flex-row mx-auto md:w-[80%] md:justify-between">
          <p className="md:w-1/2 w-full font-bold  text-[2rem]">Issued To</p>
          <div className="md:w-1/2 w-full flex items-center justify-between mt-5 md:mt-0">
            <p>
              <span>🔑</span> wallet address
            </p>
            <p>0x1234abcd</p>
          </div>
        </div>
      </section>

      <section className="min-h-[268px] flex items-center font-[Open Sans]">
        <div className="flex items-center w-[90%] flex-col md:flex-row mx-auto md:w-[80%] justify-between">
          <p className="md:w-1/2 w-full font-bold  text-[2rem]">More Actions</p>
          <div className="md:w-1/2 w-full mt-5 md:mt-0 min-h-[148px] flex flex-col gap-[40px] ">
            <div>
              <p>View on Blockchain Explorer</p>
              <input
                className="border-[1px] mt-2 border-gray-300 w-full px-4 py-2 rounded-[6px]"
                type="text"
                placeholder="Enter token id"
              />
            </div>
            <button className="bg-home  flex items-center justify-center py-[12px] w-[240px] text-white rounded-[6px]">
              Submit{" "}
            </button>
          </div>
        </div>
      </section>

      <section className="h-[220px] flex items-center justify-center border-t-[1px] border-t-gray-300 font-[Open Sans]">
        © 2025 NFT Issuance App. All rights reserved.
      </section>
    </section>
  );
}

export default NftIssuance;
