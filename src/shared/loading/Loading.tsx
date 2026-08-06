import { FlatList, View } from 'react-native';

const STUBBED_LIST: Array<number> = new Array(15).fill(0);

const LoadingPlaceHolder = () => {
  const renderItem = () => (
    <View
      className="
        ml-5
        w-[300px]
        h-[200px]
        rounded-xl
        bg-white-opacity-12"
    />
  );

  const keyExtractor = (item: number, index: number) => `${item}*$${index}`;

  const itemSeparator = () => <View className="w-[8px]" />;

  return (
    <View className="w-full mb-[7%]">
      <View className="bg-white-opacity-12 h-[20px] w-[20%] ml-5 mb-5  rounded-xl" />
      <FlatList
        data={STUBBED_LIST}
        horizontal
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};

export default LoadingPlaceHolder;
