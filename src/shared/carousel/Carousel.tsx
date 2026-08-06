import { useRef } from 'react';
import { FlatList, TVFocusGuideView } from 'react-native';
import CarouselListItem from 'shared/carousel/CarouselListItem';
import { useCarouselHelper } from 'shared/carousel/hooks/useCarouselHelper';
import { CarouselProps, CarouselSectionRenderItem } from 'shared/types';

const Carousel = ({ carouselSectionIDList }: CarouselProps) => {
  const listRef = useRef<FlatList<string>>(null);
  const { scrollToTopOfRow } = useCarouselHelper(listRef);

  const keyExtractor = (item: string) => item;

  const renderItem = ({ item, index }: CarouselSectionRenderItem) => (
    <CarouselListItem carouselSectionId={item} onRowFocused={scrollToTopOfRow} rowIndex={index} />
  );

  return (
    <TVFocusGuideView className="flex-1 w-full mt-5">
      <FlatList
        ref={listRef}
        data={carouselSectionIDList}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </TVFocusGuideView>
  );
};

export default Carousel;
