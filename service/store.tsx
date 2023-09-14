import { create } from "zustand";

interface Search {
  search: string;
  addFilter: (filter: string) => void;
}

export const useSearch = create<Search>((set, get) => ({
  search: "",
  addFilter: (filter: string) => {
    const { search } = get();
    set({ search: filter });
  },
}));
