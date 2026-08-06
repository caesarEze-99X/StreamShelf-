import { FlatList, Text, TVFocusGuideView, View } from 'react-native';
import { CAROUSEL_CONSTANTS } from 'shared/carousel/constants/constant';
import { CAROUSEL_LIST_STRING } from 'shared/carousel/constants/string';
import ContentCard from 'shared/carousel/ContentCard';
import useCarouselFetch from 'shared/carousel/hooks/useCarouselFetch';
import EmptyCarousel from 'shared/emptyCarousel/EmptyCarousel';
import ErrorPlaceHolder from 'shared/error/Error';
import LoadingPlaceHolder from 'shared/loading/Loading';
import { CarouselContentRenderItem, CarouselSectionListItem, Content } from 'shared/types';

const CarouselListItem = ({
  carouselSectionId,
  onRowFocused,
  rowIndex,
}: CarouselSectionListItem) => {
  const sectionName: string = CAROUSEL_CONSTANTS.SECTIONS[carouselSectionId];
  const { data, errorFetchingData, loading } = useCarouselFetch(carouselSectionId);
  const emptyDataMessage: string = `${sectionName} ${CAROUSEL_LIST_STRING.hasNoData}`;

  const onFocusCallback = () => onRowFocused?.(rowIndex!);

  const renderItem = ({ item }: CarouselContentRenderItem) => (
    <ContentCard {...item} onFocusCallback={onFocusCallback} />
  );

  const keyExtractor = (item: Partial<Content>, index: number) => `${item.title!}*${index}`;

  const itemSeparator = () => <View className="w-[8px]" />;

  if (loading) return <LoadingPlaceHolder />;

  if (errorFetchingData) return <ErrorPlaceHolder />;

  if (data.length <= 0) return <EmptyCarousel message={emptyDataMessage} />;

  return (
    <TVFocusGuideView key={carouselSectionId} className="w-full mb-[7%]">
      <Text className="text-md color-off-white mb-4 mt-5 ml-5 font-nunito-bold">{sectionName}</Text>
      <FlatList
        data={data}
        horizontal
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={itemSeparator}
      />
    </TVFocusGuideView>
  );
};

export default CarouselListItem;
