import { Image, Text, View } from 'react-native';
import { useFocusHelper } from 'reusableHooks/useFocusHelper';
import FocusableButton from 'shared/focusableButton/FocusableButton';
import { ContentCardProp } from 'shared/types';
import { useContentCardHelper } from './hooks/useContentCardHelper';

const ContentCard = (props: ContentCardProp) => {
  const { poster_path, title, onFocusCallback, containerStyle = '' } = props;
  const { onBlur, onFocus, focused } = useFocusHelper(onFocusCallback);
  const { onContentCardPressed } = useContentCardHelper(props);

  return (
    <View className={containerStyle}>
      <FocusableButton
        onFocus={onFocus}
        onBlur={onBlur}
        onPress={onContentCardPressed}
        className={`
        ${!containerStyle && 'ml-5'}
        ${containerStyle && containerStyle.includes('w-') ? '' : 'w-[300px]'}
        h-[200px]
        rounded-xl
        bg-white-opacity-12
        ${focused ? 'border-[2px] border-teal-300' : 'border-transparent'}
      `}
      >
        <View className="flex-1 overflow-hidden rounded-xl">
          <Image className="w-full h-full" source={{ uri: poster_path }} resizeMode="cover" />
        </View>
      </FocusableButton>
      {title && (
        <Text className="mt-2 ml-5 color-white-opacity-95 text-sm-1 font-nunito-reg">{title}</Text>
      )}
    </View>
  );
};

export default ContentCard;
