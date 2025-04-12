import { create } from "zustand";
import { persist } from "zustand/middleware";

type userStoreType = {
  id: string;
  name: string;
  role: string;
  recipient: string;
  issueDate: string;
  transactionHash: string;
  isMinted: boolean;
  isConnected: boolean;
  walletAddress: string;
  setMintingDetails: (name: string, role: string) => void;
  handleMintingSuccess: (data: {
    id: string;
    name: string;
    role: string;
    recipient: string;
    issueDate: string;
    transactionHash: string;
  }) => void;
  isConnectedWallet: (status: boolean) => void;
  clearUserData: () => void;
};

const userStore = create<userStoreType>()(
  persist(
    (set) => ({
      id: "",
      name: "",
      role: "",
      recipient: "",
      issueDate: "",
      transactionHash: "",
      isMinted: false,
      isConnected: false,
      walletAddress: "",

      setMintingDetails: (name, role) => set(() => ({ name, role })),

      handleMintingSuccess: (data) =>
        set(() => ({
          id: data.id,
          name: data.name,
          role: data.role,
          recipient: data.recipient,
          issueDate: data.issueDate,
          transactionHash: data.transactionHash,
          isMinted: true,
          walletAddress: data.recipient,
        })),

      isConnectedWallet: (status) => set(() => ({ isConnected: status })),

      clearUserData: () =>
        set(() => ({
          id: "",
          name: "",
          role: "",
          recipient: "",
          issueDate: "",
          transactionHash: "",
          isMinted: false,
          isConnected: false,
          walletAddress: "",
        })),
    }),
    {
      name: "civic-id-user", // localStorage key
    }
  )
);

export default userStore;
