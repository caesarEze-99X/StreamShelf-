import { MenuItem, MenuItemHook, MenuStoreState } from 'features/menu//types';
import { useMenuStore } from 'features/menu/store/Menu';

export const useMenuItem = (menuItem: MenuItem): MenuItemHook => {
  const { activeMenu, resetStore, updateStoreItem } = useMenuStore<MenuStoreState>(state => ({
    activeMenu: state.activeMenu,
    updateStoreItem: state.updateStoreItem,
    resetStore: state.resetStore,
  }));

  const onBlur = (): void => updateStoreItem({ activeMenu: '' });

  const onFocus = (): void => updateStoreItem({ activeMenu: menuItem });

  return { activeMenu, updateStoreItem, resetStore, onFocus, onBlur };
};
