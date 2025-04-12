import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import userStore from "../store/userStore";
import { ClipLoader } from "react-spinners";

function CivicIdMint() {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    role: "select",
    dateOfBirth: "",
    state: "",
    socialMediaHandle: "",
  });
  const [confirmed, setConfirmed] = useState(false);
  const user = userStore();

  // using useEffect to check if all fields are filled and confirmed
  useEffect(() => {
    const allFilled = Object.values(formData).every(
      (value) => value.trim() !== "" && value !== "select"
    );
    setIsDisabled(!(allFilled && confirmed));
  }, [formData, confirmed]);

  // generate random id
  const generateUserId = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomLetters =
      letters[Math.floor(Math.random() * 26)] +
      letters[Math.floor(Math.random() * 26)];
    const randomNumbers = Math.floor(1000 + Math.random() * 9000); // ensures 4 digits
    return randomLetters + randomNumbers;
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        " https://civic-identityw3.onrender.com/api/v1/nftmint",
        {
          name: formData.fullName,
          role: formData.role,
        }
      );

      const generatedId = generateUserId();

      // Access the nested data object
      const mintData = response.data.data;

      user.handleMintingSuccess({
        id: generatedId,
        name: mintData.name,
        role: mintData.role,
        recipient: mintData.receipient, // Note: Ensure the spelling matches the API response
        issueDate: mintData.issueDate,
        transactionHash: mintData.transactionHash,
      });

      console.log("Minting successful:", response.data);
      console.log("Issue Date:", mintData.issueDate); // Correctly log the issue date
      navigate("/nftIssuance");
    } catch (error) {
      console.error("Error minting Civic ID:", error);
    } finally {
      setIsLoading(false);
    }
  };

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
            id="fullname"
            placeholder="Enter your full legal name"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
          />
          <p className="text-[0.6rem] text-gray">
            Please ensure to enter your full legal name as per official
            documents.
          </p>
        </div>
        <div className="lg:mt-[10vh] mt-[5vh]">
          <p className="font-bold text-[1.2rem]">Role</p>

          <select
            className="border border-gray-300 w-full lg:w-[598px] px-4 py-2 rounded-[6px] my-1 text-gray-700"
            id="role"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          >
            <option value="select" disabled className="text-gray-200">
              Select
            </option>
            <option value="civilian">Civilian</option>
          </select>

          <p className="text-[0.6rem] text-gray">
            Please ensure you select the role that best represents your status.
            This cannot be changed later.
          </p>
        </div>

        <div className="mt-[5vh]">
          <p className="font-bold text-[1.2rem]">Date of Birth</p>
          <input
            className="border-[1px] w-full lg:w-[598px] px-4 rounded-[6px] py-1 border-gray-300 my-1"
            type="date"
            id="dateOfBirth"
            placeholder="Select your date of birth"
            value={formData.dateOfBirth}
            onChange={(e) =>
              setFormData({ ...formData, dateOfBirth: e.target.value })
            }
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
            id="state"
            placeholder="Enter your state</State>"
            value={formData.state}
            onChange={(e) =>
              setFormData({ ...formData, state: e.target.value })
            }
          />
          <p className="text-[0.6rem] text-gray">Enter your state of birth.</p>
        </div>
        <div className="mt-[5vh]">
          <p className="font-bold text-[1.2rem]">Social Media handle </p>
          <input
            className="border-[1px] w-full lg:w-[598px] px-4 rounded-[6px] py-1 border-gray-300 my-1"
            type="text"
            id="socialMediaHandle"
            placeholder="@yourhandle</State>"
            value={formData.socialMediaHandle}
            onChange={(e) =>
              setFormData({ ...formData, socialMediaHandle: e.target.value })
            }
          />
        </div>
        <div className="mt-[3vh]">
          <label>
            <input
              className="md:ml-10 ml-0"
              type="checkbox"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
            />{" "}
            I confirm that the information above is accurate.
          </label>
        </div>

        <button
          className={`my-[10vh] rounded-sm px-15 py-1 text-white ${
            isDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-home"
          }`}
          disabled={isDisabled}
          onClick={handleSubmit}
        >
          {isLoading ? <ClipLoader color="#fff" size={20} /> : "Mint Civic ID"}
        </button>
      </section>

      <section className="lg:w-[90%] w-full px-6 mx-auto">
        <img src="/public/family.png" alt="an image of a nuclear family" />
      </section>
    </>
  );
}

export default CivicIdMint;
