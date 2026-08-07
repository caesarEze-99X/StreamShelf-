import { Content } from 'shared/types';

export type MyListItem = {} & Omit<Content, 'onFocusCallback'>;

export type MyListStateStore = {
  contentList: Array<MyListItem>;
  addContentToList: (content: MyListItem) => void;
  removeContentFromList: (contentId: string) => void;
  isContentInList: (contentId: string) => boolean;
};

export type MyListRenderItem = {
  item: MyListItem;
  index: number;
};

export type MyListHelperHook = {
  myList: Array<MyListItem>;
  addToList: (content: MyListItem) => void;
  removeFromList: (contentId: string) => void;
  isContentInList: (contentId: string) => boolean;
};
