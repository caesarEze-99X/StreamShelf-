import { MENU_LIST } from 'features/menu/constants/constant';
import MenuItem from 'features/menu/shared/menuItem/MenuItem';
import { MenuItem as MenuItemType, MenuRenderItem } from 'features/menu/types';
import { FlatList, TVFocusGuideView, View } from 'react-native';

const Menu = () => {
  const keyExtractor = (item: MenuItemType) => item;

  const renderItem = ({ item }: MenuRenderItem) => <MenuItem item={item} />;

  const itemSeparator = () => <View className="w-[28px]" />;

  return (
    <TVFocusGuideView className="w-full items-center">
      <View className="px-4 py-3 mt-4 h-[70px] rounded-full bg-white-opacity-12 items-center">
        <FlatList
          data={MENU_LIST}
          horizontal
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={itemSeparator}
        />
      </View>
    </TVFocusGuideView>
  );
};

export default Menu;
