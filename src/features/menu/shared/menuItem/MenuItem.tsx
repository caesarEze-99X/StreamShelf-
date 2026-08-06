import { MENU_CONSTANTS, SIDE_MENU_ITEM } from 'features/menu/constants/constant';
import { useMenuItem } from 'features/menu/hooks/useMenuItem';
import { MenuItemProp } from 'features/menu/types';
import { ComponentType } from 'react';
import { SvgProps } from 'react-native-svg';
import FocusableButton from 'shared/focusableButton/FocusableButton';
import { colors } from 'tailwindConfig';

const MenuItem = ({ item }: MenuItemProp) => {
  const { activeMenu, onFocus, onBlur } = useMenuItem(item);
  const Icon: ComponentType<SvgProps> | null = SIDE_MENU_ITEM(item, item === activeMenu);
  const focusedStyle: string = item === activeMenu ? 'bg-white-opacity-70' : '';

  return (
    <FocusableButton
      hasTVPreferredFocus={item === 'Home'}
      testID="focusable-button"
      className={`flex-row items-center rounded-full justify-center h-full w-[100px] ${focusedStyle}`}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {Icon && (
        <Icon
          testID="icon"
          width={MENU_CONSTANTS.MENU_ITEM_ICON_SIZE}
          height={MENU_CONSTANTS.MENU_ITEM_ICON_SIZE}
          fill={colors.white}
        />
      )}
    </FocusableButton>
  );
};

export default MenuItem;
