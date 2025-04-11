import { create } from "zustand";

type userStoreType = {
  id: string;
  name: string;
  role: string;
  recipient: string;
  issueDate: string;
  transactionHash: string;
  isMinted: boolean;
  isConnected: boolean;
  setMintingDetails: (name: string, role: string) => void;
  handleMintingSuccess: (data: {
    name: string;
    role: string;
    recipient: string;
    issueDate: string;
    transactionHash: string;
  }) => void;
  isConnectedWallet: (status: boolean) => void;
};

const userStore = create<userStoreType>((set) => ({
  id: "",
  name: "",
  role: "",
  recipient: "",
  issueDate: "",
  transactionHash: "",
  isMinted: false,
  isConnected: false,

  setMintingDetails: (name, role) => set(() => ({ name, role })),

  handleMintingSuccess: (data) =>
    set(() => ({
      name: data.name,
      role: data.role,
      recipient: data.recipient,
      issueDate: data.issueDate,
      transactionHash: data.transactionHash,
      isMinted: true,
    })),

  isConnectedWallet: (status) => set(() => ({ isConnected: status })),
}));

export default userStore;
