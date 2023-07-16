import { create } from "zustand"

import { initPage } from "../../consts"
import { TPageStore } from "../types"

export const usePageStore = create<TPageStore>((set, get) => ({
  page: initPage,
  incrementPage: () => set({ page: get().page + 1 }),
}))
