import { Text, View } from 'react-native';
import { useFocusHelper } from 'reusableHooks/useFocusHelper';
import FocusableButton from 'shared/focusableButton/FocusableButton';
import { ErrorPlaceholderProps } from 'shared/types';

const ErrorPlaceHolder = ({ onFocusCallback }: ErrorPlaceholderProps) => {
  const { onBlur, onFocus, focused } = useFocusHelper(onFocusCallback);

  return (
    <View className="w-full mb-[7%]">
      <View className="bg-white-opacity-12 h-[20px] w-[20%] ml-5 mb-5 rounded-xl" />
      <View
        className="ml-5 w-full h-[200px] rounded-xl bg-white-opacity-12 justify-center 
      items-center"
      >
        <FocusableButton
          onFocus={onFocus}
          onBlur={onBlur}
          className={`
            p-10 py-4 
            bg-white-opacity-70 
            rounded-xl ${focused ? 'border-[2px] border-teal-300' : 'border-transparent'}
        `}
        >
          <Text className="text-rg">Retry</Text>
        </FocusableButton>
      </View>
    </View>
  );
};

export default ErrorPlaceHolder;
