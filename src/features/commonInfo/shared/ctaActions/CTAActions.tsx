import { useCTAActionHelper } from 'features/commonInfo/hooks/useCTAActionsHelper';
import CTAItem from 'features/commonInfo/shared/ctaActions/CTAItem';
import { CTAActionsProps, CTAItemRender } from 'features/commonInfo/types';
import { FlatList, TVFocusGuideView, View } from 'react-native';

const CTAActions = ({ content }: CTAActionsProps) => {
  const { generateCTAList, onCTAItemPressed } = useCTAActionHelper(content);
  const ctaListData: Array<string> = generateCTAList();

  const keyExtractor = (item: string, index: number) => `${item}*$${index}`;

  const renderItem = ({ item, index }: CTAItemRender) => (
    <CTAItem item={item} index={index} onCTAItemPressed={onCTAItemPressed} />
  );

  const itemSeparator = () => <View className="w-[20px]" />;

  return (
    <TVFocusGuideView className="w-full mb-[7%]">
      <FlatList
        data={ctaListData}
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
