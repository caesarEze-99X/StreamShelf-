import { ReactNode } from 'react';
import { PressableProps } from 'react-native';
import { ResetStore } from 'reusableTypes/types';

export type RowFocusedCallback = (rowIndex: number) => void;
export type FocusCallbackNoIndex = () => void;
export type CarouselListData = Array<CarouselSectionListItem>;

export type FocusableButtonProps = {
  children: Readonly<ReactNode>;
} & PressableProps;

export interface CarouselProps {
  carouselSectionIDList: Array<string>;
}

export type CarouselSectionListItem = {
  carouselSectionId: string;
  onRowFocused?: RowFocusedCallback;
  rowIndex?: number;
};

export type Content = {
  title: string;
  overview: string;
  contentId: string;
  poster_path: string;
  backdrop_path?: string;
  onFocusCallback?: FocusCallbackNoIndex;
};

export type CarouselSectionRenderItem = {
  item: string;
  index: number;
};

export type CarouselItem = {
  item: Content;
};

export type CarouselContentRenderItem = {
  item: Partial<Content>;
  index: number;
};

export type CarouselHelperHook = {
  scrollToTopOfRow: RowFocusedCallback;
};

export type FocusHelperHook = {
  onFocus: () => void;
  onBlur: () => void;
  focused: boolean;
};

export type ContentApiResponse = {
  page: number;
  results: Array<Partial<Content>>;
};

export type CarouselStateItemToUpdate = Pick<CarouselStateStore, 'carouselData'>;

export type CarouselData = {
  errorFetchingData: boolean;
  loading: boolean;
  data: Array<Partial<Content>> | [];
};

export type CarouselDataType = Record<string, CarouselData>;

export type CarouselStateStore = {
  carouselData: CarouselDataType;
  resetStore: ResetStore;
  updateStoreItem: (sectionId: string, data: CarouselData) => void;
};

export type CarouselFetchHook = {} & CarouselData;

export type LoadingContainerRenderItem = {
  item?: number;
  index?: number;
};

export type ErrorPlaceholderProps = {
  onFocusCallback?: FocusCallbackNoIndex;
};

export type ContentCardHelperHook = {
  onContentCardPressed: () => void;
};

export interface EmptyCarouselProp {
  message: string;
}

export type ContentCardProp = Partial<Content> & {
  containerStyle?: string;
};
