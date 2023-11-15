import { create } from "zustand";

type NavStore = {
  pageIndex: number;
  lastPageIndex: number;
  isTransitioning: boolean;
  setPageIndex: (pageIndex: number) => void;
  setLastPageIndex: (pageIndex: number) => void;
  setIsTransitioning: (isTransitioning: boolean) => void;
};

export const useNavStore = create<NavStore>((set) => ({
  pageIndex: 0,
  lastPageIndex: 0,
  isTransitioning: false,
  setPageIndex: (pageIndex) => set(() => ({ pageIndex })),
  setLastPageIndex: (lastPageIndex) => set(() => ({ lastPageIndex })),
  setIsTransitioning: (isTransitioning) => set(() => ({ isTransitioning })),
}));
