import { COMMON_INFO_STRING } from 'features/commonInfo/constants/string';
import { CommonInfoHelperHook } from 'features/commonInfo/types';
import { useMyListHelper } from 'features/myList/hooks/useMyListHelper';
import { CommonInfoParams } from 'navigation/types';
import { Content } from 'shared/types';

export const useCTAActionHelper = (content?: CommonInfoParams): CommonInfoHelperHook => {
  const { addToList, removeFromList, isContentInList } = useMyListHelper();

  const contentCleaned: Content = { title: '', contentId: '', overview: '', poster_path: '' };

  if (content) {
    contentCleaned.title = content.title;
    contentCleaned.contentId = content.contentId;
    contentCleaned.overview = content.description;
    contentCleaned.poster_path = content.bannerImg;
    contentCleaned.backdrop_path = content.backdrop_path;
  }

  const addContentToList = () => {
    if (content) addToList(contentCleaned);
  };

  const removeContentFromList = () => {
    if (content) {
      if (isContentInList(contentCleaned?.contentId)) {
        removeFromList(contentCleaned.contentId);
      }
    }
  };

  const generateCTAList = (): Array<string> => {
    const { contentId } = contentCleaned;
    const ctaActionList: Array<string> = [];

    if (isContentInList(contentId)) {
      ctaActionList.push(COMMON_INFO_STRING.removeFromList);
    } else {
      ctaActionList.push(COMMON_INFO_STRING.addToList);
    }
    return ctaActionList;
  };

  const onCTAItemPressed = (item: string) => {
    if (item === COMMON_INFO_STRING.addToList) {
      addContentToList();
    } else {
      removeContentFromList();
    }
  };

  return { generateCTAList, onCTAItemPressed };
};
