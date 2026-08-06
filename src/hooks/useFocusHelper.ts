import { useState } from 'react';
import { FocusCallbackNoIndex, FocusHelperHook } from 'shared/types';

export const useFocusHelper = (onFocusCallback?: FocusCallbackNoIndex): FocusHelperHook => {
  const [focused, setFocused] = useState<boolean>(false);

  const onFocus = (): void => {
    setFocused(true);
    onFocusCallback?.();
  };

  const onBlur = (): void => setFocused(false);

  return { onFocus, onBlur, focused };
};
