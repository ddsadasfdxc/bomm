import { create } from "zustand";

export type Page = "home" | "explore" | "social" | "chat";

interface AppState {
  currentPage: Page;
  setPage: (page: Page) => void;
  navScrolled: boolean;
  setNavScrolled: (scrolled: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentPage: "home",
  setPage: (page) => set({ currentPage: page }),
  navScrolled: false,
  setNavScrolled: (scrolled) => set({ navScrolled: scrolled }),
}));
