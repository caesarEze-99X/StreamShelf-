import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ROUTE_NAME } from 'navigation/constants/constant';
import { RootStackParamList } from 'navigation/types';
import { Content, ContentCardHelperHook } from 'shared/types';

export const useContentCardHelper = (contentCardInfo: Partial<Content>): ContentCardHelperHook => {
  const {
    overview: description,
    title,
    poster_path: bannerImg,
    backdrop_path,
    contentId,
  } = contentCardInfo;
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onContentCardPressed = (): void => {
    if (description && bannerImg)
      navigate(ROUTE_NAME.CommonInfo, {
        title: title!,
        description,
        bannerImg,
        backdrop_path,
        contentId: contentId!,
      });
  };

  return { onContentCardPressed };
};
