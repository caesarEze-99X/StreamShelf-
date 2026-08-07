import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MenuItem, MenuItemHook, MenuStoreState } from 'features/menu//types';
import { useMenuStore } from 'features/menu/store/Menu';
import { ROUTE_NAME } from 'navigation/constants/constant';
import { RootStackParamList } from 'navigation/types';

export const useMenuItem = (menuItem: MenuItem): MenuItemHook => {
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { activeMenu, resetStore, updateStoreItem } = useMenuStore<MenuStoreState>(state => ({
    activeMenu: state.activeMenu,
    updateStoreItem: state.updateStoreItem,
    resetStore: state.resetStore,
  }));

  const onBlur = (): void => updateStoreItem({ activeMenu: '' });

  const onFocus = (): void => updateStoreItem({ activeMenu: menuItem });

  const onMenuItemPressed = () => {
    if (menuItem === 'Bookmark') {
      navigate(ROUTE_NAME.MyList);
    }
  };

  return { activeMenu, updateStoreItem, resetStore, onFocus, onBlur, onMenuItemPressed };
};
