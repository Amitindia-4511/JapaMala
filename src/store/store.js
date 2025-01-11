import { create } from "zustand";

const useStore = create((set) => ({
  selectedBead: "",
  setBeadType: (beadType) => set({ selectedBead: beadType }),
}));
export default useStore;
