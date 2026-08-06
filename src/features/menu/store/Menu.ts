import { MenuStoreState } from 'features/menu/types';
import { createWithEqualityFn } from 'zustand/traditional';

const initialState: Partial<MenuStoreState> = {
  activeMenu: 'Home',
};

export const useMenuStore = createWithEqualityFn<MenuStoreState>(set => ({
  activeMenu: 'Home',
  resetStore: () => set({ ...initialState }),
  updateStoreItem: (storeItem: Partial<MenuStoreState>) =>
    set((state: MenuStoreState) => ({
      ...state,
      ...storeItem,
    })),
}));
