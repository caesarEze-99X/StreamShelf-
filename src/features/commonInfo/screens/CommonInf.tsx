import { useRoute } from '@react-navigation/native';
import CTAActions from 'features/commonInfo/shared/ctaActions/CTAActions';
import { CommonInfoRouteProp } from 'navigation/types';
import { Image, Text, View } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

const CommonInfo = () => {
  const route = useRoute<CommonInfoRouteProp>();
  const props = route.params ?? {};
  const { description, title, backdrop_path, bannerImg } = props;
  const imgUrlToUse: string = backdrop_path ?? bannerImg;

  const descriptionStyle: string = title ? 'mt-[5%]' : '';

  return (
    <View className="flex-1 w-full h-full bg-app-black">
      <View className="absolute inset-0 z-10">
        <Image className="w-full h-full" source={{ uri: imgUrlToUse }} resizeMode="cover" />
      </View>
      <View className="absolute inset-0 bg-black-opacity-60 z-20" />
      <View className="absolute inset-0 z-30">
        <View className={`${descriptionStyle} pl-8`}>
          <Text className="text-xl color-white font-nunito-black">{title}</Text>
          <View className="w-[40%] mt-3">
            <Text className="text-sm color-off-white font-nunito-reg">{description}</Text>
          </View>
          <View className="flex mt-8">
            <CTAActions content={props} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CommonInfo;
