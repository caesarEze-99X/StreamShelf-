import { COMMON_INFO_STRING } from 'features/commonInfo/constants/string';
import CTAItem from 'features/commonInfo/shared/ctaActions/CTAItem';
import { CTAItemRender } from 'features/commonInfo/types';
import { FlatList, TVFocusGuideView, View } from 'react-native';

/* NOTE* Hardcoded this value here as it's just mock data */
const CTA_LIST: Array<string> = [COMMON_INFO_STRING.addToList, COMMON_INFO_STRING.removeFromList];

const CTAActions = () => {
  const keyExtractor = (item: string, index: number) => `${item}*$${index}`;

  const renderItem = ({ item, index }: CTAItemRender) => <CTAItem item={item} index={index} />;

  const itemSeparator = () => <View className="w-[20px]" />;

  return (
    <TVFocusGuideView className="w-full mb-[7%]">
      <FlatList
        data={CTA_LIST}
        horizontal
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={itemSeparator}
      />
    </TVFocusGuideView>
  );
};

export default CTAActions;
