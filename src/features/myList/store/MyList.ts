import AsyncStorage from '@react-native-async-storage/async-storage';
import { MyListItem, MyListStateStore } from 'features/myList/types';
import { createJSONStorage, persist } from 'zustand/middleware';
import { createWithEqualityFn } from 'zustand/traditional';

export const useMyListStore = createWithEqualityFn<MyListStateStore>()(
  persist(
    (set, get) => ({
      contentList: [],
      addContentToList: (item: MyListItem) =>
        set((state: MyListStateStore) => {
          if (
            state.contentList.some((content: MyListItem) => content.contentId === item.contentId)
          ) {
            return state;
          }
          return {
            contentList: [...state.contentList, item],
          };
        }),
      removeContentFromList: (contentId: string) =>
        set((state: MyListStateStore) => ({
          contentList: state.contentList.filter(item => item.contentId !== contentId),
        })),
      isContentInList: (contentId: string) =>
        get().contentList.some((content: MyListItem) => content.contentId === contentId),
    }),
    {
      name: 'myListDB',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
