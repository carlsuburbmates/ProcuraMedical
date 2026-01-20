import { create } from "zustand";
import { DeliveryDetails, FundingType, PlanDetails } from "./schema";

interface CheckoutState {
  step: number;
  deliveryDetails: DeliveryDetails | null;
  fundingType: FundingType;
  planDetails: PlanDetails | null;
  
  setStep: (step: number) => void;
  setDeliveryDetails: (details: DeliveryDetails) => void;
  setFundingType: (type: FundingType) => void;
  setPlanDetails: (details: PlanDetails) => void;
  reset: () => void;
}

export const useCheckoutStore = create<CheckoutState>((set) => ({
  step: 1,
  deliveryDetails: null,
  fundingType: null,
  planDetails: null,

  setStep: (step) => set({ step }),
  setDeliveryDetails: (details) => set({ deliveryDetails: details }),
  setFundingType: (type) => set({ fundingType: type }),
  setPlanDetails: (details) => set({ planDetails: details }),
  reset: () => set({ step: 1, deliveryDetails: null, fundingType: null, planDetails: null }),
}));
