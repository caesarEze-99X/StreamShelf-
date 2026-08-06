import { RefObject } from 'react';
import { FlatList } from 'react-native';
import { CarouselHelperHook } from 'shared/types';

export const useCarouselHelper = (
  sectionListRef: RefObject<FlatList<string> | null>,
): CarouselHelperHook => {
  const scrollToTopOfRow = (index: number) => {
    sectionListRef.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0,
      viewOffset: 105,
    });
  };

  return { scrollToTopOfRow };
};
