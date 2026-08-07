import { useMyListStore } from 'features/myList/store/MyList';
import { MyListHelperHook, MyListItem, MyListStateStore } from 'features/myList/types';

export const useMyListHelper = (): MyListHelperHook => {
  const {
    contentList: myList,
    addContentToList,
    removeContentFromList,
    isContentInList,
  } = useMyListStore<MyListStateStore>(state => ({
    contentList: state.contentList,
    addContentToList: state.addContentToList,
    removeContentFromList: state.removeContentFromList,
    isContentInList: state.isContentInList,
  }));

  const addToList = (content: MyListItem) => addContentToList(content);

  const removeFromList = (contentId: string) => {
    if (isContentInList(contentId)) {
      removeContentFromList(contentId);
    }
  };
  return { myList, addToList, removeFromList, isContentInList };
};
