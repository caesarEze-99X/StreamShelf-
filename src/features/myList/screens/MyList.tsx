import { MY_LIST_CONSTANTS } from 'features/myList/constant/constant';
import { MY_LIST_STRING } from 'features/myList/constant/string';
import { useMyListHelper } from 'features/myList/hooks/useMyListHelper';
import { MyListItem, MyListRenderItem } from 'features/myList/types';
import { FlatList, StyleProp, Text, TVFocusGuideView, View, ViewStyle } from 'react-native';
import ContentCard from 'shared/carousel/ContentCard';

const columnWrapperStyle: StyleProp<ViewStyle> = { gap: 20, marginBottom: '5%' };

const MyList = () => {
  const { myList } = useMyListHelper();
  const keyExtractor = (item: MyListItem) => item.contentId;

  const renderItem = ({ item }: MyListRenderItem) => (
    <ContentCard {...item} containerStyle="w-[31%]" />
  );

  return (
    <View className="flex-1 bg-app-black ">
      <View className="flex-1 mt-[5%] pl-8">
        <Text className="font-nunito-bold color-white text-lg capitalize">
          {MY_LIST_STRING.myList}
        </Text>

        <TVFocusGuideView className="flex-1 w-full mt-5">
          <FlatList
            data={myList}
            numColumns={MY_LIST_CONSTANTS.MY_LIST_NUM_COLUMNS}
            columnWrapperStyle={columnWrapperStyle}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </TVFocusGuideView>
      </View>
    </View>
  );
};

export default MyList;
