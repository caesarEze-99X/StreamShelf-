import { Text, View } from 'react-native';
import { EmptyCarouselProp } from 'shared/types';

const EmptyCarousel = ({ message }: EmptyCarouselProp) => {
  return (
    <View className="w-full mb-[7%]">
      <View
        className="ml-5 w-full h-[200px] rounded-xl bg-white-opacity-12 justify-center 
      items-center"
      >
        <Text className="text-rg font-nunito-reg color-white-opacity-95">{message}</Text>
      </View>
    </View>
  );
};

export default EmptyCarousel;
