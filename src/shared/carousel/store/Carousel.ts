import {
  CarouselData,
  CarouselDataType,
  CarouselStateItemToUpdate,
  CarouselStateStore,
} from 'shared/types';
import { createWithEqualityFn } from 'zustand/traditional';

const carouselData: CarouselDataType = {};
const initialState: Partial<CarouselStateStore> = {
  carouselData,
};

export const useCarouselStore = createWithEqualityFn<CarouselStateStore>(set => ({
  carouselData,
  resetStore: () => set({ ...initialState }),
  updateStoreItem: (sectionId: string, data: CarouselData) =>
    set((state: CarouselStateItemToUpdate) => ({
      carouselData: {
        ...state.carouselData,
        [sectionId]: data,
      },
    })),
}));
