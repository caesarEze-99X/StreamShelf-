import { CTAItem as CTAItemtype } from 'features/commonInfo/types';
import { Text, View } from 'react-native';
import { useFocusHelper } from 'reusableHooks/useFocusHelper';
import FocusableButton from 'shared/focusableButton/FocusableButton';

const CTAItem = ({ item, onPress, index }: CTAItemtype) => {
  const { onFocus, onBlur, focused } = useFocusHelper(onPress);
  return (
    <FocusableButton
      hasTVPreferredFocus={index === 0}
      onFocus={onFocus}
      onBlur={onBlur}
      onPress={onPress}
    >
      <View
        className={`
            h-[50px]
            px-4
            rounded-xl 
            bg-white-opacity-70 
            items-center
            justify-center 
            ${focused ? 'border-[1.5px] border-teal-300' : 'border-transparent'}
        `}
      >
        <Text className="font-nunito-bold text-sm color-white">{item}</Text>
      </View>
    </FocusableButton>
  );
};

export default CTAItem;
