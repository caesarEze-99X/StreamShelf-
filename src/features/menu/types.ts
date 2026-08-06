import { ResetStore, UpdateStoreItem } from 'reusableTypes/types';

export type MenuItem = 'Home' | 'Bookmark' | '';

export interface MenuItemProp {
  item: MenuItem;
}

export type MenuStoreState = {
  activeMenu: MenuItem;
  resetStore: ResetStore;
  updateStoreItem: UpdateStoreItem<Partial<MenuStoreState>>;
};

export type MenuItemHook = {
  onFocus: () => void;
  onBlur: () => void;
} & MenuStoreState;

export type MenuRenderItem = { index: number; item: MenuItem };
