import Menu from 'features/menu/screens/Menu';
import { TVFocusGuideView, View } from 'react-native';
import Carousel from 'shared/carousel/Carousel';
import { CAROUSEL_DATA_LIST } from 'shared/carousel/constants/constant';

const Home = () => {
  return (
    <TVFocusGuideView className="flex-1 bg-app-black">
      <View className="flex-1">
        <Menu />
        <Carousel carouselSectionIDList={CAROUSEL_DATA_LIST} />
      </View>
    </TVFocusGuideView>
  );
};

export default Home;
