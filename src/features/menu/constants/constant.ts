import {
  BookmarkActiveIcon,
  BookmarkInActiveIcon,
  HomeActiveIcon,
  HomeInActiveIcon,
} from 'features/menu/assets';
import { MenuItem } from 'features/menu/types';
import { ComponentType } from 'react';
import { SvgProps } from 'react-native-svg';

export const CONSTANT_UNTYPED = {
  MENU_ITEM_ICON_SIZE: 30,
};

type ConstantKeys = typeof CONSTANT_UNTYPED;

export const MENU_CONSTANTS: ConstantKeys = CONSTANT_UNTYPED;

export const MENU_LIST: Array<MenuItem> = ['Home', 'Bookmark'];

export const SIDE_MENU_ITEM = (
  menuItem: MenuItem,
  focused: boolean,
): ComponentType<SvgProps> | null => {
  switch (menuItem) {
    case 'Home':
      return focused ? HomeActiveIcon : HomeInActiveIcon;
    case 'Bookmark':
      return focused ? BookmarkActiveIcon : BookmarkInActiveIcon;
    default:
      return null;
  }
};
