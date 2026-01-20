import { create } from "zustand";

interface ProcurementModalState {
  isOpen: boolean;
  productName: string;
  price: string;
  code: string;
  openModal: (productName: string, price: string, code: string) => void;
  closeModal: () => void;
}

export const useProcurementModal = create<ProcurementModalState>((set) => ({
  isOpen: false,
  productName: "",
  price: "",
  code: "",
  openModal: (productName, price, code) => set({ isOpen: true, productName, price, code }),
  closeModal: () => set({ isOpen: false }),
}));
