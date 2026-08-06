import { Pressable } from 'react-native';
import { FocusableButtonProps } from 'shared/types';

const FocusableButton = ({ children, ...restProps }: FocusableButtonProps) => {
  return <Pressable {...restProps}>{children}</Pressable>;
};

export default FocusableButton;
