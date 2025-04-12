// store/walletStore.ts
import { create } from "zustand";

interface WalletState {
  account: string | null;
  provider: EIP6963ProviderDetail | null;
  isConnected: boolean;
  setWallet: (account: string, provider: EIP6963ProviderDetail) => void;
  resetWallet: () => void;
}

export const useWalletStore = create<WalletState>((set) => ({
  account: null,
  provider: null,
  isConnected: false,
  setWallet: (account, provider) =>
    set({ account, provider, isConnected: true }),
  resetWallet: () => set({ account: null, provider: null, isConnected: false }),
}));
